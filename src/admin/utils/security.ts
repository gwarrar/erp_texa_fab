// Security utilities for admin authentication

// Simple hash function for client-side (not for production secrets)
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Verify password against hash
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const passwordHash = await hashPassword(password);
  return passwordHash === hash;
}

// Generate JWT-like token (simplified for client-side)
export function generateToken(payload: object, secret: string): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payloadStr = btoa(JSON.stringify({
    ...payload,
    iat: Date.now(),
    exp: Date.now() + (30 * 60 * 1000), // 30 minutes
  }));
  const signature = btoa(JSON.stringify({ secret: secret.substring(0, 10) }));
  return `${header}.${payloadStr}.${signature}`;
}

// Verify and decode token
export function verifyToken(token: string): { valid: boolean; payload?: any; expired?: boolean } {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return { valid: false };
    
    const payload = JSON.parse(atob(parts[1]));
    
    if (payload.exp && payload.exp < Date.now()) {
      return { valid: false, expired: true };
    }
    
    return { valid: true, payload };
  } catch {
    return { valid: false };
  }
}

// Rate limiting for brute force protection
interface LoginAttempt {
  count: number;
  lastAttempt: number;
  lockedUntil?: number;
}

const loginAttempts: Map<string, LoginAttempt> = new Map();
const MAX_ATTEMPTS = 5;
const LOCK_DURATION = 15 * 60 * 1000; // 15 minutes
const ATTEMPT_WINDOW = 5 * 60 * 1000; // 5 minutes

export function checkRateLimit(identifier: string): { allowed: boolean; remainingAttempts: number; lockTimeRemaining?: number } {
  const now = Date.now();
  const attempt = loginAttempts.get(identifier);
  
  if (!attempt) {
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS };
  }
  
  // Check if locked
  if (attempt.lockedUntil && attempt.lockedUntil > now) {
    return {
      allowed: false,
      remainingAttempts: 0,
      lockTimeRemaining: Math.ceil((attempt.lockedUntil - now) / 1000 / 60),
    };
  }
  
  // Reset if outside window
  if (now - attempt.lastAttempt > ATTEMPT_WINDOW) {
    loginAttempts.delete(identifier);
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS };
  }
  
  return {
    allowed: attempt.count < MAX_ATTEMPTS,
    remainingAttempts: Math.max(0, MAX_ATTEMPTS - attempt.count),
  };
}

export function recordLoginAttempt(identifier: string, success: boolean): void {
  const now = Date.now();
  
  if (success) {
    loginAttempts.delete(identifier);
    return;
  }
  
  const attempt = loginAttempts.get(identifier) || { count: 0, lastAttempt: now };
  attempt.count += 1;
  attempt.lastAttempt = now;
  
  if (attempt.count >= MAX_ATTEMPTS) {
    attempt.lockedUntil = now + LOCK_DURATION;
  }
  
  loginAttempts.set(identifier, attempt);
}

// Session management
const SESSION_KEY = 'texacore_admin_session';
const SESSION_ACTIVITY_KEY = 'texacore_admin_activity';
const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes

export function saveSession(token: string): void {
  sessionStorage.setItem(SESSION_KEY, token);
  updateActivity();
}

export function getSession(): string | null {
  const token = sessionStorage.getItem(SESSION_KEY);
  if (!token) return null;
  
  // Check inactivity
  const lastActivity = sessionStorage.getItem(SESSION_ACTIVITY_KEY);
  if (lastActivity && Date.now() - parseInt(lastActivity) > INACTIVITY_TIMEOUT) {
    clearSession();
    return null;
  }
  
  // Verify token
  const result = verifyToken(token);
  if (!result.valid) {
    clearSession();
    return null;
  }
  
  return token;
}

export function clearSession(): void {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_ACTIVITY_KEY);
}

export function updateActivity(): void {
  sessionStorage.setItem(SESSION_ACTIVITY_KEY, Date.now().toString());
}

// Security event logging
interface SecurityEvent {
  type: 'login_success' | 'login_failed' | 'logout' | 'session_expired' | 'rate_limited';
  timestamp: number;
  ip?: string;
  userAgent?: string;
  details?: string;
}

const SECURITY_LOG_KEY = 'texacore_security_log';
const MAX_LOG_ENTRIES = 100;

export function logSecurityEvent(event: Omit<SecurityEvent, 'timestamp'>): void {
  const logs = getSecurityLogs();
  logs.unshift({
    ...event,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
  });
  
  // Keep only last 100 entries
  const trimmed = logs.slice(0, MAX_LOG_ENTRIES);
  localStorage.setItem(SECURITY_LOG_KEY, JSON.stringify(trimmed));
}

export function getSecurityLogs(): SecurityEvent[] {
  try {
    const logs = localStorage.getItem(SECURITY_LOG_KEY);
    return logs ? JSON.parse(logs) : [];
  } catch {
    return [];
  }
}

// CSRF Token generation
export function generateCSRFToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

// Input sanitization
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: URLs
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}

// Secure storage for sensitive data
export function secureStore(key: string, value: string): void {
  // Using sessionStorage for sensitive data (cleared on browser close)
  sessionStorage.setItem(key, btoa(value));
}

export function secureRetrieve(key: string): string | null {
  const value = sessionStorage.getItem(key);
  if (!value) return null;
  try {
    return atob(value);
  } catch {
    return null;
  }
}

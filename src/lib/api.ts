// API Service for TexaCore CMS
// This service handles all communication between the frontend and PHP backend

const API_BASE_URL = '/api';
const DATA_BASE_URL = '/data';

// Token management
let authToken: string | null = null;

export const setAuthToken = (token: string | null) => {
  authToken = token;
  if (token) {
    localStorage.setItem('texacore_admin_token', token);
  } else {
    localStorage.removeItem('texacore_admin_token');
  }
};

export const getAuthToken = (): string | null => {
  if (!authToken) {
    authToken = localStorage.getItem('texacore_admin_token');
  }
  return authToken;
};

// Check if we're in development mode (Tempo/Vite)
const isDevelopment = import.meta.env.DEV;

// Get headers for API requests
const getHeaders = (includeAuth = false): HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (includeAuth) {
    const token = getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  
  return headers;
};

// ============ DATA FETCHING (Public) ============

export type DataFile = 
  | 'hero' 
  | 'features' 
  | 'testimonials' 
  | 'pricing' 
  | 'faq' 
  | 'settings' 
  | 'footer' 
  | 'trust' 
  | 'stats' 
  | 'solutions' 
  | 'pages' 
  | 'news'
  | 'users'
  | 'announcement'
  | 'contact'
  | 'cta';

export const fetchData = async <T>(file: DataFile): Promise<T | null> => {
  try {
    // In development, fetch directly from JSON files
    if (isDevelopment) {
      const response = await fetch(`${DATA_BASE_URL}/${file}.json`);
      if (!response.ok) {
        console.warn(`Failed to fetch ${file}.json:`, response.statusText);
        return null;
      }
      return response.json();
    }
    
    // In production, use PHP API
    const response = await fetch(`${API_BASE_URL}/save.php?file=${file}`);
    if (!response.ok) {
      console.warn(`Failed to fetch ${file}:`, response.statusText);
      return null;
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching ${file}:`, error);
    return null;
  }
};

// ============ DATA SAVING (Admin Only) ============

export const saveData = async <T>(file: DataFile, data: T): Promise<boolean> => {
  try {
    // In development, save to localStorage as fallback
    if (isDevelopment) {
      localStorage.setItem(`texacore_${file}`, JSON.stringify(data));
      console.log(`[DEV] Saved ${file} to localStorage`);
      return true;
    }
    
    // In production, use PHP API
    const response = await fetch(`${API_BASE_URL}/save.php`, {
      method: 'POST',
      headers: getHeaders(true),
      body: JSON.stringify({ file, data }),
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      console.error(`Failed to save ${file}:`, result.error);
      return false;
    }
    
    return result.success;
  } catch (error) {
    console.error(`Error saving ${file}:`, error);
    return false;
  }
};

// ============ AUTHENTICATION ============

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  user?: {
    username: string;
    role: string;
  };
  error?: string;
}

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  try {
    // In development, use simple validation
    if (isDevelopment) {
      // Simple dev validation - accept 'admin' / 'admin' for testing
      if (credentials.username === 'admin' && credentials.password === 'admin') {
        const token = btoa(JSON.stringify({ username: 'admin', exp: Date.now() + 86400000 }));
        setAuthToken(token);
        return {
          success: true,
          token,
          user: { username: 'admin', role: 'admin' }
        };
      }
      return { success: false, error: 'Invalid credentials' };
    }
    
    // In production, use PHP API
    const response = await fetch(`${API_BASE_URL}/auth.php`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(credentials),
    });
    
    const result: LoginResponse = await response.json();
    
    if (result.success && result.token) {
      setAuthToken(result.token);
    }
    
    return result;
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: 'Connection failed' };
  }
};

export const logout = () => {
  setAuthToken(null);
};

export const verifyToken = async (): Promise<boolean> => {
  const token = getAuthToken();
  if (!token) return false;
  
  try {
    // In development, check token expiry locally
    if (isDevelopment) {
      try {
        const payload = JSON.parse(atob(token));
        return payload.exp > Date.now();
      } catch {
        return false;
      }
    }
    
    // In production, verify with PHP API
    const response = await fetch(`${API_BASE_URL}/auth.php`, {
      method: 'GET',
      headers: getHeaders(true),
    });
    
    const result = await response.json();
    return result.valid;
  } catch (error) {
    console.error('Token verification error:', error);
    return false;
  }
};

// ============ FILE UPLOAD ============

export interface UploadResponse {
  success: boolean;
  url?: string;
  filename?: string;
  error?: string;
}

export const uploadImage = async (file: File): Promise<UploadResponse> => {
  try {
    // In development, use base64 data URL
    if (isDevelopment) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          const url = reader.result as string;
          resolve({
            success: true,
            url,
            filename: file.name,
          });
        };
        reader.onerror = () => {
          resolve({ success: false, error: 'Failed to read file' });
        };
        reader.readAsDataURL(file);
      });
    }
    
    // In production, upload to PHP API
    const formData = new FormData();
    formData.append('file', file);
    
    const token = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/upload.php`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });
    
    return response.json();
  } catch (error) {
    console.error('Upload error:', error);
    return { success: false, error: 'Upload failed' };
  }
};

export const deleteImage = async (filename: string): Promise<boolean> => {
  try {
    if (isDevelopment) {
      console.log(`[DEV] Would delete image: ${filename}`);
      return true;
    }
    
    const response = await fetch(`${API_BASE_URL}/delete-image.php`, {
      method: 'POST',
      headers: getHeaders(true),
      body: JSON.stringify({ filename }),
    });
    
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Delete image error:', error);
    return false;
  }
};

// ============ HELPER: Get localized data ============

export const getLocalizedData = <T extends Record<string, unknown>>(
  data: T | null,
  language: string,
  fallbackLanguage = 'en'
): T[keyof T] | null => {
  if (!data) return null;
  
  const langData = data[language as keyof T];
  if (langData) return langData;
  
  const fallbackData = data[fallbackLanguage as keyof T];
  if (fallbackData) return fallbackData;
  
  return null;
};

// Export default API object
const api = {
  fetchData,
  saveData,
  login,
  logout,
  verifyToken,
  uploadImage,
  deleteImage,
  getLocalizedData,
  setAuthToken,
  getAuthToken,
};

export default api;

/**
 * CMS Cache System
 * Prevents redundant API calls by caching Supabase data
 */

type CacheEntry<T> = {
  data: T;
  timestamp: number;
  expiresAt: number;
};

type CacheKey = string;

class CMSCache {
  private cache: Map<CacheKey, CacheEntry<any>> = new Map();
  private defaultTTL: number = 5 * 60 * 1000; // 5 minutes default
  private pendingRequests: Map<CacheKey, Promise<any>> = new Map();

  /**
   * Generate a cache key from parameters
   */
  private generateKey(type: string, siteId: string, language: string, id?: string): CacheKey {
    return `${type}:${siteId}:${language}${id ? `:${id}` : ''}`;
  }

  /**
   * Check if cache entry is valid
   */
  private isValid<T>(entry: CacheEntry<T> | undefined): boolean {
    if (!entry) return false;
    return Date.now() < entry.expiresAt;
  }

  /**
   * Get data from cache or fetch it
   */
  async getOrFetch<T>(
    type: string,
    siteId: string,
    language: string,
    fetchFn: () => Promise<T>,
    id?: string,
    ttl: number = this.defaultTTL
  ): Promise<T | null> {
    const key = this.generateKey(type, siteId, language, id);

    // Check cache first
    const cached = this.cache.get(key);
    if (this.isValid(cached)) {
      return cached!.data as T;
    }

    // Check if there's already a pending request for this key
    if (this.pendingRequests.has(key)) {
      return this.pendingRequests.get(key) as Promise<T>;
    }

    // Create new fetch promise
    const fetchPromise = (async () => {
      try {
        const data = await fetchFn();
        
        // Store in cache
        this.cache.set(key, {
          data,
          timestamp: Date.now(),
          expiresAt: Date.now() + ttl,
        });

        return data;
      } catch (error) {
        console.error(`Cache fetch error for ${key}:`, error);
        return null;
      } finally {
        // Clean up pending request
        this.pendingRequests.delete(key);
      }
    })();

    // Store the pending request
    this.pendingRequests.set(key, fetchPromise);

    return fetchPromise;
  }

  /**
   * Set data in cache directly
   */
  set<T>(type: string, siteId: string, language: string, data: T, id?: string, ttl: number = this.defaultTTL): void {
    const key = this.generateKey(type, siteId, language, id);
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      expiresAt: Date.now() + ttl,
    });
  }

  /**
   * Get data from cache
   */
  get<T>(type: string, siteId: string, language: string, id?: string): T | null {
    const key = this.generateKey(type, siteId, language, id);
    const cached = this.cache.get(key);
    return this.isValid(cached) ? (cached!.data as T) : null;
  }

  /**
   * Invalidate cache for a specific key
   */
  invalidate(type: string, siteId: string, language: string, id?: string): void {
    const key = this.generateKey(type, siteId, language, id);
    this.cache.delete(key);
  }

  /**
   * Invalidate all cache for a site
   */
  invalidateSite(siteId: string): void {
    for (const key of this.cache.keys()) {
      if (key.includes(`:${siteId}:`)) {
        this.cache.delete(key);
      }
    }
  }

  /**
   * Invalidate all cache for a content type
   */
  invalidateType(type: string): void {
    for (const key of this.cache.keys()) {
      if (key.startsWith(`${type}:`)) {
        this.cache.delete(key);
      }
    }
  }

  /**
   * Clear all cache
   */
  clear(): void {
    this.cache.clear();
    this.pendingRequests.clear();
  }

  /**
   * Get cache statistics
   */
  getStats(): { size: number; pendingRequests: number } {
    return {
      size: this.cache.size,
      pendingRequests: this.pendingRequests.size,
    };
  }
}

// Export singleton instance
export const cmsCache = new CMSCache();

// Export types
export type { CacheKey, CacheEntry };

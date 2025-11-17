/**
 * Authentication and user management utilities
 */

/**
 * Generate a valid UUID v4
 * @returns UUID string in format xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
 */
export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Validate UUID format
 * @param uuid - String to validate
 * @returns true if valid UUID format
 */
export function isValidUUID(uuid: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

/**
 * Get current user ID from session/auth
 * TODO: Implement actual authentication logic
 * @returns User UUID or generates a temporary one
 */
export function getCurrentUserId(): string {
  // Check if user ID exists in localStorage (temporary solution)
  if (typeof window !== 'undefined') {
    let userId = localStorage.getItem('temp_user_id');
    
    if (!userId || !isValidUUID(userId)) {
      // Generate and store a temporary user ID
      userId = generateUUID();
      localStorage.setItem('temp_user_id', userId);
      console.warn('Using temporary user ID. Implement proper authentication.');
    }
    
    return userId;
  }
  
  // Fallback for SSR
  return generateUUID();
}

/**
 * Clear temporary user session
 */
export function clearUserSession(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('temp_user_id');
  }
}

/**
 * Check if user is authenticated
 * TODO: Implement actual authentication check
 * @returns true if user is authenticated
 */
export function isAuthenticated(): boolean {
  // Temporary implementation
  if (typeof window !== 'undefined') {
    const userId = localStorage.getItem('temp_user_id');
    return userId !== null && isValidUUID(userId);
  }
  return false;
}

/**
 * User information interface
 */
export interface UserInfo {
  id: string;
  email?: string;
  name?: string;
  role?: string;
}

/**
 * Get current user information
 * TODO: Implement actual user data retrieval
 * @returns User information or null
 */
export function getCurrentUser(): UserInfo | null {
  if (typeof window !== 'undefined') {
    const userId = localStorage.getItem('temp_user_id');
    
    if (userId && isValidUUID(userId)) {
      return {
        id: userId,
        // Add other user fields when authentication is implemented
      };
    }
  }
  
  return null;
}

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
export type UserRole = 'USER' | 'ADMIN' | 'BUSINESS_OWNER';

export interface UserInfo {
  id: string;
  email?: string;
  name?: string;
  role: UserRole;
}

/**
 * Get current user information
 * TODO: Implement actual user data retrieval
 * @returns User information or null
 */
export function getCurrentUser(): UserInfo | null {
  if (typeof window !== 'undefined') {
    const userId = localStorage.getItem('temp_user_id');
    const userRole = (localStorage.getItem('user_role') as UserRole) || 'USER';
    
    if (userId && isValidUUID(userId)) {
      return {
        id: userId,
        role: userRole,
      };
    }
  }
  
  return null;
}

export function setUserRole(role: UserRole): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user_role', role);
  }
}

export function getUserRole(): UserRole {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('user_role') as UserRole) || 'USER';
  }
  return 'USER';
}

export function isAdmin(): boolean {
  return getUserRole() === 'ADMIN';
}

export function isBusinessOwner(): boolean {
  return getUserRole() === 'BUSINESS_OWNER';
}

export function loginAsAdmin(adminId: string, email?: string, name?: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('admin_id', adminId);
    localStorage.setItem('user_role', 'ADMIN');
    if (email) localStorage.setItem('admin_email', email);
    if (name) localStorage.setItem('admin_name', name);
  }
}

export function getAdminId(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('admin_id');
  }
  return null;
}

export function getAdminInfo(): { id: string; email?: string; name?: string } | null {
  if (typeof window !== 'undefined') {
    const id = localStorage.getItem('admin_id');
    if (!id) return null;
    
    return {
      id,
      email: localStorage.getItem('admin_email') || undefined,
      name: localStorage.getItem('admin_name') || undefined,
    };
  }
  return null;
}

export function logoutAdmin(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('admin_id');
    localStorage.removeItem('admin_email');
    localStorage.removeItem('admin_name');
    localStorage.removeItem('user_role');
  }
}

export function isAdminLoggedIn(): boolean {
  if (typeof window !== 'undefined') {
    const adminId = localStorage.getItem('admin_id');
    return !!(adminId && isValidUUID(adminId));
  }
  return false;
}

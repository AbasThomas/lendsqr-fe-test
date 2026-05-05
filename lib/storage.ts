import { User } from '@/types/user';

const STORAGE_KEY = 'lendsqr_users';
const USER_DETAIL_KEY = 'lendsqr_user_detail';

/**
 * Storage utility for managing user data in localStorage/IndexedDB
 */
export const storage = {
  /**
   * Save all users to localStorage
   */
  saveUsers: (users: User[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    } catch (error) {
      console.error('Error saving users to storage:', error);
    }
  },

  /**
   * Get all users from localStorage
   */
  getUsers: (): User[] | null => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting users from storage:', error);
      return null;
    }
  },

  /**
   * Save a specific user detail to localStorage
   */
  saveUserDetail: (user: User): void => {
    try {
      localStorage.setItem(`${USER_DETAIL_KEY}_${user.id}`, JSON.stringify(user));
    } catch (error) {
      console.error('Error saving user detail to storage:', error);
    }
  },

  /**
   * Get a specific user detail from localStorage
   */
  getUserDetail: (userId: string): User | null => {
    try {
      const data = localStorage.getItem(`${USER_DETAIL_KEY}_${userId}`);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting user detail from storage:', error);
      return null;
    }
  },

  /**
   * Clear all stored data
   */
  clearAll: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  },

  /**
   * Update user status
   */
  updateUserStatus: (userId: string, status: User['status']): void => {
    try {
      const users = storage.getUsers();
      if (users) {
        const updatedUsers = users.map(user =>
          user.id === userId ? { ...user, status } : user
        );
        storage.saveUsers(updatedUsers);
      }
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  },
};

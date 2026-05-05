import { User, UserStats } from '@/types/user';
import { storage } from './storage';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://run.mocky.io/v3';

/**
 * API utility for fetching user data
 */
export const api = {
  /**
   * Fetch all users from the mock API
   */
  fetchUsers: async (): Promise<User[]> => {
    try {
      // Check if data exists in storage first
      const cachedUsers = storage.getUsers();
      if (cachedUsers && cachedUsers.length > 0) {
        return cachedUsers;
      }

      // Fetch from API if not in storage
      const response = await fetch(`${API_URL}/users`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const users: User[] = await response.json();
      
      // Save to storage
      storage.saveUsers(users);
      
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      
      // Return cached data if API fails
      const cachedUsers = storage.getUsers();
      if (cachedUsers) {
        return cachedUsers;
      }
      
      throw error;
    }
  },

  /**
   * Fetch a single user by ID
   */
  fetchUserById: async (userId: string): Promise<User | null> => {
    try {
      // Check storage first
      const cachedUser = storage.getUserDetail(userId);
      if (cachedUser) {
        return cachedUser;
      }

      // Fetch all users and find the specific one
      const users = await api.fetchUsers();
      const user = users.find(u => u.id === userId);
      
      if (user) {
        storage.saveUserDetail(user);
        return user;
      }
      
      return null;
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      return null;
    }
  },

  /**
   * Get user statistics
   */
  getUserStats: async (): Promise<UserStats> => {
    try {
      const users = await api.fetchUsers();
      
      return {
        totalUsers: users.length,
        activeUsers: users.filter(u => u.status === 'active').length,
        usersWithLoans: Math.floor(users.length * 0.5), // Mock data
        usersWithSavings: Math.floor(users.length * 0.4), // Mock data
      };
    } catch (error) {
      console.error('Error getting user stats:', error);
      return {
        totalUsers: 0,
        activeUsers: 0,
        usersWithLoans: 0,
        usersWithSavings: 0,
      };
    }
  },
};

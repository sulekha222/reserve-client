import { apiClient } from './apiClient.js';
import { User, UserRole } from '../types/index.js';

export interface AuthResponse {
  success: boolean;
  data: {
    user: User;
    token: string;
  };
}

export class AuthService {
  static async login(email: string, password: string): Promise<AuthResponse> {
    return apiClient.post('/auth/login', { email, password });
  }

  static async register(data: {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    organizationDetails?: any;
  }): Promise<AuthResponse> {
    return apiClient.post('/auth/register', data);
  }

  static async getMe(): Promise<{ success: boolean; data: User }> {
    return apiClient.get('/auth/me');
  }

  static logout() {
    localStorage.removeItem('reserveToken');
    localStorage.removeItem('reserveUser');
  }
}

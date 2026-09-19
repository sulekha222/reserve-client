import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole } from '../types/index.js';
import { AuthService } from '../services/authService.js';
import { useToast } from './ToastContext.js';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithRolePreset: (role: UserRole) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole, orgDetails?: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { showToast } = useToast();

  useEffect(() => {
    const savedToken = localStorage.getItem('reserveToken');
    const savedUser = localStorage.getItem('reserveUser');

    if (savedToken && savedUser) {
      try {
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem('reserveToken');
        localStorage.removeItem('reserveUser');
      }
    } else {
      // Default to food source user for demo convenience if unauthenticated
      loginWithRolePreset('FOOD_SOURCE').catch(() => {});
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await AuthService.login(email, password);
      setToken(res.data.token);
      setUser(res.data.user);
      localStorage.setItem('reserveToken', res.data.token);
      localStorage.setItem('reserveUser', JSON.stringify(res.data.user));
      showToast(`Welcome back, ${res.data.user.name}!`, 'success', 'Login Successful');
    } catch (err: any) {
      showToast(err.message || 'Login failed', 'error', 'Authentication Error');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithRolePreset = async (role: UserRole) => {
    let email = 'kitchen@reserve.org';
    if (role === 'NGO') email = 'ngo@reserve.org';
    if (role === 'ADMIN') email = 'admin@reserve.org';

    await login(email, 'password123');
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    role: UserRole,
    orgDetails?: any
  ) => {
    setIsLoading(true);
    try {
      const res = await AuthService.register({
        name,
        email,
        password,
        role,
        organizationDetails: orgDetails,
      });
      setToken(res.data.token);
      setUser(res.data.user);
      localStorage.setItem('reserveToken', res.data.token);
      localStorage.setItem('reserveUser', JSON.stringify(res.data.user));
      showToast('Account created and logged in!', 'success', 'Registration Complete');
    } catch (err: any) {
      showToast(err.message || 'Registration failed', 'error', 'Registration Error');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
    setToken(null);
    showToast('You have been logged out.', 'info');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        isLoading,
        login,
        loginWithRolePreset,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

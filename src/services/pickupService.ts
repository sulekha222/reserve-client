import { apiClient } from './apiClient.js';
import { Pickup } from '../types/index.js';

export class PickupService {
  static async getPickups(): Promise<{ success: boolean; data: Pickup[] }> {
    return apiClient.get('/pickups');
  }

  static async getPickupById(id: string): Promise<{ success: boolean; data: Pickup }> {
    return apiClient.get(`/pickups/${id}`);
  }

  static async verifyPickupToken(
    token: string,
    options?: { verifiedBy?: string; notes?: string }
  ): Promise<{
    success: boolean;
    data: {
      pickup: Pickup;
      food: any;
      verification: any;
      message: string;
    };
  }> {
    return apiClient.post('/pickups/verify', { token, ...options });
  }
}

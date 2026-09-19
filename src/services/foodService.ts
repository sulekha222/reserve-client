import { apiClient } from './apiClient.js';
import { FoodItem, FoodStatus } from '../types/index.js';

export interface CreateFoodDto {
  foodSourceId: string;
  foodName: string;
  category: string;
  quantity: number;
  unit?: string;
  dietType: 'Veg' | 'Non-Veg' | 'Vegan';
  preparedAt: string;
  expiresAt: string;
  description?: string;
  locationId?: string;
}

export class FoodService {
  static async getInventory(filters?: {
    status?: string;
    category?: string;
    dietType?: string;
    search?: string;
  }): Promise<{ success: boolean; data: FoodItem[]; meta?: { total: number } }> {
    return apiClient.get('/food', { params: filters });
  }

  static async getFoodById(id: string): Promise<{ success: boolean; data: FoodItem }> {
    return apiClient.get(`/food/${id}`);
  }

  static async addFood(data: CreateFoodDto): Promise<{ success: boolean; data: FoodItem; message: string }> {
    return apiClient.post('/food', data);
  }

  static async updateFood(
    id: string,
    data: Partial<CreateFoodDto> & { status?: FoodStatus }
  ): Promise<{ success: boolean; data: FoodItem; message: string }> {
    return apiClient.put(`/food/${id}`, data);
  }

  static async deleteFood(id: string): Promise<{ success: boolean; data: { id: string; message: string } }> {
    return apiClient.delete(`/food/${id}`);
  }
}

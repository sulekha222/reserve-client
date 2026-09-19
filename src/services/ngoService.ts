import { apiClient } from './apiClient.js';
import { NGO, NGORequirement, RequirementPriority, RequirementStatus } from '../types/index.js';

export interface CreateRequirementDto {
  ngoId: string;
  foodType: string;
  requiredQuantity: number;
  peopleCount: number;
  requiredBefore: string;
  priority: RequirementPriority;
  additionalNotes?: string;
}

export class NGOService {
  static async getNGOs(): Promise<{ success: boolean; data: NGO[] }> {
    return apiClient.get('/ngos');
  }

  static async getRequirements(filters?: {
    status?: RequirementStatus;
    priority?: RequirementPriority;
    ngoId?: string;
    foodType?: string;
  }): Promise<{ success: boolean; data: NGORequirement[] }> {
    return apiClient.get('/requirements', { params: filters });
  }

  static async getRequirementById(id: string): Promise<{ success: boolean; data: NGORequirement }> {
    return apiClient.get(`/requirements/${id}`);
  }

  static async createRequirement(
    data: CreateRequirementDto
  ): Promise<{ success: boolean; data: NGORequirement; message: string }> {
    return apiClient.post('/requirements', data);
  }

  static async updateRequirement(
    id: string,
    data: Partial<CreateRequirementDto> & { status?: RequirementStatus; fulfilledQuantity?: number }
  ): Promise<{ success: boolean; data: NGORequirement; message: string }> {
    return apiClient.put(`/requirements/${id}`, data);
  }

  static async deleteRequirement(
    id: string
  ): Promise<{ success: boolean; data: { id: string; message: string } }> {
    return apiClient.delete(`/requirements/${id}`);
  }
}

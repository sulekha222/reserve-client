import { apiClient } from './apiClient.js';
import { ImpactSummary, Redistribution } from '../types/index.js';

export class ImpactService {
  static async getImpact(): Promise<{ success: boolean; data: ImpactSummary }> {
    return apiClient.get('/impact/summary');
  }
}

export class RedistributionService {
  static async getAll(): Promise<{ success: boolean; data: Redistribution[] }> {
    return apiClient.get('/redistributions');
  }

  static async complete(data: {
    pickupId: string;
    quantity: number;
    peopleServed: number;
    notes?: string;
  }): Promise<{
    success: boolean;
    data: {
      redistribution: Redistribution;
      food: any;
      requirement: any;
      message: string;
    };
  }> {
    return apiClient.post('/redistributions', data);
  }
}

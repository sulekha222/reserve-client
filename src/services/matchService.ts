import { apiClient } from './apiClient.js';
import { Match, Pickup } from '../types/index.js';

export class MatchService {
  static async getMatches(): Promise<{ success: boolean; data: Match[] }> {
    return apiClient.get('/matches');
  }

  static async generateMatches(params?: {
    foodInventoryId?: string;
    ngoRequirementId?: string;
    maxDistanceKm?: number;
  }): Promise<{ success: boolean; data: Match[] }> {
    return apiClient.post('/matches/generate', params || {});
  }

  static async getMatchById(id: string): Promise<{ success: boolean; data: Match }> {
    return apiClient.get(`/matches/${id}`);
  }

  static async acceptMatch(
    matchIdOrPair: { matchId?: string; foodInventoryId?: string; ngoRequirementId?: string },
    options?: { scheduledAt?: string; notes?: string }
  ): Promise<{
    success: boolean;
    data: {
      match: Match;
      pickup: Pickup;
      food: any;
      requirement: any;
      route: any;
    };
    message: string;
  }> {
    const id = matchIdOrPair.matchId || 'new';
    return apiClient.post(`/matches/${id}/accept`, {
      ...options,
      foodInventoryId: matchIdOrPair.foodInventoryId,
      ngoRequirementId: matchIdOrPair.ngoRequirementId,
    });
  }
}

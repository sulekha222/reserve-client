import { apiClient } from './apiClient.js';
import { FoodSource, LocationSearchResult, NGO, RouteInfo } from '../types/index.js';

export interface NearbyResponse {
  referencePoint: { latitude: number; longitude: number };
  radiusKm: number;
  totalFound: number;
  foodSources: FoodSource[];
  ngos: NGO[];
}

export class LocationService {
  static async search(query: string): Promise<{ success: boolean; data: LocationSearchResult[] }> {
    return apiClient.get('/location/search', { params: { query } });
  }

  static async getNearby(lat: number, lon: number, radiusKm: number = 25): Promise<{ success: boolean; data: NearbyResponse }> {
    return apiClient.get('/location/nearby', { params: { lat, lon, radius: radiusKm } });
  }

  static async getRoute(
    originLat: number,
    originLon: number,
    destLat: number,
    destLon: number,
    originName?: string,
    destName?: string
  ): Promise<{ success: boolean; data: RouteInfo }> {
    return apiClient.get('/location/route', {
      params: { originLat, originLon, destLat, destLon, originName, destName },
    });
  }
}

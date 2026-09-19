export type UserRole = 'FOOD_SOURCE' | 'NGO' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  foodSourceId?: string;
  ngoId?: string;
}

export interface FoodSource {
  id: string;
  userId?: string;
  name: string;
  type: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
  availableMeals?: number;
  distanceKm?: number;
}

export type FoodStatus =
  | 'AVAILABLE'
  | 'RESERVED'
  | 'PICKED_UP'
  | 'REDISTRIBUTED'
  | 'EXPIRED'
  | 'CANCELLED';

export interface FoodItem {
  id: string;
  foodSourceId: string;
  foodName: string;
  category: string;
  quantity: number;
  unit: string;
  dietType: 'Veg' | 'Non-Veg' | 'Vegan';
  preparedAt: string;
  expiresAt: string;
  status: FoodStatus;
  description?: string;
  createdAt: string;
  foodSource?: FoodSource;
}

export interface NGO {
  id: string;
  userId?: string;
  name: string;
  description?: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
  requiredMeals?: number;
  distanceKm?: number;
  highestPriority?: string;
}

export type RequirementPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
export type RequirementStatus =
  | 'OPEN'
  | 'PARTIALLY_MATCHED'
  | 'MATCHED'
  | 'FULFILLED'
  | 'CANCELLED';

export interface NGORequirement {
  id: string;
  ngoId: string;
  foodType: string;
  requiredQuantity: number;
  fulfilledQuantity: number;
  peopleCount: number;
  requiredBefore: string;
  priority: RequirementPriority;
  status: RequirementStatus;
  additionalNotes?: string;
  createdAt: string;
  ngo?: NGO;
}

export interface ScoreBreakdown {
  quantityScore: number;
  foodTypeScore: number;
  timeScore: number;
  distanceScore: number;
  priorityScore: number;
  totalScore: number;
  explanation: {
    quantityReason: string;
    foodTypeReason: string;
    timeReason: string;
    distanceReason: string;
    priorityReason: string;
  };
}

export interface RouteInfo {
  origin: {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
  };
  destination: {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
  };
  distanceKm: number;
  durationMinutes: number;
  estimatedDuration: string;
  routeUrl: string;
}

export interface Match {
  id?: string;
  foodInventoryId: string;
  ngoRequirementId: string;
  foodInventory: FoodItem;
  ngoRequirement: NGORequirement;
  matchScore: number;
  distanceKm: number;
  estimatedDuration: string;
  status?: string;
  scoreBreakdown: ScoreBreakdown;
  route?: RouteInfo;
  createdAt?: string;
  pickups?: Pickup[];
}

export interface Pickup {
  id: string;
  matchId: string;
  pickupToken: string;
  status: 'RESERVED' | 'PICKED_UP' | 'CANCELLED';
  scheduledAt?: string;
  pickedUpAt?: string;
  verifiedAt?: string;
  createdAt: string;
  match?: Match;
  qrDataUrl?: string;
}

export interface Redistribution {
  id: string;
  pickupId: string;
  quantity: number;
  peopleServed: number;
  redistributedAt: string;
  notes?: string;
  pickup?: Pickup;
}

export interface RecentTransfer {
  id: string;
  foodName: string;
  source: string;
  sourceAddress: string;
  ngo: string;
  ngoAddress: string;
  quantity: number;
  peopleServed: number;
  distanceKm: number;
  redistributedAt: string;
}

export interface ImpactSummary {
  availableSurplus: number;
  reservedFood: number;
  inTransitFood: number;
  redistributedMeals: number;
  peopleServed: number;
  foodSavedKg: number;
  co2SavedKg: number;
  financialValueSavedInr: number;
  totalFoodRegistered: number;
  activeRequirementsCount: number;
  completedTransfersCount: number;
  recentTransfers: RecentTransfer[];
}

export interface LocationSearchResult {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  matchedType?: string;
}

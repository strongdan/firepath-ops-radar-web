export type OperationalHazardKind =
  | 'fire_detection'
  | 'fire_incident'
  | 'fire_perimeter'
  | 'smoke_plume'
  | 'aqi_observation'
  | 'aqi_forecast'
  | 'weather_alert'
  | 'road_event'
  | 'static_context';

export type OperationalHazardStatus =
  | 'clear'
  | 'watch'
  | 'caution'
  | 'high'
  | 'critical'
  | 'unknown';

export interface OperationalHazardSignal {
  id: string;
  placeId?: string;
  regionId?: string;
  bbox?: [number, number, number, number];
  kind: OperationalHazardKind;
  status: OperationalHazardStatus;
  score: number;
  confidenceScore: number;
  title: string;
  summary: string;
  sourceIds: string[];
  sourceNames: string[];
  observedAt?: string;
  validFrom?: string;
  validTo?: string;
  fetchedAt: string;
  caveats: string[];
  officialLinks: Array<{ label: string; url: string }>;
  customerSpecific: boolean;
}

export interface AssetExposureSnapshot {
  assetId: string;
  orgId: string;
  status: OperationalHazardStatus;
  score: number;
  signals: OperationalHazardSignal[];
  computedAt: string;
}

export type SourceHealthStatus = 'healthy' | 'stale' | 'error' | 'unknown';

export interface SourceHealthSummary {
  sourceId: string;
  sourceName: string;
  status: SourceHealthStatus;
  lastFetchedAt?: string;
  nextFetchExpectedAt?: string;
  errorCount24h: number;
  caveats: string[];
}

export interface FirePathBrief {
  id: string;
  orgId: string;
  generatedAt: string;
  status: OperationalHazardStatus;
  summary: string;
  assetSummaries: Array<{
    assetId: string;
    assetName: string;
    status: OperationalHazardStatus;
    topReason: string;
  }>;
  disclaimer: string;
  officialLinks: Array<{ label: string; url: string }>;
}

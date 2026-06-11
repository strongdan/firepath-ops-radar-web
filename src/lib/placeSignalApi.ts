import { 
  OperationalHazardSignal, 
  AssetExposureSnapshot, 
  SourceHealthSummary, 
  FirePathBrief 
} from '../types/firepath';

const API_BASE_URL = process.env.NEXT_PUBLIC_PLACE_SIGNAL_API_URL || 'http://localhost:3000/api/v1';

export const firepathApi = {
  getHealth: async () => {
    const res = await fetch(`${API_BASE_URL}/firepath/health`);
    return res.json();
  },

  getSources: async (): Promise<SourceHealthSummary[]> => {
    const res = await fetch(`${API_BASE_URL}/firepath/sources`);
    return res.json();
  },

  getHazards: async (): Promise<OperationalHazardSignal[]> => {
    const res = await fetch(`${API_BASE_URL}/firepath/hazards`);
    return res.json();
  },

  getLatestExposures: async (orgId: string): Promise<AssetExposureSnapshot[]> => {
    const res = await fetch(`${API_BASE_URL}/firepath/orgs/${orgId}/exposures/latest`);
    return res.json();
  },

  getLatestBrief: async (orgId: string): Promise<FirePathBrief> => {
    const res = await fetch(`${API_BASE_URL}/firepath/orgs/${orgId}/briefs/latest`);
    return res.json();
  },
};

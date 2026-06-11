'use client';

import { useEffect, useState } from 'react';
import { firepathApi } from '@/lib/placeSignalApi';
import { 
  AssetExposureSnapshot, 
  FirePathBrief, 
  SourceHealthSummary 
} from '@/types/firepath';

export default function DashboardPage() {
  const [exposures, setExposures] = useState<AssetExposureSnapshot[]>([]);
  const [brief, setBrief] = useState<FirePathBrief | null>(null);
  const [sources, setSources] = useState<SourceHealthSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const orgId = 'org_demo'; // In a real app, this would come from auth
        const [exposureData, briefData, sourceData] = await Promise.all([
          firepathApi.getLatestExposures(orgId),
          firepathApi.getLatestBrief(orgId),
          firepathApi.getSources(),
        ]);
        setExposures(exposureData);
        setBrief(briefData);
        setSources(sourceData);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <div className="p-8">Loading FirePath Dashboard...</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <header className="flex justify-between items-end border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold">FirePath Ops Radar</h1>
          <p className="text-muted-foreground">Operational awareness for your assets</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">Status: <span className="text-orange-600 uppercase font-bold">{brief?.status}</span></p>
          <p className="text-xs text-muted-foreground">Last updated: {brief?.generatedAt}</p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg bg-card">
          <h2 className="text-lg font-semibold mb-2">Assets at Risk</h2>
          <p className="text-3xl font-bold text-orange-600">{exposures.length}</p>
        </div>
        <div className="p-6 border rounded-lg bg-card">
          <h2 className="text-lg font-semibold mb-2">Active Hazards</h2>
          <p className="text-3xl font-bold">1</p>
        </div>
        <div className="p-6 border rounded-lg bg-card">
          <h2 className="text-lg font-semibold mb-2">Source Health</h2>
          <p className="text-3xl font-bold text-green-600">Healthy</p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="space-y-4">
          <h2 className="text-xl font-bold">Latest Operational Brief</h2>
          <div className="p-6 border rounded-lg bg-amber-50 border-amber-200">
            <p className="text-lg leading-relaxed">{brief?.summary}</p>
            <div className="mt-4 p-3 bg-white/50 rounded text-sm italic">
              {brief?.disclaimer}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">Asset Status</h2>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 border-b">Asset</th>
                  <th className="p-3 border-b">Status</th>
                  <th className="p-3 border-b">Top Reason</th>
                </tr>
              </thead>
              <tbody>
                {brief?.assetSummaries.map((a) => (
                  <tr key={a.assetId}>
                    <td className="p-3 border-b font-medium">{a.assetName}</td>
                    <td className="p-3 border-b">
                      <span className="px-2 py-1 rounded text-xs font-bold uppercase bg-orange-100 text-orange-700">
                        {a.status}
                      </span>
                    </td>
                    <td className="p-3 border-b text-sm text-muted-foreground">{a.topReason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">Source Status & Caveats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sources.map(s => (
            <div key={s.sourceId} className="p-4 border rounded-lg space-y-1">
              <div className="flex justify-between">
                <h3 className="font-bold">{s.sourceName}</h3>
                <span className="text-xs font-bold uppercase text-green-600">{s.status}</span>
              </div>
              <p className="text-xs text-muted-foreground">Last fetched: {s.lastFetchedAt}</p>
              <ul className="text-xs list-disc pl-4 mt-2">
                {s.caveats.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 text-center">
      <h1 className="text-4xl font-bold">FirePath Ops Radar Pricing</h1>
      <p className="text-xl text-muted-foreground">Operational awareness for operators who cannot afford to be surprised by wildfire or smoke.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="p-8 border rounded-xl space-y-4">
          <h2 className="text-2xl font-bold">Alpha Pilot</h2>
          <p className="text-4xl font-bold">$99 <span className="text-lg font-normal text-muted-foreground">setup</span></p>
          <p className="text-xl font-bold">$49 <span className="text-lg font-normal text-muted-foreground">/ month</span></p>
          <ul className="text-left space-y-2">
            <li>✓ Alaska & Washington coverage</li>
            <li>✓ Daily morning brief</li>
            <li>✓ 10 assets or route corridors</li>
            <li>✓ Direct owner access</li>
          </ul>
          <button className="w-full py-3 bg-orange-600 text-white rounded-lg font-bold">Join Alpha Pilot</button>
        </div>
        
        <div className="p-8 border rounded-xl space-y-4 opacity-50">
          <h2 className="text-2xl font-bold">Beta Solo</h2>
          <p className="text-4xl font-bold">$29 <span className="text-lg font-normal text-muted-foreground">/ month</span></p>
          <p className="text-sm italic">Coming soon</p>
          <ul className="text-left space-y-2">
            <li>✓ Single asset monitoring</li>
            <li>✓ Self-service dashboard</li>
            <li>✓ Weekly summaries</li>
          </ul>
          <button disabled className="w-full py-3 bg-muted text-muted-foreground rounded-lg font-bold cursor-not-allowed">Waitlist</button>
        </div>
      </div>
    </div>
  );
}

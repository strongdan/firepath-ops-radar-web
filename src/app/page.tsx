import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-6 border-b flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="font-bold text-xl text-orange-600">FirePath Ops Radar</div>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="/pricing">Pricing</Link>
          <Link href="/intake">Pilot Intake</Link>
          <Link href="/dashboard" className="px-4 py-2 bg-black text-white rounded">Dashboard Demo</Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold tracking-tight">
          Operational Awareness for <span className="text-orange-600">Wildfire & Smoke</span>
        </h1>
        <p className="text-2xl text-muted-foreground">
          FirePath Ops Radar provides daily operational briefs and exposure monitoring for field operators, tour operators, and property managers.
        </p>
        <div className="flex space-x-4">
          <Link href="/intake" className="px-8 py-4 bg-orange-600 text-white rounded-lg text-xl font-bold shadow-lg hover:bg-orange-700 transition">
            Join the Alpha Pilot
          </Link>
          <Link href="/pricing" className="px-8 py-4 border border-muted-foreground rounded-lg text-xl font-bold hover:bg-muted transition">
            View Pricing
          </Link>
        </div>
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Morning Briefs</h3>
            <p className="text-muted-foreground text-sm">Wake up to a clear summary of fire, smoke, and road-access risk for your specific assets.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Deterministic Scoring</h3>
            <p className="text-muted-foreground text-sm">No black-box AI magic. We use real distance bands and public-source data for triage.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Safety First</h3>
            <p className="text-muted-foreground text-sm">Strict boundaries on what we say. We point you to official authorities for emergency orders.</p>
          </div>
        </div>
      </main>

      <footer className="p-8 border-t text-center text-sm text-muted-foreground bg-muted/20">
        <p>© 2026 Place Signals. FirePath is an operational awareness tool, not an emergency-alert system.</p>
      </footer>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-slate-50">
      <div className="container py-20">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-accent">Health Hub</h1>
          <nav className="flex gap-4">
            <Link href="/login" className="text-sm text-muted">Log in</Link>
            <Link href="/register" className="rounded-md bg-accent px-4 py-2 text-white text-sm">Sign up</Link>
          </nav>
        </header>

        <section className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-slate-900">Your digital healthcare hub</h2>
            <p className="mt-4 text-slate-600">Book appointments, access records, talk to an AI assistant and connect with certified doctors.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/register" className="rounded-md bg-accent px-5 py-3 text-white">Get started</Link>
              <Link href="/dashboard" className="rounded-md border border-slate-200 px-5 py-3">View demo dashboard</Link>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-lg font-medium">Quick features</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>• Secure appointment booking</li>
              <li>• AI-powered health assistant</li>
              <li>• Role-based dashboards for doctors and admins</li>
              <li>• Medical records and prescriptions</li>
            </ul>
          </div>
        </section>

        <footer className="mt-16 text-center text-sm text-slate-500">© {new Date().getFullYear()} Health Hub</footer>
      </div>
    </main>
  );
}

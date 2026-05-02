import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign in to Health Hub</h2>
        <form className="space-y-4 bg-white p-6 rounded shadow">
          <label className="block">
            <div className="text-sm text-slate-600">Email</div>
            <input name="email" type="email" className="mt-1 w-full rounded border px-3 py-2" />
          </label>
          <label className="block">
            <div className="text-sm text-slate-600">Password</div>
            <input name="password" type="password" className="mt-1 w-full rounded border px-3 py-2" />
          </label>
          <div className="flex items-center justify-between">
            <button className="rounded bg-accent px-4 py-2 text-white">Sign in</button>
            <Link href="/register" className="text-sm text-slate-600">Create account</Link>
          </div>
        </form>
      </div>
    </main>
  );
}

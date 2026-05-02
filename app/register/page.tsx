import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
        <form className="space-y-4 bg-white p-6 rounded shadow">
          <label className="block">
            <div className="text-sm text-slate-600">Full name</div>
            <input name="name" type="text" className="mt-1 w-full rounded border px-3 py-2" />
          </label>
          <label className="block">
            <div className="text-sm text-slate-600">Email</div>
            <input name="email" type="email" className="mt-1 w-full rounded border px-3 py-2" />
          </label>
          <label className="block">
            <div className="text-sm text-slate-600">Role</div>
            <select name="role" className="mt-1 w-full rounded border px-3 py-2">
              <option value="PATIENT">Patient</option>
              <option value="DOCTOR">Doctor</option>
            </select>
          </label>
          <div className="flex items-center justify-between">
            <button className="rounded bg-accent px-4 py-2 text-white">Create account</button>
            <Link href="/login" className="text-sm text-slate-600">Already have an account?</Link>
          </div>
        </form>
      </div>
    </main>
  );
}

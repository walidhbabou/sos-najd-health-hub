import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold text-lg text-accent">Health Hub</Link>
        <nav className="flex items-center gap-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/doctors">Find doctors</Link>
          <Link href="/login" className="rounded px-3 py-1 bg-accent text-white">Sign in</Link>
        </nav>
      </div>
    </header>
  );
}

import Link from 'next/link';

export default function Sidebar({ role = 'patient' }: { role?: string }) {
  return (
    <aside className="w-64 border-r p-4 hidden md:block">
      <div className="space-y-3">
        <Link href="/dashboard" className="block font-medium">Overview</Link>
        {role === 'doctor' ? (
          <>
            <Link href="/dashboard/appointments" className="block">Appointments</Link>
            <Link href="/dashboard/patients" className="block">Patients</Link>
          </>
        ) : (
          <>
            <Link href="/dashboard/book" className="block">Book appointment</Link>
            <Link href="/dashboard/records" className="block">Medical records</Link>
          </>
        )}
        <Link href="/dashboard/chat" className="block">AI Assistant</Link>
      </div>
    </aside>
  );
}

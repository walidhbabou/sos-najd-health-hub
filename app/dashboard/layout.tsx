import type { ReactNode } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

export const metadata = {
  title: 'Dashboard - Health Hub',
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}

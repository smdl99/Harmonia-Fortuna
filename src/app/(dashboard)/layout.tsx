import Navbar from './_components/navbar';
import './globals.css';

interface DashboardPageProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardPageProps) {
  return (
    <div className="min-h-screen bg-muted/40 p-12 flex justify-center">
      <div className="w-full max-w-7xl bg-background rounded-3xl shadow-xl overflow-hidden flex flex-col">
        <Navbar isAdmin={true} />
        <div className="grow flex flex-col overflow-auto">{children}</div>
      </div>
    </div>
  );
}

import AdminDashboard from './_components/admin-dashboard';
import ClientDashboard from './_components/client-dashboard';

interface DashboardPageProps {
  searchParams: Promise<{
    type?: string;
  }>;
}

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const { type } = await searchParams;

  return type === 'admin' ? <AdminDashboard /> : <ClientDashboard />;
}

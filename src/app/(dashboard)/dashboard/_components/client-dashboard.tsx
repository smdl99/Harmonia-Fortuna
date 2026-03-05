import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ClientProjectDialog from './client-project-dialog';
import { Button } from '@/components/ui/button';
import ClientProjectCard from './client-project-card';

export default function ClientDashboard() {
  return (
    <div className="grow flex">
      <div className="border-r flex flex-col items-center justify-center text-center w-105 shrink-0">
        <h3 className="text-muted-foreground mb-2">TOTAL COMMITMENT</h3>
        <p className="text-3xl font-bold">CHF 12,500,000</p>
      </div>
      <div className="px-14 py-12 grow flex flex-col justify-between">
        <div>
          <h3 className="text-xs text-muted-foreground mb-2">
            PROJECTS & PORTFOLIOS
          </h3>
          <div className="overflow-auto max-h-54 flex flex-col gap-2">
            <ClientProjectCard />
            <ClientProjectCard />
            <ClientProjectCard />
          </div>
        </div>
        <div>
          <h3 className="text-xs text-muted-foreground mb-2">
            PROJECTS & PORTFOLIOS
          </h3>
          <div className="overflow-auto max-h-54 flex flex-col gap-2">
            <ClientProjectCard />
            <ClientProjectCard />
            <ClientProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}

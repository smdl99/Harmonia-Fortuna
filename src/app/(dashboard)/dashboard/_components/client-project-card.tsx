'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ClientProjectDialog from './client-project-dialog';

export default function ClientProjectCard() {
  return (
    <Card>
      <div className="flex items-center">
        <CardHeader className="grow">
          <CardTitle>Alpine Renewable Infrastructure</CardTitle>
          <CardDescription>Total Investment: CHF4,000,000</CardDescription>
        </CardHeader>
        <CardContent>
          <Dialog>
            <DialogTrigger asChild>
              <Button type="button" size="sm" variant="outline">
                View
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-225 w-full">
              <ClientProjectDialog />
            </DialogContent>
          </Dialog>
        </CardContent>
      </div>
    </Card>
  );
}

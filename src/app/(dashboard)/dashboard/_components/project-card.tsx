'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ManageProjectDialog from './manage-project-dialog';

export default function ProjectCard() {
  return (
    <Card className="flex flex-col gap-4 p-5">
      <div>
        <h4 className="font-medium">Alpine Renewable Infrastructure</h4>
        <p className="text-xs text-muted-foreground mt-1">
          Committed Capital: <span className="mr-0.5">CHF</span>45M
        </p>
      </div>
      <div className="flex gap-2 mt-auto">
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              Manage Users
            </Button>
          </DialogTrigger>
          <DialogContent>
            <ManageProjectDialog />
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
}

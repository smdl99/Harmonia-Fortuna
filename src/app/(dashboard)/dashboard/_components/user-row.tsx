import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { TableCell, TableRow } from '@/components/ui/table';
import EditUserDialog from './edit-user-dialog';
import ManageUserDialog from './manage-user-dialog';
import UserOverviewDialog from './user-overview-dialog';

export default function UserRow() {
  return (
    <TableRow>
      <TableCell>Alexander Müller</TableCell>
      <TableCell>Müller Family Office GmbH</TableCell>
      <TableCell>
        <span className="text-muted-foreground mr-1.5">CHF</span>
        12,500,000
      </TableCell>
      <TableCell>
        <Badge
          variant="outline"
          className="bg-emerald-50 text-emerald-700 border-emerald-200"
        >
          Verified
        </Badge>
      </TableCell>
      <TableCell>21 Feb 2026</TableCell>
      <TableCell>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                View
              </Button>
            </DialogTrigger>
            <DialogContent>
              <UserOverviewDialog />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </DialogTrigger>
            <DialogContent>
              <EditUserDialog />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </DialogTrigger>
            <DialogContent>
              <ManageUserDialog />
            </DialogContent>
          </Dialog>
        </div>
      </TableCell>
    </TableRow>
  );
}

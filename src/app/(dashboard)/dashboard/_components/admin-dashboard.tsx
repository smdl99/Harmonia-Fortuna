import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ProjectCard from './project-card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CreateProjectDialog from './create-project-dialog';
import UserRow from './user-row';

export default function AdminDashboard() {
  return (
    <>
      {/* Main Content */}
      <div className="px-12 py-10 flex flex-col gap-10">
        {/* Stats Bar */}
        <Card>
          <CardContent className="p-0">
            <div className="grid grid-cols-4 divide-x">
              <div className="px-10 py-8">
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  Total AUM
                </p>
                <p className="mt-3 text-4xl font-medium">
                  <span className="font-normal text-muted-foreground mr-1.5">
                    CHF
                  </span>
                  265M
                </p>
              </div>
              <div className="px-10 py-8">
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  Total Clients
                </p>
                <p className="mt-2.5 text-lg font-medium">18</p>
              </div>
              <div className="px-10 py-8">
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  Avg Commitment
                </p>
                <p className="mt-2.5 text-lg font-medium">
                  <span className="font-normal text-muted-foreground mr-1.5">
                    CHF
                  </span>
                  14.7M
                </p>
              </div>
              <div className="px-10 py-8">
                <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  Pending KYC
                </p>
                <p className="mt-2.5 text-lg font-medium">2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filter Bar */}
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="verified">Verified</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="commitment">
            <SelectTrigger className="w-52">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="commitment">Sort by Commitment</SelectItem>
              <SelectItem value="login">Sort by Last Login</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Clients Table */}
        <div className="border rounded-xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Entity</TableHead>
                <TableHead>Commitment</TableHead>
                <TableHead>KYC Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <UserRow />
              <UserRow />
              <UserRow />
            </TableBody>
          </Table>
        </div>

        {/* Projects Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-6">
            <p className="text-[11px] tracking-widest text-muted-foreground uppercase">
              Project Overview
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">Create Project</Button>
              </DialogTrigger>
              <DialogContent>
                <CreateProjectDialog />
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-5">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

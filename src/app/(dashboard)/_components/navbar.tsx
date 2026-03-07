import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { LogOut, Moon } from 'lucide-react';
import KYCDialog from '../dashboard/_components/kyc-dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface NavbarProps {
  isAdmin: boolean;
}

export default function Navbar({ isAdmin }: NavbarProps) {
  return (
    <div className="flex justify-between items-center px-12 py-7 border-b">
      <p className="text-xs tracking-widest text-muted-foreground uppercase">
        {isAdmin ? 'Administrative Control Panel' : 'Client Control Panel'}
      </p>
      <div className="flex items-center gap-3">
        {!isAdmin && (
          <>
            <Dialog>
              <DialogTrigger asChild>
                <Button type="button" variant="outline" size="sm">
                  KYC
                </Button>
              </DialogTrigger>
              <DialogContent>
                <KYCDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
        <Button variant="outline" size="icon-sm">
          <Moon />
        </Button>

        <Select defaultValue="en">
          <SelectTrigger size="sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">EN</SelectItem>
            <SelectItem value="cn">CN</SelectItem>
            <SelectItem value="ar">AR</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" size="sm">
          <LogOut />
          Sign Out
        </Button>
      </div>
    </div>
  );
}

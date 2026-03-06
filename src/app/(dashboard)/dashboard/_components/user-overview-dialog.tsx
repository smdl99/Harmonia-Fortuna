import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function UserOverviewDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Client Overview</DialogTitle>
        <DialogDescription className="sr-only">
          Client Overview
        </DialogDescription>
      </DialogHeader>
    </>
  );
}

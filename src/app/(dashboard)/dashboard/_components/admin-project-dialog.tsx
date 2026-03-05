import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function AdminProjectDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Project Details</DialogTitle>
        <DialogDescription className="sr-only">
          Project Details
        </DialogDescription>
      </DialogHeader>
    </>
  );
}

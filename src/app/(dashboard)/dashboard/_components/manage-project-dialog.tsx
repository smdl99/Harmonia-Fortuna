import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function ManageProjectDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Manage Project</DialogTitle>
        <DialogDescription className="sr-only">
          Manage Project
        </DialogDescription>
      </DialogHeader>
    </>
  );
}

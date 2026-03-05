import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function ManageUserDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Manage User</DialogTitle>
        <DialogDescription className="sr-only">Manage User</DialogDescription>
      </DialogHeader>
    </>
  );
}

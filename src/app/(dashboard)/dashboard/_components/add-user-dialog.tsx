import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function AddUserDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Add User</DialogTitle>
        <DialogDescription className="sr-only">Add User</DialogDescription>
      </DialogHeader>
    </>
  );
}

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function EditUserDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Edit User</DialogTitle>
        <DialogDescription className="sr-only">Edit User</DialogDescription>
      </DialogHeader>
    </>
  );
}

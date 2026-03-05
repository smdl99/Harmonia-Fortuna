import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function CreateUserDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Create User</DialogTitle>
        <DialogDescription className="sr-only">Create User</DialogDescription>
      </DialogHeader>
    </>
  );
}

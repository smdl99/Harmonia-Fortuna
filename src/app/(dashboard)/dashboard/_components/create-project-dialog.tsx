import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function CreateProjectDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Create Project</DialogTitle>
        <DialogDescription className="sr-only">
          Create Project
        </DialogDescription>
      </DialogHeader>
    </>
  );
}

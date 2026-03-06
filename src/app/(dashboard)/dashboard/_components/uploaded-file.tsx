import { Button } from '@/components/ui/button';

export default function UploadedFile() {
  return (
    <div className="p-6 inline-flex items-center gap-2 rounded-xl border">
      <h4 className="grow font-semibold">File Name</h4>
      <div className="inline-flex items-center gap-2">
        <Button type="button" variant="outline" size="sm">
          View
        </Button>
        <Button type="button" variant="destructive" size="sm">
          Remove
        </Button>
      </div>
    </div>
  );
}

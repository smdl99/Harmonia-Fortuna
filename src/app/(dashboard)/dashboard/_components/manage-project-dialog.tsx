import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function ManageProjectDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Manage Project Users</DialogTitle>
        <DialogDescription className="sr-only">
          Manage Project Users
        </DialogDescription>
      </DialogHeader>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Assigned Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <span>Alexander Muler</span>
              <Button type="button" variant="outline" size="sm">
                Remove
              </Button>
            </div>
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <span>Alexander Muler</span>
              <Button type="button" variant="outline" size="sm">
                Remove
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <span>Alexander Muler</span>
              <Button type="button" variant="outline" size="sm">
                Add
              </Button>
            </div>
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <span>Alexander Muler</span>
              <Button type="button" variant="outline" size="sm">
                Add
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

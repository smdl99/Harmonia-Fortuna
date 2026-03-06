import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function ManageUserDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Manage User Projects</DialogTitle>
        <DialogDescription className="sr-only">
          Manage User Projects
        </DialogDescription>
      </DialogHeader>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Assigned Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <span>Test project 1</span>
              <Button type="button" variant="outline" size="sm">
                Remove
              </Button>
            </div>
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <span>Test project 2</span>
              <Button type="button" variant="outline" size="sm">
                Remove
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <span>Test Project 3</span>
              <Button type="button" variant="outline" size="sm">
                Add
              </Button>
            </div>
            <div className="flex items-center justify-between border p-4 rounded-lg">
              <span>Test Project 4</span>
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

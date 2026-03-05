import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function ClientProjectDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Project Overview</DialogTitle>
        <DialogDescription className="sr-only">
          Project Overview
        </DialogDescription>
      </DialogHeader>

      <FieldGroup>
        <FieldSet>
          <FieldLegend>CORE INFORMATION</FieldLegend>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4">
              <Field>
                <FieldLabel>PROJECT NAME</FieldLabel>
                <Input type="text" placeholder="Project Name" />
              </Field>
              <Field>
                <FieldLabel>PROJECT NAME</FieldLabel>
                <Input type="text" placeholder="Project Name" />
              </Field>
              <Field>
                <FieldLabel>PROJECT NAME</FieldLabel>
                <Input type="text" placeholder="Project Name" />
              </Field>
              <Field>
                <FieldLabel>PROJECT NAME</FieldLabel>
                <Input type="text" placeholder="Project Name" />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
        <FieldSet>
          <FieldLegend>DOCUMENTS</FieldLegend>
          <FieldGroup>
            <div className="flex flex-col gap-2">
              <Card>
                <CardHeader>
                  <CardTitle>Private Placement Memorandum</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Private Placement Memorandum</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Private Placement Memorandum</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </FieldGroup>
        </FieldSet>
        <FieldSet>
          <FieldLegend>CONTACT</FieldLegend>
          <FieldGroup>
            <div className="px-5 py-4 flex items-center gap-4 border rounded-xl">
              <div className="grow">
                <h4>PRIVATE CLIENT SERVICE</h4>
                <p>Contact us about this project</p>
              </div>
              <Button type="button" variant="outline">
                Request Call
              </Button>
            </div>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </>
  );
}

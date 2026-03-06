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
import DocumentCard from './document-card';

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
          <FieldLegend>Core Information</FieldLegend>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4">
              <Field>
                <FieldLabel>Project Name</FieldLabel>
                <Input type="text" placeholder="Project Name" />
              </Field>
              <Field>
                <FieldLabel>Project Type</FieldLabel>
                <Input type="text" placeholder="Project Type" />
              </Field>
              <Field>
                <FieldLabel>Currency</FieldLabel>
                <Input type="text" placeholder="Currency" />
              </Field>
              <Field>
                <FieldLabel>Target Size</FieldLabel>
                <Input type="text" placeholder="Target Size" />
              </Field>
              <Field>
                <FieldLabel>Minimum Commitment</FieldLabel>
                <Input type="text" placeholder="Minimum Commitment" />
              </Field>
              <Field>
                <FieldLabel>Vintage Year</FieldLabel>
                <Input type="text" placeholder="Vintage Year" />
              </Field>
              <Field>
                <FieldLabel>Hard Cap</FieldLabel>
                <Input type="text" placeholder="Hard Cap" />
              </Field>
              <Field>
                <FieldLabel>Management Fee</FieldLabel>
                <Input type="text" placeholder="Management Fee" />
              </Field>
              <Field>
                <FieldLabel>Performance Fee</FieldLabel>
                <Input type="text" placeholder="Performance Fee" />
              </Field>
              <Field>
                <FieldLabel>Status</FieldLabel>
                <Input type="text" placeholder="Status" />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
        <FieldSet>
          <FieldLegend>Documents</FieldLegend>
          <FieldGroup>
            <div className="flex flex-col gap-2">
              <DocumentCard />
              <DocumentCard />
              <DocumentCard />
            </div>
          </FieldGroup>
        </FieldSet>
        <FieldSet>
          <FieldLegend>Contact</FieldLegend>
          <FieldGroup>
            <div className="px-5 py-4 flex items-center gap-4 border rounded-xl">
              <div className="grow">
                <h4>Private CLient Service</h4>
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

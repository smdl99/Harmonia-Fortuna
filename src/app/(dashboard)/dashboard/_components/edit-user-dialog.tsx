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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import UploadedFile from './uploaded-file';

export default function EditUserDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Edit Client</DialogTitle>
        <DialogDescription className="sr-only">Edit Client</DialogDescription>
      </DialogHeader>

      <FieldGroup>
        <FieldSet>
          <FieldLegend>Client Details</FieldLegend>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-2">
              <Field>
                <FieldLabel>First Name</FieldLabel>
                <Input type="text" placeholder="First Name" />
              </Field>
              <Field>
                <FieldLabel>Last Name</FieldLabel>
                <Input type="text" placeholder="Last Name" />
              </Field>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input type="text" placeholder="Email" />
              </Field>
              <Field>
                <FieldLabel>Phone</FieldLabel>
                <Input type="text" placeholder="Phone" />
              </Field>
              <Field>
                <FieldLabel>Entity Name</FieldLabel>
                <Input type="text" placeholder="Entity Name" />
              </Field>
              <Field>
                <FieldLabel>KYC Status</FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a KYC Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="verified">Verified</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>

        <FieldSet>
          <FieldLegend>Uploaded Documents</FieldLegend>
          <FieldGroup>
            <div className="flex flex-col gap-2">
              <UploadedFile />
              <UploadedFile />
              <UploadedFile />
            </div>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </>
  );
}

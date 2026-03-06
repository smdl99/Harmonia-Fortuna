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

export default function AddUserDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Add New Client</DialogTitle>
        <DialogDescription className="sr-only">
          Add New Client
        </DialogDescription>
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
              <Field className="col-span-2">
                <FieldLabel>Entity Name</FieldLabel>
                <Input type="text" placeholder="Entity Name" />
              </Field>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input type="text" placeholder="Email" />
              </Field>
              <Field>
                <FieldLabel>Phone</FieldLabel>
                <Input type="text" placeholder="Phone" />
              </Field>
              <Field className="col-span-2">
                <FieldLabel>Commitment</FieldLabel>
                <Input type="text" placeholder="Commitment" />
              </Field>
              <Field>
                <FieldLabel>Password</FieldLabel>
                <Input type="text" placeholder="Password" />
              </Field>
              <Field>
                <FieldLabel>Confirm Password</FieldLabel>
                <Input type="text" placeholder="Confirm Password" />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </>
  );
}

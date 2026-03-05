import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function KYCDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>KYC & CONTACT DETAILS</DialogTitle>
      </DialogHeader>

      <FieldGroup>
        <FieldSet>
          <FieldLegend>CONTACT INFORMATION</FieldLegend>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-2">
              <Field>
                <FieldLabel>Full Name</FieldLabel>
                <Input type="text" placeholder="Full Name" />
              </Field>
              <Field>
                <FieldLabel>Email Address</FieldLabel>
                <Input type="text" placeholder="Email Address" />
              </Field>
              <Field>
                <FieldLabel>Phone Number</FieldLabel>
                <Input type="text" placeholder="Phone Number" />
              </Field>
              <Field>
                <FieldLabel>Residential Address</FieldLabel>
                <Input type="text" placeholder="Residential Address" />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </>
  );
}

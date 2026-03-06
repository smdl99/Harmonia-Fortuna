import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import FileUpload from './file-upload';

export default function KYCDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>KYC & Contact Details</DialogTitle>
      </DialogHeader>

      <FieldGroup>
        <FieldSet>
          <FieldLegend>Contact Information</FieldLegend>
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
        <FieldSet>
          <FieldLegend>Entity Details</FieldLegend>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-2">
              <Field>
                <FieldLabel>Company Name</FieldLabel>
                <Input type="text" placeholder="Company Name" />
              </Field>
              <Field>
                <FieldLabel>Registration Number</FieldLabel>
                <Input type="text" placeholder="Registration Number" />
              </Field>
              <Field>
                <FieldLabel>Jurisdiction</FieldLabel>
                <Input type="text" placeholder="Jurisdiction" />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
        <FieldSet>
          <FieldLegend>Financial Information</FieldLegend>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-2">
              <Field>
                <FieldLabel>Estimated Net Worth</FieldLabel>
                <Input type="text" placeholder="Estimated Net Worth" />
              </Field>
              <Field className="col-span-2">
                <FieldLabel>Source of Funds Description</FieldLabel>
                <Textarea placeholder="Source of Funds Description" />
              </Field>
              <Field orientation="horizontal">
                <Checkbox />
                <FieldLabel>Politically Exposed Person (PEP)</FieldLabel>
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
        <FieldSet>
          <FieldLegend>Document Upload</FieldLegend>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-2">
              <FileUpload>Passport / ID</FileUpload>
              <FileUpload>Proof of Address</FileUpload>
              <FileUpload>Certificate of Incorporation</FileUpload>
              <FileUpload>Shareholder Register</FileUpload>
              <FileUpload>Source of Funds</FileUpload>
              <FileUpload>Privacy / NDA Documents</FileUpload>
            </div>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </>
  );
}

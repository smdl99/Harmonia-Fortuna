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

export default function CreateProjectDialog() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Create Project</DialogTitle>
        <DialogDescription className="sr-only">
          Create Project
        </DialogDescription>
      </DialogHeader>

      <FieldGroup>
        <FieldSet>
          <FieldLegend>Core Fund Information</FieldLegend>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-2">
              <Field>
                <FieldLabel>Fund Name</FieldLabel>
                <Input type="text" placeholder="Fund Name" />
              </Field>
              <Field>
                <FieldLabel>Legal Entity Name</FieldLabel>
                <Input type="text" placeholder="Legal Entity Name" />
              </Field>
              <Field>
                <FieldLabel>Strategy Type</FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Strategy Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private-equity">
                      Private Equity
                    </SelectItem>
                    <SelectItem value="infrastructure">
                      Infrastructure
                    </SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="venture-capital">
                      Venture Capital
                    </SelectItem>
                    <SelectItem value="credit">Credit</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>Jurisdiction</FieldLabel>
                <Input type="text" placeholder="Jurisdiction" />
              </Field>
              <Field>
                <FieldLabel>Vintage Year</FieldLabel>
                <Input type="text" placeholder="Vintage Year" />
              </Field>
              <Field>
                <FieldLabel>Currency</FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="chf">CHF</SelectItem>
                    <SelectItem value="gbp">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>

        <FieldSet>
          <FieldLegend>Fund Economics</FieldLegend>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-2">
              <Field>
                <FieldLabel>Target Size</FieldLabel>
                <Input type="text" placeholder="Target Size" />
              </Field>
              <Field>
                <FieldLabel>Hard Cap</FieldLabel>
                <Input type="text" placeholder="Hard Cap" />
              </Field>
              <Field>
                <FieldLabel>Minimum Commitment</FieldLabel>
                <Input type="text" placeholder="Minimum Commitment" />
              </Field>
              <Field>
                <FieldLabel>Management Fee (%)</FieldLabel>
                <Input type="text" placeholder="Management Fee (%)" />
              </Field>
              <Field>
                <FieldLabel>Performance Fee / Carry (%)</FieldLabel>
                <Input type="text" placeholder="Performance Fee / Carry (%)" />
              </Field>
              <Field>
                <FieldLabel>Hurdle Rate (%)</FieldLabel>
                <Input type="text" placeholder="Hurdle Rate (%)" />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>

        <FieldSet>
          <FieldLegend>Structure & Timeline</FieldLegend>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-2">
              <Field>
                <FieldLabel>First Closing Date</FieldLabel>
                <Input type="text" placeholder="First Closing Date" />
              </Field>
              <Field>
                <FieldLabel>Final Closing Date</FieldLabel>
                <Input type="text" placeholder="Final Closing Date" />
              </Field>
              <Field>
                <FieldLabel>Fund Terms (Years)</FieldLabel>
                <Input type="text" placeholder="Fund Terms (Years)" />
              </Field>
              <Field>
                <FieldLabel>Extension Options (Years)</FieldLabel>
                <Input type="text" placeholder="Extension Options (Years)" />
              </Field>
              <Field>
                <FieldLabel>Investment Period (Years)</FieldLabel>
                <Input type="text" placeholder="Investment Period (Years)" />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>

        <FieldSet>
          <FieldLegend>Visibility & Access</FieldLegend>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-2">
              <Field>
                <FieldLabel>Status</FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="raising">Raising</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>Visibility</FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Visibility" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Clients</SelectItem>
                    <SelectItem value="selected">
                      Selected Clients Only
                    </SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </>
  );
}

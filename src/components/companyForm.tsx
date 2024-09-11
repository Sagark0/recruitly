import { TextInput, Button, Group, Notification } from "@mantine/core";
import { useForm } from "@mantine/form";
import { CompanyDetails } from "../types/company";
import { useCompanyAdd } from "../hooks/useCompany";

interface CompanyFormProps {
  company?: CompanyDetails;
}

export const CompanyForm = ({ company }: CompanyFormProps) => {
  const form = useForm({
    initialValues: company,
  });
  const { mutate, isError, isPending } = useCompanyAdd(company!);
  const handleSubmit = (values: typeof form.values) => {
    mutate(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput label="Name" placeholder="Company Name" {...form.getInputProps("name")} required />
      <TextInput
        label="Description"
        placeholder="Description"
        {...form.getInputProps("description")}
      />
      <TextInput label="Email" placeholder="Email" {...form.getInputProps("email")} required />
      <TextInput label="Phone" placeholder="Phone" {...form.getInputProps("phone")} required />
      <TextInput label="Website" placeholder="Website" {...form.getInputProps("website")} />

      {isError && <Notification color="red">{isError}</Notification>}

      <Group mt="md">
        <Button type="submit" loading={isPending}>
          {company ? "Update Company" : "Add Company"}
        </Button>
      </Group>
    </form>
  );
};

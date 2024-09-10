// src/components/CompanyForm.tsx
import React, { useState } from "react";
import { TextInput, Button, Group, Notification } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { CompanyDetails } from "../types/company";

interface CompanyFormProps {
  company?: CompanyDetails;
  onSuccess: () => void;
}

const apiKey = import.meta.env.VITE_API_KEY;
const baseURL = import.meta.env.VITE_API_BASE_URL;

export const CompanyForm: React.FC<CompanyFormProps> = ({ company, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useForm({
    initialValues: company,
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    setError(null);
    try {
      if (company) {
        // Update existing company
        console.log("values", values);
        await axios.post(`${baseURL}/api/company/`, values, {
          params: { apiKey },
        });
      } else {
        // Add new company
        await axios.post(`${baseURL}/api/company/`, values, {
          params: { apiKey },
        });
      }

      onSuccess();
    } catch (error: any) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
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

      {error && <Notification color="red">{error}</Notification>}

      <Group mt="md">
        <Button type="submit" loading={loading}>
          {company ? "Update Company" : "Add Company"}
        </Button>
      </Group>
    </form>
  );
};

// src/hooks/useCompanies.ts
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponse, Company, CompanyDetails } from "../types/company";

const apiKey = import.meta.env.VITE_API_KEY;
const baseURL = import.meta.env.VITE_API_BASE_URL;

const fetchCompanies = async (): Promise<Company[]> => {
  const response = await axios.get<ApiResponse>(`${baseURL}/api/company`, {
    params: {
      apiKey: apiKey,
    },
  });
  console.log(response.data.data);
  return response.data.data;
};

const fetchCompanyDetails = async (id: string): Promise<CompanyDetails> => {
  const response = await axios.get<CompanyDetails>(`${baseURL}/api/company/${id}`, {
    params: {
      apiKey,
    },
  });
  console.log(response);
  return response.data;
};

const deleteCompany = async (id: string): Promise<string> => {
  const response = await axios.delete<string>(`${baseURL}/api/company/${id}`, {
    params: {
      apiKey,
    },
  });
  return response.data;
};

export const useCompanies = () => {
  return useQuery<Company[], Error>({
    queryKey: ["companies"],
    queryFn: fetchCompanies,
  });
};

export const useCompanyDetails = (id: string) => {
  return useQuery<CompanyDetails, Error>({
    queryKey: ["companyDetails", id],
    queryFn: () => fetchCompanyDetails(id),
  });
};

export const useCompanyDelete = () => {
  return useMutation<string, Error, string>({
    mutationFn: deleteCompany,
  });
};

import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponse, Company, CompanyDetails } from "../types/company";
import { useNavigate } from "react-router-dom";

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

const addCompany = async (values: CompanyDetails) => {
  await axios.post(`${baseURL}/api/company/`, values, {
    params: { apiKey },
  });
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
    staleTime: 1000 * 60,
  });
};

export const useCompanyDetails = (id: string) => {
  return useQuery<CompanyDetails, Error>({
    queryKey: ["companyDetails", id],
    queryFn: () => fetchCompanyDetails(id),
    staleTime: 1000 * 60,
  });
};

export const useCompanyAdd = (company: CompanyDetails) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<void, Error, CompanyDetails>({
    mutationFn: addCompany,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["companies"],
      });
      await queryClient.invalidateQueries({
        queryKey: ["companyDetails", company?.id],
      });
      navigate("/");
    },
    onError: (error) => {
      console.error("Error deleting company:", error);
    },
  });
};

export const useCompanyDelete = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation<string, Error, string>({
    mutationFn: deleteCompany,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["companies"],
      });
      console.log("Company deleted successfully");
      navigate("/");
    },
    onError: (error) => {
      console.error("Error deleting company:", error);
    },
  });
};

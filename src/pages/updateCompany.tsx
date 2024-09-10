// src/pages/UpdateCompany.tsx
import React from 'react';
import { CompanyForm } from '../components/companyForm';
import { useParams, useNavigate } from 'react-router-dom';
import { useCompanyDetails } from '../hooks/useCompany';

export const UpdateCompany: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: company, isLoading, error } = useCompanyDetails(id!);
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/'); 
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Update Company</h1>
      {company && <CompanyForm company={company} onSuccess={handleSuccess} />}
    </div>
  );
};

// src/pages/AddCompany.tsx
import React from 'react';
import { CompanyForm } from '../components/companyForm';
import { useNavigate } from 'react-router-dom';

export const AddCompany: React.FC = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/'); // Redirect to company list page after success
  };

  return (
    <div>
      <h1>Add Company</h1>
      <CompanyForm onSuccess={handleSuccess} />
    </div>
  );
};

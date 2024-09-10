import { Link } from "react-router-dom";
import { useCompanies } from "../hooks/useCompany";
import CompanyCard from "../components/companyCard";
import { Button, Container, Flex } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

function CompanyList() {
  const { data: companies = [], error, isLoading } = useCompanies();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container fluid>
      <Flex justify="center" align="center" mb="md">
        <Button leftSection={<IconPlus size={14} />} component={Link} to="/add">
          Add Company
        </Button>
      </Flex>
      <Flex direction="row" wrap="wrap" gap="md" justify="center" align="center">
        {companies.length > 0 ? (
          companies.map((company) => <CompanyCard key={company.id} company={company} />)
        ) : (
          <p>No companies found.</p>
        )}
      </Flex>
    </Container>
  );
}

export default CompanyList;

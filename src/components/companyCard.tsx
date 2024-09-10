import { Card, Image, Text, Badge, Button, Flex } from "@mantine/core";
import { Company } from "../types/company";
import { Link, useNavigate } from "react-router-dom";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useCompanyDelete } from "../hooks/useCompany";
interface CompanyCardProps {
  company: Company;
}

function CompanyCard({ company }: CompanyCardProps) {
  const navigate = useNavigate();
  const mutation = useCompanyDelete();
  const handleDelete = () => {
    mutation.mutate(company.id, {
      onSuccess: () => {
        console.log("Company deleted successfully");
        navigate("/");
      },
      onError: (error) => {
        console.error("Error deleting company:", error);
      },
    });
  };

  return (
    <Card
      shadow="sm"
      bg="white"
      padding="lg"
      radius="md"
      style={{ width: 300, height: 350 }}
      withBorder
    >
      <Link to={`/company/${company.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Card.Section>
          <Image
            src="https://img.freepik.com/free-vector/many-office-buildings-city_1308-35976.jpg?w=1380&t=st=1725888031~exp=1725888631~hmac=577c4b37f8b2251c8dd89658575e3797fc41d6ace11757a27bda7be1fe282097"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Flex justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{company?.name}</Text>
          <Badge color="pink">{company?.ownerName}</Badge>
        </Flex>
      </Link>

      <Text size="sm" c="dimmed" style={{ height: 50, overflow: "hidden" }}>
        {company?.description || "No description available"}
      </Text>
      <Flex gap="md">
        <Button
          component={Link}
          to={`/update/${company.id}`}
          leftSection={<IconEdit size={14} />}
          color="blue"
          fullWidth
          mt="md"
          radius="md"
        >
          Update
        </Button>
        <Button
          leftSection={<IconTrash size={14} />}
          color="red"
          fullWidth
          mt="md"
          radius="md"
          onClick={handleDelete}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Deleting..." : "Delete"}
        </Button>
      </Flex>
    </Card>
  );
}

export default CompanyCard;

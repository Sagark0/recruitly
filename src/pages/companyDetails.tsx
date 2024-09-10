import { Link, useParams, useNavigate } from "react-router-dom";
import { useCompanyDelete, useCompanyDetails } from "../hooks/useCompany";
import { Button, Card, Flex, Paper, Text } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import classes from "../styles/cardDetails.module.css";

function CompanyDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: company, error, isLoading } = useCompanyDetails(id!);
  const mutation = useCompanyDelete();

  if (!id) return <p>Invalid company ID.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleDelete = () => {
    mutation.mutate(id, {
      onSuccess: () => {
        console.log("Company deleted successfully");
        navigate("/");
      },
      onError: (error) => {
        console.error("Error deleting company:", error);
      },
    });
  };

  const details = [
    { title: "Email", value: company?.email },
    { title: "Phone", value: company?.phone },
    { title: "Website", value: company?.website },
    { title: "Owner", value: company?.ownerName },
  ];

  return (
    <Flex justify="center">
      <Paper withBorder bg="white">
        <Card style={{ width: 500 }}>
          <Text fw={700} size="xl">
            {company?.name}
          </Text>
          <Text fs="italic">Description: {company?.description || "No description available"}</Text>
          <Card.Section className={classes.footer}>
            {details.map((detail) => (
              <div key={detail.title}>
                <Text size="xs" color="dimmed">
                  {detail.title}
                </Text>
                <Text fw={500} size="sm">
                  {detail.value || "Not Available"}
                </Text>
              </div>
            ))}
          </Card.Section>

          <Button leftSection={<IconEdit size={14} />} mb="5" component={Link} to={`/update/${id}`}>
            Edit Company
          </Button>
          <Button
            variant="filled"
            color="red"
            onClick={handleDelete}
            disabled={mutation.isPending}
            leftSection={<IconTrash size={14} />}
          >
            {mutation.isPending ? "Deleting..." : "Delete Company"}
          </Button>
        </Card>
      </Paper>
    </Flex>
  );
}

export default CompanyDetails;

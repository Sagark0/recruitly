// src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "@mantine/core";
import { AddCompany } from "./pages/addCompany";
import CompanyDetails from "./pages/companyDetails";
import CompanyList from "./pages/companyList";
import { UpdateCompany } from "./pages/updateCompany";
import Login from "./pages/Login";
import AppLayout from "./components/appLayout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <CompanyList /> },
      {
        path: "company/:id",
        element: <CompanyDetails />,
      },
      {
        path: "/add",
        element: <AddCompany />,
      },
      {
        path: "/update/:id",
        element: <UpdateCompany />,
      },
    ],
  },
]);
function App() {
  return (
    <Container p="10" m="0"  fluid>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;

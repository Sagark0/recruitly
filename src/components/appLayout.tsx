import { Button, Group } from "@mantine/core";
import { removeToken } from "../utility/secureStorage";
import secureLocalStorage from "react-secure-storage";
import Login from "../pages/Login";
import { Outlet, useNavigate } from "react-router-dom";

function AppLayout() {
  const authToken = secureLocalStorage.getItem("authToken");
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken("authToken");
    navigate("/login");
  };
  if (!authToken) {
    return <Login />;
  } else {
    return (
      <>
        <Group justify="flex-end" mb="md">
          <Button variant="outline" color="red" onClick={handleLogout}>
            Logout
          </Button>
        </Group>
        <Outlet />
      </>
    );
  }
}

export default AppLayout;

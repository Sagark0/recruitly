import { Navigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const authToken = secureLocalStorage.getItem('authToken');

  return authToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

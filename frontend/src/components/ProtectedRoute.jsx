import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")); // match login storage
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

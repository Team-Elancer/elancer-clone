import { Children } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ((props: ProtectedRoute)) => {
  const { children } = props;
  const token = window.localStorage.accessToken;
  const member = window.localStorage.memberType;
  return token || member==='"ENTERPRISE"'  ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

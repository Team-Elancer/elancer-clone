import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = window.localStorage.accessToken;
  const member = localStorage.getItem('memberType');

  let isFreelancerLoggedIn = false;

  if (token && member === '"FREELANCER"') {
    isFreelancerLoggedIn = true;
  } else {
    isFreelancerLoggedIn = false;
  }

  return isFreelancerLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;

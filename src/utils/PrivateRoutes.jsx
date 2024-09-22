import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  // Assuming `user` is set based on authentication status.
  const user = true; // Replace this with actual authentication logic

  // Render the Outlet if the user is authenticated, otherwise redirect to the login page.
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;




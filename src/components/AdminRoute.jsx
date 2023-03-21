import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ user, children }) => {
  if (!user.admin) return <Navigate to="/jornal" />;
  return children;
};

export default AdminRoute;

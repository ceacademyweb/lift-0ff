import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  console.log(user);
  if (!user && !user.active) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;

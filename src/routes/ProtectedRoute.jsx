





// import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types'; // Import PropTypes
// import { AuthContext } from '../providers/AuthProvider';
// // import { AuthContext } from '../providers/AuthProvider'; // Adjust the import path as needed

// const ProtectedRoute = ({ children }) => {
//     const { user, loading } = useContext(AuthContext); // Add loading state
//     const location = useLocation();

//     // Show a loading spinner or message while checking authentication
//     if (loading) {
//         return <div>Loading...</div>; // Replace with a proper loading component
//     }

//     // If the user is not authenticated, redirect to the login page
//     if (!user) {
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }

//     // If the user is authenticated, render the children (protected content)
//     return children;
// };

// // Define PropTypes for the component
// ProtectedRoute.propTypes = {
//     children: PropTypes.node.isRequired, // Validate that children is a valid React node and is required
// };

// export default ProtectedRoute;
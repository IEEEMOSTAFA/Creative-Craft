
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link
// import ProtectedRoute from '../../routes/ProtectedRoute';

const Estate = ({ estates }) => {
    return (


        
            <div className="p-6 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                   Craft Gallery 
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {estates.map((estate) => {
                        const {
                            id,
                            estate_title,
                            image,
                            price,
                            location,
                            status,
                            area,
                            facilities,
                        } = estate;

                        return (
                            <div
                                key={id}
                                className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <img
                                    src={image}
                                    alt={estate_title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                                        {estate_title}
                                    </h2>
                                    <p className="text-gray-600 mb-1">
                                        <strong>Price:</strong> ${price}
                                    </p>
                                    <p className="text-gray-600 mb-1">
                                        <strong>Location:</strong> {location}
                                    </p>
                                    <p className="text-gray-600 mb-1">
                                        <strong>Status:</strong> {status}
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        <strong>Area:</strong> {area}
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="text-lg font-semibold text-gray-700 mb-2">
                                            Facilities:
                                        </h4>
                                        <ul className="space-y-1">
                                            {facilities.map((facility, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                                                >
                                                    {facility}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link
                                        to={`/property/${id}`} // Use Link for navigation
                                        className="btn btn-primary w-full mt-4 block text-center"
                                    >
                                        View Property
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        

    );
};

Estate.propTypes = {
    estates: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            estate_title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            location: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            area: PropTypes.string.isRequired,
            facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};

export default Estate;












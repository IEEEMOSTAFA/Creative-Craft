import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
const MyCraft = () => {
    const [item, setItem] = useState([]);
    const { user } = useContext(AuthContext);
    const [control, setControl] = useState(false);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/myCraft/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setItem(data);
                });
        }
    }, [user, control]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log("Craft deleted successfully:", data);
                if (data?.deletedCount > 0) {
                    setControl(!control);
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Craft Deleted successfully!',
                    });
                }
            })
            .catch(err => {
                console.error("Failed to delete craft:", err);
            });
    };

    return (
        <div>
            <p className="text-2xl font-bold mb-4">This is my product</p>
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.map((craft) => (
                    <div key={craft._id} className="border rounded-lg p-4 shadow hover:shadow-lg">
                        <img src={craft.imgUrl} alt={craft.name} className=" w-full max-h-96 object-contain rounded" />
                        <h2 className="text-lg font-semibold mt-2">{craft.name}</h2>
                        <p><strong>Brand:</strong> {craft.brandName}</p>
                        <p><strong>Price:</strong> ${craft.price}</p>
                        <p><strong>Rating:</strong> {craft.rating} ⭐</p>
                        <p><strong>Type:</strong> {craft.type}</p>
                        <div className="flex justify-between mt-3">
                            <Link to={`/products/${craft._id}`}>
                                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                    Update
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(craft._id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCraft;
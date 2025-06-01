
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
const AlArt = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/alArt')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(() => setItems([]))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (!items.length) {
        return <div className="text-center py-10 text-gray-500">No art & craft items found.</div>;
    }
    const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(data => {
            console.log("Craft deleted successfully:", data);
            if (data?.deletedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Craft Deleted successfully!',
                });
                // Remove the deleted item from the state
                setItems(prevItems => prevItems.filter(item => item._id !== id));
            }
        })
        .catch(err => {
            console.error("Failed to delete craft:", err);
        });
};

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-6 text-center">All Art & Craft Items</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item._id}>
                                <td>
                                    <img
                                        src={item.imgUrl}
                                        alt={item.name}
                                        className="w-16 h-16 object-contain rounded"
                                        onError={e => { e.target.src = "https://i.ibb.co/v6J8ScqD/Error-Image.jpg"; }}
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.brandName}</td>
                                <td>{item.type}</td>
                                <td>${item.price}</td>
                                <td>
                                    <Link to={`/products/${item._id}`}>
                                        <button className="btn btn-sm btn-primary">View Details</button>
                                    </Link>
                                </td>
                                <td>

                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                   
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AlArt;
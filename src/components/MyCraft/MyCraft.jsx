import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyCraft = () => {
    const [item, setItem] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/myCraft/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setItem(data);
                });
        }
    }, [user]);

    return (
        <div>
            <p className="text-2xl font-bold mb-4">This is my product</p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.map((craft) => (
                    <div key={craft._id} className="border rounded-lg p-4 shadow hover:shadow-lg">
                        <img src={craft.imgUrl} alt={craft.name} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg font-semibold mt-2">{craft.name}</h2>
                        <p><strong>Brand:</strong> {craft.brandName}</p>
                        <p><strong>Price:</strong> ${craft.price}</p>
                        <p><strong>Rating:</strong> {craft.rating} ⭐</p>
                        <p><strong>Type:</strong> {craft.type}</p>
                        <div className="flex justify-between mt-3">
                           <Link to={`/products/${craft._id}`}>
                            <button
                                // onClick={() => handleUpdate(craft._id)} 
                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            >
                                Update
                            </button>
                           </Link>
                            <button
                                // onClick={() => handleDelete(craft._id)} 
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









// // 
// // gias-uddin-swe      b9-crud-client
// // https://github.com/gias-uddin-swe/B9-Crud-Server
// // https://github.com/gias-uddin-swe/B9-Crud-client
















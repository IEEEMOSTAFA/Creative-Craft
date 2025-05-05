import React, { useEffect, useState } from 'react';

const MyCraft = () => {
    const [crafts, setCrafts] = useState([]);
    const [filter, setFilter] = useState('All');
    const [allCrafts, setAllCrafts] = useState([]);

    useEffect(() => {
        fetch('/craft.json') // assuming craft.json is in the public folder
            .then(res => res.json())
            .then(data => {
                setAllCrafts(data);
                setCrafts(data);
            });
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setCrafts(allCrafts);
        } else {
            const filtered = allCrafts.filter(item => item.customization === filter);
            setCrafts(filtered);
        }
    }, [filter, allCrafts]);

    const handleDelete = (id) => {
        console.log('Delete item with ID:', id);
        const remaining = crafts.filter(craft => craft._id !== id);
        setCrafts(remaining);
        setAllCrafts(remaining);
    };

    const handleUpdate = (id) => {
        console.log('Update item with ID:', id);
        // Navigate to update form or open modal
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Craft Gallery</h1>

            {/* Filter Dropdown */}
            <div className="mb-4">
                <label className="mr-2 font-medium">Filter by Customization:</label>
                <select 
                    className="border rounded px-2 py-1"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {crafts.map(craft => (
                    <div key={craft._id} className="border rounded-lg p-4 shadow hover:shadow-lg">
                        <img src={craft.image} alt={craft.item_name} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg font-semibold mt-2">{craft.item_name}</h2>
                        <p><strong>Price:</strong> ${craft.price}</p>
                        <p><strong>Rating:</strong> {craft.rating} ⭐</p>
                        <p><strong>Customization:</strong> {craft.customization}</p>
                        <p><strong>Stock Status:</strong> {craft.stockStatus}</p>
                        <div className="flex justify-between mt-3">
                            <button 
                                onClick={() => handleUpdate(craft._id)} 
                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            >
                                Update
                            </button>
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

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/singleproducts/${id}`)

            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
            });
    }, [id])
    console.log(id);


    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const imgUrl = form.imgUrl.value;
        const type = form.type.value;
        const rating = form.rating.value;

        const info = { name, brandName, price, imgUrl, type, rating };
        fetch(`http://localhost:5000/updateProduct/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        } )
        .then(res => res.json())
        .then((data) =>{
           console.log("Craft updated successfully:", data);
        })

        // fetch(`http://localhost:5000/update/${id}`, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(info)
        // })
            // .then((res) => res.json())
            // .then((data) => {
            //     console.log("Craft updated successfully:", data);
            //     if (data?.modifiedCount > 0) {
            //         alert("Craft updated successfully");
            //     }
            // })
            // .catch((err) => {
            //     console.error("Failed to update craft:", err);
            // });

    }

    return (
        <div>
            <h1>Product Details</h1>
            <form action="" onSubmit={handleUpdate}>
                <label className="label">Name</label>
                <input defaultValue={product.name} type="text" name="name" className="input input-bordered" placeholder="Craft Name" required />

                <label className="label">Brand Name</label>
                <input defaultValue={product.brandName} type="text" name="brandName" className="input input-bordered" placeholder="Brand Name" required />

                <label className="label">Price</label>
                <input defaultValue={product.price} type="number" name="price" className="input input-bordered" placeholder="Price" required />

                <label className="label">Image URL</label>
                <input defaultValue={product.imgUrl} type="text" name="imgUrl" className="input input-bordered" placeholder="Image URL" required />

                <label className="label">Type</label>
                <input defaultValue={product.type} type="text" name="type" className="input input-bordered" placeholder="Type" required />

                <label className="label">Rating</label>
                <input defaultValue={product.rating} type="number" name="rating" step="0.1" min="0" max="5" className="input input-bordered" placeholder="Rating" required />


                <button value="Update Product" type="submit" className="btn btn-neutral mt-4 w-full">Update Product</button>
            </form>

        </div>
    );
};

export default ProductDetails;
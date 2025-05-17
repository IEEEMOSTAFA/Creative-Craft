import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddCraft = ({ update }) => {
  const { user } = useContext(AuthContext); // ✅ Correct

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const imgUrl = form.imgUrl.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const email = user?.email;

    const info = { name, brandName, price, imgUrl, type, rating, email };

    fetch("http://localhost:5000/addCraft", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Craft added successfully:", data);
        if(data?.insertedId){
          alert("Craft added successfully");
        }
        // if (typeof update === "function") update(); // Optional: call update callback
        // form.reset(); // ✅ Reset form after submission
      })
      .catch((err) => {
        console.error("Failed to add craft:", err);
      });
      console.log("info", info);
      
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-bold text-center mb-4">Add Your Craft</h1>
            <form onSubmit={handleAddProduct}>
              <label className="label">Name</label>
              <input type="text" name="name" className="input input-bordered" placeholder="Craft Name" required />

              <label className="label">Brand Name</label>
              <input type="text" name="brandName" className="input input-bordered" placeholder="Brand Name" required />

              <label className="label">Price</label>
              <input type="number" name="price" className="input input-bordered" placeholder="Price" required />

              <label className="label">Image URL</label>
              <input type="text" name="imgUrl" className="input input-bordered" placeholder="Image URL" required />

              <label className="label">Type</label>
              <input type="text" name="type" className="input input-bordered" placeholder="Type" required />

              <label className="label">Rating</label>
              <input type="number" name="rating" step="0.1" min="0" max="5" className="input input-bordered" placeholder="Rating" required />

              <button type="submit" className="btn btn-neutral mt-4 w-full">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCraft;

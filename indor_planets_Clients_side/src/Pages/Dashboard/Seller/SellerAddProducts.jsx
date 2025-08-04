import React, { useState } from "react";

const SellerAddProducts = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    price: "",
    isNew: false,
    isBest: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...product,
      price: parseInt(product.price),
    };
    console.log("Submitted Product:", finalData);
    // Backend e pathanor logic ekhane likhte paro
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-base-200 shadow-2xl shadow-green-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered md:col-span-2"
          rows={3}
          onChange={handleChange}
          required
        ></textarea>

        <div className="flex gap-4">
          <label className="label cursor-pointer">
            <span className="label-text">New Product</span>
            <input
              type="checkbox"
              name="isNew"
              className="checkbox text-green-700  ml-2"
              onChange={handleChange}
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Best Product</span>
            <input
              type="checkbox"
              name="isBest"
              className="checkbox text-green-700  ml-2"
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit" className="btn  bg-green-500 text-white w-full md:col-span-2">
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default SellerAddProducts;

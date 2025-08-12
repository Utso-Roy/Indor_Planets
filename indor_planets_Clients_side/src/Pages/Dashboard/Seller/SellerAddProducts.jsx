import React, { useState } from "react";
import axiosInstance from "../../../Utils/axiosInstance";
import { toast } from "react-toastify";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedData = {
        ...product,
        status : "Pending",
        price: parseInt(product.price, 10),
      };

      const response = await axiosInstance.post("/addProductsData", formattedData);

      if (response?.data?.insertedId || response?.data?.acknowledged) {
        toast.success("Product added successfully!");

        setProduct({
          name: "",
          description: "",
          image: "",
          category: "",
          price: "",
          isNew: false,
          isBest: false,
        });
      } else {
        toast.error("Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("An error occurred while adding the product.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-2 p-6 bg-base-200 shadow-2xl shadow-green-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
        Add New Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <p className="text-green-600">Products Name</p>
            <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="input input-bordered w-full"
          value={product.name}
          onChange={handleChange}
          required
        />
      </div>
        <div>
          <p className="text-green-600">Products Imag URL</p>
           <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
          value={product.image}
          onChange={handleChange}
          required
        />
       </div>
        <div>
          <p className="text-green-600">Product Category</p>
           <input
          type="text"
          name="category"
          placeholder="Category"
          className="input input-bordered w-full"
          value={product.category}
          onChange={handleChange}
          required
        />
       </div>
        <div>
          <p className="text-green-600">Product Price</p>
          <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full"
          value={product.price}
          onChange={handleChange}
          required
        />
        </div>
        <div>
          <p className="text-green-600">Product Description</p>
           <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered md:col-span-2"
          rows={3}
          value={product.description}
          onChange={handleChange}
          required
        ></textarea>
       </div>

        <div className="flex flex-wrap gap-4 md:col-span-2">
          <label className="label cursor-pointer">
            <span className="label-text">New Product</span>
            <input
              type="checkbox"
              name="isNew"
              className="checkbox text-green-700 ml-2"
              checked={product.isNew}
              onChange={handleChange}
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Best Product</span>
            <input
              type="checkbox"
              name="isBest"
              className="checkbox text-green-700 ml-2"
              checked={product.isBest}
              onChange={handleChange}
            />
          </label>
        </div>

        <button
          type="submit"
          className="btn bg-green-500 hover:bg-green-600 text-white w-full md:col-span-2"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default SellerAddProducts;

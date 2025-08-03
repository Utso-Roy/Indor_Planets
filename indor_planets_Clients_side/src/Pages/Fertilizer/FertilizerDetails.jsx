import React, { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../Utils/axiosInstance";
import Loading from "../../Loading/Loading";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const FertilizerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [rating, setRating] = useState(0); 

  const { data, isPending } = useQuery({
    queryKey: ["fertilizer"],
    queryFn: async () => {
      const res = await axiosInstance.get("/allFertilizer");
      return res.data;
    },
  });

  if (isPending) return <Loading />;

  const fertilizer = data?.find((a) => a._id === id);
  if (!fertilizer) return <p className="text-red-500 text-center">Product not found</p>;

  const totalPrice = fertilizer.price * quantity;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-base-100 rounded-xl shadow-2xl shadow-green-100 my-10">
      {/* Back Button */}
      <div className="mb-6">
        <button
          className="flex items-center text-green-600 font-semibold cursor-target cursor-pointer hover:underline"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={fertilizer?.image}
          alt={fertilizer?.name}
          className="w-full md:w-1/2 h-80 object-contain rounded-lg "
        />

        <div className="flex flex-col justify-between md:w-1/2">
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-3">{fertilizer?.name}</h2>
            <p className="text-gray-700 mb-4">{fertilizer?.description}</p>
            <p className="mb-2">
              <span className="text-amber-500 font-semibold">Suitable For:</span>{" "}
              {fertilizer?.suitableFor.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block text-amber-500 bg-amber-50 px-2 rounded-full mr-2"
                >
                  {item}
                </span>
              ))}
            </p>

            <p className="text-xl text-green-600 font-semibold mb-2">
              Price: ৳ {fertilizer?.price.toLocaleString("en-BD")}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-4">
              <label className="font-medium text-gray-600">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="input w-24 cursor-target"
              />
            </div>

            {/* Total */}
            <p className="text-lg font-bold text-green-700 mb-4">
              Total Price : ৳ {totalPrice.toLocaleString("en-BD")}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              className="btn bg-green-600 text-white flex-grow cursor-target"
              onClick={() => setShowBuyModal(true)}
            >
              Buy Now
            </button>
            <button
              className="btn bg-amber-500 text-white flex-grow cursor-target"
              onClick={() => setShowReviewModal(true)}
            >
              Write Review
            </button>
          </div>
        </div>
      </div>

      {/* Buy Modal */}
      {showBuyModal && (
        <Modal title="Confirm Purchase" onClose={() => setShowBuyModal(false)}>
          <p className="mb-4 text-green-600 font-medium">
            You are buying {quantity}x <strong>{fertilizer.name}</strong>
          </p>
          <p className="mb-4 font-bold text-lg">
            Total Amount: ৳ {totalPrice.toLocaleString("en-BD")}
          </p>
          <div className="modal-action">
            <button
              className="btn bg-green-600 text-white cursor-target"
              onClick={() => {
                toast.success(`${quantity} ${fertilizer.name} purchased successfully!`);
                setShowBuyModal(false);
              }}
            >
              Confirm Purchase
            </button>
          </div>
        </Modal>
      )}

      {/* Review Modal */}
      {showReviewModal && (
        <Modal title="Write a Review" onClose={() => setShowReviewModal(false)}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success(`You rated ${rating} star(s) and submitted your review!`);
              setShowReviewModal(false);
              setRating(0);
            }}
          >
            {/* Star Rating */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-green-700 font-medium">Your Rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-2xl cursor-pointer cursor-target ${
                    star <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            <textarea
              placeholder="Write your review here..."
              required
              className="textarea textarea-bordered w-full mb-4 cursor-target"
            />

            <div className="modal-action">
              <button
                type="button"
                onClick={() => setShowReviewModal(false)}
                className="btn cursor-target"
              >
                Cancel
              </button>
              <button type="submit" className="btn bg-amber-500 text-white cursor-target">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

// Modal Component
const Modal = ({ children, title, onClose }) => {
  return (
    <div className="modal modal-open z-50">
      <div className="modal-box max-w-md bg-white relative">
        <h3 className="text-xl font-bold text-green-700 mb-4">{title}</h3>
        {children}
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2 cursor-target"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default FertilizerDetails;

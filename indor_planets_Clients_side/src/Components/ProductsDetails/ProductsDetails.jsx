import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axiosInstance from "../../Utils/axiosInstance";
import Loading from "../../Loading/Loading";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";

const ProductsDetails = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [reported, setReported] = useState(false);
  const [review, setReview] = useState(false);

  const [showReportModal, setShowReportModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    axiosInstance
      .get("/plantsDetailsData")
      .then((res) => setData(res.data))
      .catch(() => setError("Failed to load data. Please try again later."));
  }, []);

  const filterData = data.find((item) => item._id === id);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  if (!filterData) return <Loading />;

  const handleReport = async (id) => {
    try {
      await axiosInstance.post(`/report`, {
        productId: id,
        reportedName: user?.displayName,
        reportedBy: user.email,
      });
      toast.success("Product reported successfully!");
      setReported(true);
    } catch (error) {
      toast.error("Failed to report product.");
      console.error(error);
    }
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const textArea = form.textArea.value;
    const rating = form.rating.value;
    const reviewData = {
      reviewId: id,
      textArea: textArea,
      rating: rating,
      user: user?.displayName,
      userEmail: user?.email,
      showInHome: false,
      image : user?.photoURL,
      date: new Date(),
    };
    try {
      axiosInstance.post("/review", reviewData);
      toast.success("Product review successfully!");
      setReview(true);
      setShowReviewModal(false);
      setRating(0);
      form.reset();
    } catch (error) {
      toast.error("Failed to report product.", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-xl shadow-2xl shadow-green-200 my-10">
      {/* Back Button */}
      <div className="mb-6">
        <button
          className="flex items-center text-emerald-600 font-semibold cursor-target cursor-pointer hover:underline"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={filterData.image}
          alt={filterData.name}
          className="w-full md:w-1/2 h-96 object-cover rounded-lg"
        />

        <div className="flex flex-col justify-start md:w-1/2">
          <h1 className="text-3xl font-bold text-emerald-600 mb-4">
            {filterData?.name}
          </h1>
          <p className="text-gray-700 mb-4">{filterData?.description}</p>

          <div className="grid grid-cols-2 gap-4 text-amber-500 mb-6">
            <div>
              <strong className="text-gray-600 font-semibold">Price :</strong> ৳{" "}
              {filterData?.price?.toLocaleString("en-BD")}
            </div>
            <div>
              <strong className="text-gray-600 font-semibold">Light :</strong>{" "}
              {filterData?.light}
            </div>
            <div>
              <strong className="text-gray-600 font-semibold">Water :</strong>{" "}
              {filterData?.water}
            </div>
            <div>
              <strong className="text-gray-600 font-semibold">
                Pet Friendly :
              </strong>{" "}
              {filterData?.petFriendly ? "Yes" : "No"}
            </div>
            <div>
              <strong className="text-gray-600 font-semibold">
                Air Purifying :
              </strong>{" "}
              {filterData?.airPurifying ? "Yes" : "No"}
            </div>
            <div>
              <strong className="text-gray-600 font-semibold">
                Category :
              </strong>{" "}
              {filterData?.category}
            </div>
          </div>

          {/* Quantity Input */}
          <div className="flex items-center gap-4 mb-3">
            <label className="font-semibold text-gray-700">Quantity :</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="input border-1 border-amber-400 w-20 text-amber-500 cursor-target"
            />
          </div>

          {/* Total Price */}
          <p className="text-lg font-semibold text-gray-700 mb-4">
            Total :{" "}
            <span className="text-amber-500">
              ৳ {(filterData.price * quantity).toLocaleString("en-BD")}
            </span>
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              className="btn bg-emerald-500 cursor-target cursor-pointer text-white flex-grow"
              onClick={() => setShowBuyModal(true)}
            >
              Buy
            </button>
            <button
              className="btn bg-amber-500 cursor-target cursor-pointer text-white flex-grow"
              onClick={() => setShowReviewModal(true)}
            >
              Review
            </button>
            <button
              className="btn bg-red-500 cursor-target cursor-pointer text-white flex-grow"
              onClick={() => setShowReportModal(true)}
            >
              Report
            </button>
          </div>
        </div>
      </div>

      {/* Buy Modal */}
      {showBuyModal && (
        <Modal
          title={`Buy ${filterData.name}`}
          onClose={() => setShowBuyModal(false)}
        >
          <p className="mb-4 text-gray-700 font-medium">
            You are buying {quantity}x {filterData.name}
          </p>
          <p className="mb-4 font-bold text-lg">
            Total Amount: ৳{" "}
            {(filterData.price * quantity).toLocaleString("en-BD")}
          </p>
          <div className="modal-action">
            <button
              className="btn bg-green-500 text-white cursor-target"
              onClick={() => {
                toast.success(`${quantity} ${filterData.name} purchased!`);
                setShowBuyModal(false);
              }}
            >
              Confirm Purchase
            </button>
          </div>
        </Modal>
      )}

      {/* Report Modal */}
      {showReportModal && (
        <Modal
          title={`Report ${filterData?.name}`}
          onClose={() => setShowReportModal(false)}
          reportOnly
        >
          <p className="text-red-600 mb-4 font-medium">
            If you want to report this product, please confirm below.
          </p>
          <div className="modal-action space-x-2">
            <button
              className="btn cursor-target cursor-pointer bg-red-500 text-white"
              disabled={reported}
              onClick={() => {
                handleReport(filterData?._id);
                setShowReportModal(false);
              }}
            >
              {reported ? "reported" : "confirm"}
            </button>
          </div>
        </Modal>
      )}

      {/* Review Modal */}
      {showReviewModal && (
        <Modal
          title={`Review ${filterData.name}`}
          onClose={() => setShowReviewModal(false)}
        >
          <form onSubmit={(e) => handleSubmit(e, filterData?._id)}>
            <div className="mb-4">
              <p className="font-medium text-gray-700 mb-1">Your Rating:</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label key={star}>
                    <input
                      type="radio"
                      name="rating"
                      required={star === rating}
                      value={star}
                      checked={rating === star}
                      onChange={() => setRating(star)}
                      className="hidden"
                    />
                    <span
                      className={`text-2xl cursor-pointer ${
                        rating >= star ? "text-amber-500" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <textarea
              placeholder="Write your review here..."
              name="textArea"
              required
              className="textarea cursor-target textarea-bordered w-full mb-4"
            ></textarea>
            <div className="modal-action">
              <button
                type="submit"
                disabled={review}
                className="btn cursor-target cursor-pointer bg-amber-500 text-white"
              >
                {review ? "Reviewed" : "submit"}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

// Reusable Modal Component
const Modal = ({ children, title, onClose, reportOnly }) => {
  return (
    <div className="modal modal-open">
      <div
        className={`modal-box relative max-w-lg ${
          reportOnly ? "bg-red-100" : "bg-white"
        }`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            reportOnly ? "text-red-600" : "text-emerald-600"
          }`}
        >
          {title}
        </h3>
        {children}
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle cursor-target cursor-pointer absolute right-2 top-2"
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
      <label className="modal-backdrop" onClick={onClose}></label>
    </div>
  );
};

export default ProductsDetails;

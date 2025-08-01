import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axiosInstance from "../../Utils/axiosInstance";
import Loading from "../../Loading/Loading";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa"; 

const ProductsDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [showReportModal, setShowReportModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-300 rounded-xl shadow-2xl shadow-green-200 my-10">
      
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
          <h1 className="text-3xl font-bold text-emerald-600 mb-4">{filterData?.name}</h1>
          <p className="text-green-500 mb-4">{filterData?.description}</p>

          <div className="grid grid-cols-2 gap-4 text-gray-600 mb-6">
            <div><strong>Price:</strong> ৳ {filterData?.price?.toLocaleString("en-BD")}</div>
            <div><strong>Light:</strong> {filterData?.light}</div>
            <div><strong>Water:</strong> {filterData?.water}</div>
            <div><strong>Pet Friendly:</strong> {filterData?.petFriendly ? "Yes" : "No"}</div>
            <div><strong>Air Purifying:</strong> {filterData?.airPurifying ? "Yes" : "No"}</div>
            <div><strong>Category:</strong> {filterData?.category}</div>
          </div>

          <div className="flex space-x-4">
            <button className="btn bg-emerald-500 cursor-target cursor-pointer text-white flex-grow" onClick={() => setShowBuyModal(true)}>
              Buy
            </button>
            <button className="btn bg-amber-500 cursor-target cursor-pointer text-white flex-grow" onClick={() => setShowReviewModal(true)}>
              Review
            </button>
            <button className="btn bg-red-500 cursor-target cursor-pointer text-white flex-grow" onClick={() => setShowReportModal(true)}>
              Report
            </button>
          </div>
        </div>
      </div>

      {/* Buy Modal */}
      {showBuyModal && (
        <Modal title={`Buy ${filterData.name}`} onClose={() => setShowBuyModal(false)}>
          <p>Purchase process coming soon!</p>
        </Modal>
      )}

      {/* Report Modal */}
      {showReportModal && (
        <Modal title={`Report ${filterData?.name}`} onClose={() => setShowReportModal(false)} reportOnly>
          <p className="text-red-500 mb-4">If you want to report this product, please confirm below.</p>
          <div className="modal-action space-x-2">
            <button
              className="btn cursor-target cursor-pointer bg-red-500 text-white"
              onClick={() => {
                toast.success("Report confirmed!");
                setShowReportModal(false);
              }}
            >
              Confirm
            </button>
          </div>
        </Modal>
      )}

      {/* Review Modal */}
      {showReviewModal && (
        <Modal title={`Review ${filterData.name}`} onClose={() => setShowReviewModal(false)}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Review submitted!");
              setShowReviewModal(false);
            }}
          >
            <textarea
              placeholder="Write your review here..."
              required
              className="textarea cursor-target textarea-bordered w-full mb-4"
            ></textarea>
            <div className="modal-action">
              <button type="button" className="btn cursor-target cursor-pointer" onClick={() => setShowReviewModal(false)}>
                Cancel
              </button>
              <button type="submit" className="btn cursor-target cursor-pointer bg-amber-500 text-white">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

const Modal = ({ children, title, onClose, reportOnly }) => {
  return (
    <div className="modal modal-open">
      <div className={`modal-box relative max-w-lg ${reportOnly ? "bg-red-100" : "bg-white"}`}>
        <h3 className={`text-xl font-bold mb-4 ${reportOnly ? "text-red-500" : "text-emerald-600"}`}>
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

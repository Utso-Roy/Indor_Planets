import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams, useNavigate } from 'react-router';
import axiosInstance from '../../../../Utils/axiosInstance';
import Loader from '../../../../Loading/Loader';
import { FaArrowLeft } from 'react-icons/fa'; 
const ReviewDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['plantsDetailsData'],
        queryFn: async () => {
            const res = await axiosInstance.get('/plantsDetailsData');
            return res.data;
        }
    });

    if (isPending) return <Loader />;
    if (isError) return <div className="text-red-500 text-center py-10">Error: {error.message}</div>;

    const findData = data?.find((item) => item._id === id);

    if (!findData) {
        return <div className="text-center text-red-500 py-10">No data found for this ID.</div>;
    }

    const { name, description, image, light } = findData;

    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-base-200 rounded-xl shadow-green-200 shadow-2xl">
            <div className="mb-4">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center cursor-pointer text-green-600 hover:text-green-800 transition duration-200"
                >
                    <FaArrowLeft className="mr-2" /> Back
                </button>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                    src={image}
                    alt={name}
                    className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
                />
                <div className="space-y-4 text-gray-700">
                    <h2 className="text-3xl font-bold text-green-600">{name}</h2>
                    <p className="text-lg">
                        <span className="font-semibold">Light Requirement:</span> {light}
                    </p>
                    <p className="text-base text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetailsPage;

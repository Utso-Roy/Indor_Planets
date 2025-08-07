import React from 'react';
import {   ScaleLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex justify-center items-center mt-32 max-w-4xl'>
            <ScaleLoader color='green' />

        </div>
    );
};

export default Loader;

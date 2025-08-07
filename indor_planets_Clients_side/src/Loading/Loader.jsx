import React from 'react';
import {   ScaleLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex justify-center items-center max-w-4xl'>
            <ScaleLoader color='green' />

        </div>
    );
};

export default Loader;

import React from 'react';
import { GridLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <GridLoader color='green' />
        </div>
    );
};

export default Loading;

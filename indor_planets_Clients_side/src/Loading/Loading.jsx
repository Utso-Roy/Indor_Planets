import React from 'react';
import { GridLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='block mx-auto'>
            <GridLoader color='green' />
        </div>
    );
};

export default Loading;
import React from 'react';

import  { useState } from "react";
import { Chips } from "primereact/chips";
const UserProducts = () => {
        const [value, setValue] = useState([]);

    return (
       <div className="card p-fluid">
            <Chips
                value={value} onChange={(e) => setValue(e.value)} separator="," />
        </div>
    );
};

export default UserProducts;









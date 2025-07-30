import React from 'react';
import FlowingMenu from './../../../FlowingMenu/FlowingMenu'
const Section1 = () => {
    const demoItems = [
  { link: '#', text: 'Air Purifying Plants', image: 'https://i.ibb.co/tpSJXGXT/indor-9.jpg' },
  { link: '#', text: 'Succulents & Cacti', image: 'https://i.ibb.co/DH90Xj8y/indor-10.jpg' },
  { link: '#', text: 'Foliage Plants', image: 'https://i.ibb.co/1f396dYS/indor-11.jpg' },
  { link: '#', text: 'Flowering Indoor Plants', image: 'https://i.ibb.co/fK96NHh/indor-planets-111.jpg' }
];

    return (
        <div>
            <div style={{ height: '600px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
        </div>
    );
};

export default Section1;
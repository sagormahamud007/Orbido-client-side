import React from 'react';
import logo1 from '../../asstes/New folder/Vector (4).png'
import logo2 from '../../asstes/New folder/Vector (5).png'
import logo3 from '../../asstes/New folder/Vector (6).png'
import logo4 from '../../asstes/New folder/path16.png'

const CompanyName = () => {
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 m-auto mx-48 mt-48 items-center mb-36'>
            <img src={logo1}></img>
            <img src={logo2}></img>
            <img src={logo3}></img>
            <img src={logo4}></img>
        </div>
    );
};

export default CompanyName;
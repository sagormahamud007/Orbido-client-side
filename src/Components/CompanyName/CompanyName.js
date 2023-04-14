import React from 'react';
import logo1 from '../../asstes/New folder/Vector (4).png'
import logo2 from '../../asstes/New folder/Vector (5).png'
import logo3 from '../../asstes/New folder/Vector (6).png'
import logo4 from '../../asstes/New folder/path16.png'

const CompanyName = () => {
    return (
        <div className='lg:grid lg:grid-cols-4 hidden lg:inline  md:grid-cols-2 m-auto mx-48 mt-36 items-center mb-36'>
            <div data-aos="fade-up-left" className='w-full'><img src={logo1}></img></div>
           <div data-aos="flip-left" className='w-full'> <img src={logo2}></img></div>
           <div data-aos="flip-down" className='w-full'> <img src={logo3}></img></div>
            <div data-aos="zoom-in" className='w-full'><img src={logo4}></img></div>
        </div>
    );
};

export default CompanyName;
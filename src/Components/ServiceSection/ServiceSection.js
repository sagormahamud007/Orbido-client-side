import React from 'react';
import './Service.css'

const ServiceSection = () => {
    return (
        <div className='service  lg:mx-36 '>
   <div className=' lg:flex  justify-around'>
   <div className='lg:ml-24 mt-10  px-3'>
            <h2 className='font-semibold text-5xl text-white'>Let’s try our service now!</h2>
            <p className='text-lg font-normal mb-4 text-slate-300 mt-6 lg:mb-24'>Everything you need to accept card payments <br/> and grow your business anywhere on the planet.</p>
            </div>
            <button className='btn ml-4 md:mb-3 lg:mt-24'>Get Started</button>
   </div>
        </div>
    );
};

export default ServiceSection;
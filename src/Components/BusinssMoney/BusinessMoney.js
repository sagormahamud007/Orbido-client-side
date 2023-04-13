import React from 'react';

import rewards from "../../asstes/SpecialLogo/rewards.png";
import secuerd from "../../asstes/SpecialLogo/secuerd.png";
import balance from "../../asstes/SpecialLogo/balance.png";

const BusinessMoney = () => {

    const services=[
        {
            id:1,
            image:rewards,
            title:"Rewards",
            description:"The best credit cards offer some tantalizing combinations of promotions and prizes"
        },
        {
            id:2,
            image:secuerd,
            title:"100% Secured",
            description:"We take proactive steps make sure your information and transactions are secure."
        },
        {
            id:3,
            image:balance,
            title:"Balance Transfer",
            description:"A balance transfer credit card can save you a lot of money in interest charges."
        },
    ]

    return (
        <div className='mb-44 grid lg:grid-cols-2 md:grid-cols-1 lg:mx-32 text-white'>
        <div className='mb-5 ml-8'>
       <div>
       <h2 className='lg:font-semibold text-5xl lg:leading-loose'>You do the business, </h2>
       <h3 className='lg:font-semibold	text-5xl'>we’ll handle the money.</h3>
       </div>


        <p className='text-lg md:px-2 leading-normal mt-6 text-white'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <button className="bg-gradient-to-r text-black h-16 rounded-xl	mt-16 from-sky-500 to-indigo-500 text-lg font-medium py-2 w-44">Get Started</button>
        </div>
        <div>
{
    services.map(service=><>
<div className='flex items-center'>
    <img src={service.image}></img>
    <div className='ml-2 mb-4'>
     <h2>{service.title}</h2>
     <p>{service.description}</p>
    </div>
</div>
    </>)
}
        </div>
    </div>
    );
};

export default BusinessMoney;
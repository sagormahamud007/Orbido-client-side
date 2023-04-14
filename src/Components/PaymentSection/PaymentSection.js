import React from 'react';

import vector from '../../asstes/paymentSectionLogo/Vector.png';
import ellipse1 from '../../asstes/paymentSectionLogo/Ellipse 2340.png';
import  ellipse2 from '../../asstes/paymentSectionLogo/Ellipse 2339.png';
import Hart1 from '../../asstes/paymentSectionLogo/Polygon 2.png';
import Hart2 from '../../asstes/paymentSectionLogo/Polygon 4.png';
import vector1 from '../../asstes/Store/Vector.png';
import vector3 from '../../asstes/Store/Vector1.png';
import './PaymentSection.css'


const PaymentSection = () => {
    const Transactions=[
        {
            id:1,
            img:vector,
            title:"Dribbble Pro",
            days:"15 Days ago",
            hart:Hart1,
            number:"-$250,93"
        },
        {
            id:2,
            img:ellipse2,
            title:"Manulife Cash",
            days:"4 Days ago",
            hart:Hart1,
            number:"-$250,93"
        },
        {
            id:3,
            img:ellipse1,
            title:"Dribbble Pro",
            days:"15 Days ago",
            hart:Hart2,
            number:"-$250,93"
        },
    ]
    return (
        <div className='grid md:grid-cols-1 lg:grid-cols-2 py-12 lg:mx-36  '>
            <div className='text-white styles relative w-72 mb-5'>
                <h2 className='py-6 ml-3 font-semibold text-xl	'>Last Transaction</h2>
                {
                    Transactions.map(Transaction=><>
                    <div className='flex items-center justify-items-end'>
                    <div className='flex items-center'>
                    <img className='mb-4 ml-2' src={Transaction.img}></img>
                    <div className='ml-3'>
                    <h3>{Transaction.title}</h3>
                    <p className='text-xs'>{Transaction.days}</p> 
                    </div>
                    </div>

                    <div className='flex items-center ml-7'>
                    <img src={Transaction.hart}></img>
                    <p>{Transaction.number}</p>
                    </div>
                    </div>
                    </>)
                }
                <div className='liner p-3 absolute top-0 -mt-40 lg:ml-48 border'>
                    <div className='flex items-center'>
                        <img src={ellipse2}></img>
                    <div className='ml-3'>
                    <h2 className='text-2xl'>Paypal</h2>
                    <p>Checkout</p>
                    </div>
                    </div>
                      <div className='flex justify-between mt-6'>
                        <p>total <br/> <span className='text-2xl'>$200</span></p>
                        <div><button className='border border-cyan-600 text-cyan-600 px-2 mt-3'>Change</button></div>
                    </div>
                    <button className=' style w-full mt-4 border '>Make Payment</button>
                </div>
            </div>
            <div className='ml-4'>
                <h2 className='font-semibold text-white text-2xl lg:text-5xl leading-snug md:px-3'>Easily control your <br/> billing & invoicing.</h2>
                <p className='mt-6 text-slate-200'>Elit enim sed massa etiam. Mauris eu adipiscing  ultrices ametodio aenean neque. Fusce ipsum orci  rhoncus aliporttitor integer platea placerat.</p>
                <div className='mt-5'>
                    <img src={vector1}></img>
                </div>
            </div>
        </div>
    );
};

export default PaymentSection;
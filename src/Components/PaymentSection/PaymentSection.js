import React from 'react';

import vector from '../../asstes/paymentSectionLogo/Vector.png';
import ellipse1 from '../../asstes/paymentSectionLogo/Ellipse 2340.png';
import  ellipse2 from '../../asstes/paymentSectionLogo/Ellipse 2339.png';
import Hart1 from '../../asstes/paymentSectionLogo/Polygon 2.png';
import Hart2 from '../../asstes/paymentSectionLogo/Polygon 4.png';
import vector1 from '../../asstes/Store/Vector.png';
import vector3 from '../../asstes/Store/Vector1.png';



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
        <div className='grid md:grid-cols-1 lg:grid-cols-2 py-12 lg:mx-36 border'>
            <div className='text-white'>
                <h2 className='p-2'>Last Transaction</h2>
                {
                    Transactions.map(Transaction=><>
                    <div className='flex items-center justify-items-end'>
                    <div className='flex items-center'>
                    <img src={Transaction.img}></img>
                    <div className='ml-3'>
                    <h3>{Transaction.title}</h3>
                    <p>{Transaction.days}</p> 
                    </div>
                    </div>

                    <div className='flex items-center'>
                    <img src={Transaction.hart}></img>
                    <p>{Transaction.number}</p>
                    </div>
                    </div>
                    </>)
                }
                <div></div>
            </div>
            <div className=''>
                <h2 className='font-semibold text-white text-5xl leading-snug	'>Easily control your <br/> billing & invoicing.</h2>
                <p className='mt-6 text-slate-200'>Elit enim sed massa etiam. Mauris eu adipiscing <br/> ultrices ametodio aenean neque. Fusce ipsum orci <br/> rhoncus aliporttitor integer platea placerat.</p>
                <div className='mt-5'>
                    <img src={vector1}></img>
                </div>
            </div>
        </div>
    );
};

export default PaymentSection;
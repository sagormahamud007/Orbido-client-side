import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BusinessMoney from '../../Components/BusinssMoney/BusinessMoney'
import PaymentSection from '../../Components/PaymentSection/PaymentSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessMoney></BusinessMoney>
            <PaymentSection></PaymentSection>
        </div>
    );
};

export default Home;
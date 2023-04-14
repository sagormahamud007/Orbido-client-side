import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BusinessMoney from '../../Components/BusinssMoney/BusinessMoney'
import PaymentSection from '../../Components/PaymentSection/PaymentSection';
import CompanyName from '../../Components/CompanyName/CompanyName';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessMoney></BusinessMoney>
            <PaymentSection></PaymentSection>
            <CompanyName></CompanyName>
        </div>
    );
};

export default Home;
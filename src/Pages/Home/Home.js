import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BusinessMoney from '../../Components/BusinssMoney/BusinessMoney'
import PaymentSection from '../../Components/PaymentSection/PaymentSection';
import CompanyName from '../../Components/CompanyName/CompanyName';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessMoney></BusinessMoney>
            <PaymentSection></PaymentSection>
            <CompanyName></CompanyName>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;
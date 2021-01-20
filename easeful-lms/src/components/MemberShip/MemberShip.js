import React from 'react';
import Footer from '../../ReusableComponents/Footer/Footer';
import Header from '../../ReusableComponents/Header';
import FirstSection from './FirstSection/FirstSection';
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';
const MemberShip = () => {
    return (
        <div>
            <Header/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <Footer/>
        </div>
    );
};

export default MemberShip;
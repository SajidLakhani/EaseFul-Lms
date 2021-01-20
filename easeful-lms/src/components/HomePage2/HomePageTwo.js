import React from 'react';
import Footer from '../../ReusableComponents/Footer/Footer';
import Header from '../../ReusableComponents/Header';
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';
import FourthSection from './FourthSection/FourthSection';
import SeventhSection from '../HomePage/SeventhSection/SeventhSection'
import EightSection from '../HomePage/EigthSection/EightSection'

const HomePageTwo = () => {
    return (
        <div>
            <Header/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <EightSection/>
            <SeventhSection/>
            
            <Footer/>
        </div>
    );
};

export default HomePageTwo;
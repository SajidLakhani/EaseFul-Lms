import React from 'react';
import Footer from '../../ReusableComponents/Footer/Footer';
import Header from '../../ReusableComponents/Header';
import SecondSection from './SecondSection/SecondSection';
import FirstSection from './FirstSection/FirstSection';

const Instructor = () => {
    return (
        <div>
            <Header/>
            <FirstSection/>
            <SecondSection/>
            <Footer/>
        </div>
    );
};

export default Instructor;
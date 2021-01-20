import React from 'react';
import Footer from '../../ReusableComponents/Footer/Footer';
import Header from '../../ReusableComponents/Header';
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection';

const ContactUs = () => {
    return (
        <div>
            <Header/>
            <FirstSection/>
            <SecondSection/>
            <Footer/>
        </div>
    );
};

export default ContactUs;
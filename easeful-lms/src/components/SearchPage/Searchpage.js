import React from 'react';
import Footer from '../../ReusableComponents/Footer/Footer';
import Header from '../../ReusableComponents/Header';
import FifthSection from './FifthSection/FifthSection';
import FirstSection from './FirstSection/FirstSection'
import FourthSection from './FourthSection/FourthSection';
import SixthSection from './SixthSection/SixthSection';

const Searchpage = () => {
    return (
        <div>
            <Header/>
            <FirstSection/>
            {/* <FourthSection/> */}
            <FifthSection/>
            <SixthSection/>
            <Footer/>
        </div>
    );
};

export default Searchpage;
import React from 'react';
import Footer from '../../ReusableComponents/Footer/Footer';

import FirstSection from './FirstSection/FIrstSection';
import SecondSection from './SecondSection/SecondSection';
import FourthSection from './FourthSection/FourthSection'
import ThirdSection from './ThirdSection/ThirdSection';
import SixthSection from '../HomePage/SecondSection/SecondSection'
import SeventhSection from '../HomePage/FourthSection/FourthSection'
import FifthSection from './FifthSection/FifthSection';

const HomePageThree = () => {
    return (
        <div>
            <FirstSection />
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection/>
            <SeventhSection/>
            <Footer />
        </div>
    );
};

export default HomePageThree;
import React from 'react';
import Footer from '../../ReusableComponents/Footer/Footer';
import EightSection from './EigthSection/EightSection';
import FifthSection from './FifthSection/FifthSection';
import FirstSection from './FirstSection/FirstSection';
import FourthSection from './FourthSection/FourthSection';
import SecondSection from './SecondSection/SecondSection';
import SeventhSection from './SeventhSection/SeventhSection';
import SixSection from './SixthSection/SixSection';
import ThirdSection from './ThirdSection/ThirdSection';


const HomePage1 = () => {
    return (
        <div>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
            <SixSection/>
            <SeventhSection/>
            <EightSection/>
            <Footer/>
        </div>
    );
};

export default HomePage1;
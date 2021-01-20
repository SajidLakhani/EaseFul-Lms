import { makeStyles } from '@material-ui/core';
import React from 'react';
import Footer from '../../ReusableComponents/Footer/Footer';
import FirstSection from './FirstSection/FirstSection';


const CoursePageOne = () => {
    return (
        <div>
           <FirstSection/>
            <Footer />
        </div>
    );
};

export default CoursePageOne;
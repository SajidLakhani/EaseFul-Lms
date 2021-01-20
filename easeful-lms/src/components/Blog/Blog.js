import React from 'react';
import Footer from '../../ReusableComponents/Footer/Footer';
import Header from '../../ReusableComponents/Header';
import PopularBlog from '../../ReusableComponents/PopularBlog/PopularBlog';
import FirstSection from './FirstSection/FirstSection'
import SecondSection from './SecondSection/SecondSection';

const Blog = () => {
    return (
        <div>
            <Header/>
            <FirstSection/>
            {/* <SecondSection/> */}
            <PopularBlog/>
            <Footer/>
        </div>
    );
};

export default Blog;
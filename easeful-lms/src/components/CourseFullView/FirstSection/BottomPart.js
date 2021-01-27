import React from 'react';
import { Divider } from '@material-ui/core';
import ContentSection from './ContentSection';
import FeedBackSection from '../FeedBackSection/FeedBackSection';
import CourseViewButtons from '../../../ReusableComponents/CourseViewButtons/CourseViewButtons';
import Player from '../../../ReusableComponents/Player/Player';

export default function BottomPart() {
    return (
        <>
           <Player Height = '600px' BorderRadius='unset'/>
            <CourseViewButtons />
            <Divider style={{
                width: '95%',
                margin: 'auto'
            }}
            />
            <ContentSection />
            <FeedBackSection />
        </>
    );
}
import { makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../../../ReusableComponents/Header';
import Cards from './Cards';



const useStyles = makeStyles((theme) => ({

    subMain: {
        width: '100%',
        backgroundColor: '#efeff6'
    }

}))

const FirstSection = () => {
    const classes = useStyles();
    return (

        <div className={classes.subMain}>
            <Header />
            <Cards/>
        </div>
    )
};

export default FirstSection;
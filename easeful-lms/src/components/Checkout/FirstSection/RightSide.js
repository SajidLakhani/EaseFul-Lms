import { Avatar, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import BottomCard from './BottomCard';
import VisaCard from '../../../Assets/Imgs/visacard.svg'
import PayPal from '../../../Assets/Imgs/Paypal.svg'
import MasterCard from '../../../Assets/Imgs/mastercard.svg'
import Discover from '../../../Assets/Imgs/Discover.svg'
const useStyles = makeStyles((theme) => ({
    Main: {
        backgroundColor: '#FEF0EF',
        height: 'fit-content',
        width: 'fit-content',
    },

    subMain: {
        padding: '15px 20px ',

    },

    para: {
        margin: 'auto 0',
        fontSize: '12px',
        color: '#CAC6D4'
    },

    head: {
        margin: 0
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    innerDiv: {

    },
    
    Img: {
        width: '18%',
      
    },
    h5:{
        margin:'15px 0'
    }
}))
const RightSide = () => {
    const Images = [
        {
            image: `${VisaCard}`
        },
        {
            image: `${MasterCard}`
        },
        {
            image: `${Discover}`
        },
        {
            image: `${PayPal}`
        },
    ]
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                <h4 className={classes.head}> Cart Details</h4>
                <h5 className = {classes.h5}>Card Type</h5>
                <div className={classes.bottom}>
                    {Images.map((item) => (
                        <img className={classes.Img} src={item.image} />
                    ))}

                </div>
                
                <BottomCard />
            </div>

        </div>
    );
};

export default RightSide;
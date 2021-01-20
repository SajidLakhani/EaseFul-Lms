import { Avatar, Card, makeStyles } from '@material-ui/core';
import React from 'react';
import BrownBackground from '../../../Assets/Imgs/bgbrown.svg'
import BlueBackground from '../../../Assets/Imgs/bgblue.svg'
import PinkBackground from '../../../Assets/Imgs/bgpink.svg'
import DiscountOne from '../../../Assets/Imgs/discountone.jpg'
import DiscountTwo from '../../../Assets/Imgs/discounttwo.jpg'
import DiscountThree from '../../../Assets/Imgs/discountthree.jpg'


const useStyles = makeStyles((theme) => ({
    Main: {
        width: '60%',
        margin: 'auto',
        paddingBottom: '40px',
        display: 'flex'
    },

    blueCard: {
        backgroundImage: `url(${BrownBackground})`,
        width: '30%',
        height: '30vh',
        backgroundPosition: 'center',
        display: 'flex'
    },
    avatar: {
        width: '40%',
        height: 'auto',
        marginTop: '20px',
        borderRadius: 'unset'
    },
    Content: {
        width: '60%',
        margin:'30px 20px'
    },

    paraOne: {
        margin: 0,
        fontSize:'13px'
    },
    paraTwo: {
        margin: 0,
        fontSize:'15px',
        marginTop:'10px',
        fontWeight:'bold'
    },
    bottomDiv:{
        width: 'fit-content',
    position: "absolute",
    marginTop:'42px',
    marginLeft:'-35px',
    backgroundColor: '#B3A092',
    borderRadius: '5px',
    },
    bottompara:{
        margin:"0",
        fontSize:'13px'
    },

    bottomparaTwo:{
        margin:'0',
        fontSize:'22px'
    },
    InnerDiv:{
        padding:'6px 10px',
        textAlign: 'center',
    color: 'white',
    }

}))

const MiddleCards = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <Card className={classes.blueCard}>
                <div className={classes.Content}>
                    <div className={classes.forText}>
                    <p className={classes.paraOne} >Up To 58% Off</p>
                    <p className={classes.paraTwo}>Get 12-Month Subscription</p>
                    </div>
                    <div className = {classes.bottomDiv}>
                        <div className={classes.InnerDiv}>
                        <p className = {classes.bottompara}> Total Discount</p>
                        <h3 className = {classes.bottomparaTwo}>50%</h3>
                        </div>
                    </div>
                </div>
                <Avatar className={classes.avatar} src={DiscountOne} />
            </Card>
            <Card className={classes.blueCard} style ={{
                marginLeft:'48px',
                backgroundImage:`url(${BlueBackground})`,
            }}>
                <div className={classes.Content}>
                    <div className={classes.forText}>
                    <p className={classes.paraOne} >Productivity Course</p>
                    <p className={classes.paraTwo}>The Complete Personal</p>
                    </div>
                    <div className = {classes.bottomDiv} style ={{
                        backgroundColor:'#64929F'
                    }}>
                        <div className={classes.InnerDiv}>
                        <p className = {classes.bottompara}>Total Discount</p>
                        <h3 className = {classes.bottomparaTwo}>58%</h3>
                        </div>
                    </div>
                </div>
                <Avatar className={classes.avatar} src={DiscountTwo} />
            </Card>
            <Card className={classes.blueCard}  style ={{
                marginLeft:'48px',
               backgroundImage: `url(${PinkBackground})`,
            }}>
                <div className={classes.Content}>
                    <div className={classes.forText}>
                    <p className={classes.paraOne} >Pass above Rs 250</p>
                    <p className={classes.paraTwo}>Avail 10% Off on Textbook</p>
                    </div>
                    <div className = {classes.bottomDiv} style ={{
                        backgroundColor:'#DF4161'
                    }}>
                        <div className={classes.InnerDiv}>
                        <p className = {classes.bottompara}> Total Discount</p>
                        <h3 className = {classes.bottomparaTwo}>10%</h3>
                        </div>
                    </div>
                </div>
                <Avatar className={classes.avatar} src={DiscountThree} />
            </Card>
        </div>
    );
};

export default MiddleCards;
import { Avatar, Card, CardMedia, makeStyles } from '@material-ui/core';
import React from 'react';
import Logo from '../../Assets/Imgs/Logo.svg'
import MiddleImage from '../../Assets/Imgs/midImg.svg'
const useStyles = makeStyles((theme) => ({
    Main: {
        width: '50%',
        margin: 'auto',
        

    },

    logo: {
        marginTop: '40px',
        width: '35%',
        height: '40%',
        borderRadius: 'unset'
    },
    root: {
        width: '100%',
        marginTop: '50px',
        boxShadow: 'unset'
    },
    media: {
        height: '350px',
    },

    contentDiv: {
        color: 'white'
    },
    head: {
        fontSize: '2.5em'
    },
    para: {
        textAlign: 'center'
    }
}))

const LeftSide = () => {

    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <Avatar className={classes.logo} src={Logo} />
            
            <Card className={classes.root}>

                <CardMedia
                    className={classes.media}
                    image={MiddleImage}
                    title="Image"
                />
            </Card>
         
            <div className={classes.contentDiv}>
                <h1 className={classes.head}>Turn your ambition
 into a success story </h1>
                <p className={classes.para}>Choose from over 100,000 online video.</p>
            </div>

        </div>
    );
};

export default LeftSide;
import { Card, CardMedia, makeStyles } from '@material-ui/core';
import React from 'react';
import Classes from '../../../Assets/Imgs/classes.jpg'
import Expert from '../../../Assets/Imgs/expert.jpg'
import Degree from '../../../Assets/Imgs/degree.jpg'
import Circle from '../../../Assets/Imgs/circle.png'
const useStyles = makeStyles({
    firstDiv:{
       backgroundImage: `url(${Circle})`,
       backgroundRepeat: 'no-repeat',
       backgroundPositionY: 'center',
    },

    root: {
        width: '180px',
        padding: '10px',
        height:'240px',
        borderRadius: '2.5px',

    },
    media: {
        height: 145,
        borderRadius: 'inherit'
    },
    Main: {
        display: 'flex',


    },
    para: {
        textAlign: 'center',
        fontSize: '13px',
        
        color: '#302d3a',
    },
    rootTwo: {
        width: '200px',
        height: '150px',
        alignSelf: 'flex-end',
        margin: '0 30px',
        padding: '10px',

        borderRadius: '2.5px',
    },
    mediaTwo: {
        height: '100%',
        borderRadius: 'inherit'
    },
    rootThree: {
        width: '200px',
        height: '150px',
        
        padding: '10px',

        borderRadius: '2.5px',
    },


    LastDiv:{
        width: '65%',
    margin: 'auto',
    marginTop: '20px',
    }
  
});

const Cards = () => {
    const classes = useStyles();
    return (
        <div className = {classes.firstDiv}>
            <div className={classes.Main}>

                <Card className={classes.root}>

                    <CardMedia
                        className={classes.media}
                        image={Classes}
                        title="Courses"
                    />

                    <p className={classes.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

                </Card>
                <Card className={classes.rootTwo}>

                    <CardMedia
                        className={classes.mediaTwo}
                        image={Expert}
                        title="Courses"
                    />
                </Card>

            </div>
            <div className = {classes.LastDiv}>
                <Card className={classes.rootThree}>

                    <CardMedia
                        className={classes.mediaTwo}
                        image={Degree}
                        title="Courses"
                    />
                </Card>
            </div>
        </div>
    );
};

export default Cards;
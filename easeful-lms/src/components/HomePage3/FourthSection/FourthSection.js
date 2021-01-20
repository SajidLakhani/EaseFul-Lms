import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Think from '../../../Assets/Imgs/students.jpg'
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    Main: {
        backgroundColor: '#33333d',
        color: 'white',
        textAlign: '-webkit-center',
        paddingTop: '50px',
        paddingBottom: '50px',
    },


    paraBox: {
        textAlign: 'left',
        width: '70%',
        margin: 'auto',
    },

    para: {
        fontSize: '35px',
        marginBottom: '40px',
        
    },

    mediaBox: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
    },

    root: {
        width: '500px',
        margin: 'auto',
        height: '400px',
        boxShadow: 'unset',
        borderRadius: '10px'
    },
    media: {
        height: '100%',
        backgroundPosition: 'bottom'
    },

    bottomPara: {
       
        fontSize: '30px',
        textAlign: 'left',
      
        fontStyle: 'italic'
    },
    bottomBox:{
        display: 'block',
    width: '40%',
    margin: 'auto',
    },

    paraName : {
        margin: 0,
    textAlign: 'left',
    fontStyle: 'italic',
    }
});

export default function FourthSection() {
    const classes = useStyles();

    return (
        <div className={classes.Main}>
            <Box className={classes.paraBox}>
                <p className={classes.para}>What our students have to say</p>
            </Box>
            <Box className={classes.mediaBox}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={Think}
                        title="Image"
                    />
                </Card>
                <Box className = {classes.bottomBox}>
                    <p className={classes.bottomPara}>Skillfy is a life saver. I don’t have the
time money for a college education. My goal is to become a freelance web designer and thanks to Skillfy.</p>
                    <p className = {classes.paraName}>Riaz Surti | Hearthy Foods</p>
                </Box>
            </Box>
        </div>

    );
}
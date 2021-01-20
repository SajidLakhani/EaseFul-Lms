import { Card, CardMedia, makeStyles } from '@material-ui/core';
import React from 'react';
import Question from '../../../Assets/Imgs/question.jpg'


const useStyles = makeStyles((theme) => ({
    Main: {
        padding: '50px 0'
    },
    root: {
        width:'100%',
        height:'400px'
    },
    media: {
        height: '100%',
    },
}))
const RightSide = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={Question}
                    title="Contemplative Reptile"
                />
            </Card>
        </div>
    );
};

export default RightSide;
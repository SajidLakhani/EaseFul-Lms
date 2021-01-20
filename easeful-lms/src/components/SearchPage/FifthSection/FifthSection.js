import { Card, CardMedia, makeStyles } from '@material-ui/core';
import React from 'react';
import Goal from '../../../Assets/Imgs/goal.jpg'

const useStyles = makeStyles((theme) => ({
    Main: {
        backgroundColor: '#FEF0EF',
        width: '60%',
        margin: '50px auto',
    },

    subMain: {
        padding: '50px',
        display: 'flex',
        justifyContent: 'space-between'
    },

    media: {
        width: '100%',
        height: '100%'
    },

    root: {
        width: '45%',
        height: '40vh',
        margin:'auto'
    },

    Content:{
        width:'40%',
        margin:'auto'
    },

    head:{
        fontStyle:'italic',
        fontSize:'16px',
        fontWeight:'unset',
        color:'#302D3A',
        lineHeight: 2
    },
    para:{
        fontSize:'12px'
    }

}))

const FifthSection = () => {
    const classes = useStyles()
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                <div className={classes.Content}>
                    <h3 className = {classes.head}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</h3>
                    <p className = {classes.para}>Riaz Surti | Hearthy Foods</p>
                </div>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={Goal}
                        title="Image"
                    />
                </Card>
            </div>
        </div>
    );
};

export default FifthSection;
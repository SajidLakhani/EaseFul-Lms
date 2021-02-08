import { makeStyles, Button } from '@material-ui/core';
import React from 'react';
import BottomContent from './BottomContent';
const useStyles = makeStyles((theme) => ({
    button: {
        padding: '6px 20px',
        color: "#F56962",
        border: '1px solid #F56962',
        width: 'fit-content',
        fontSize: "13px",
        fontWeight: 'bold',
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "transparent",
    },

    subMain: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    innerDiv: {
        display: 'flex'
    },

    head: {
        margin: '0'
    },
    para: {
        margin: 'auto 0',
        fontSize: '13px',
        marginLeft: '5px',
        color:'#5F5982'
    },

    Content:{
        fontSize:'14px',
        color:'#5F5982'
    }
}))
const RightSide = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.subMain}>
                <div className={classes.innerDiv}>
                    <h3 className={classes.head}>
                        Farrah Fowler
                </h3>
                    <p className={classes.para}>
                        illustrator & Artist
                </p>
                </div>
                <Button className={classes.button}>Follow</Button>
            </div>
            <span className={classes.Content}>
                Hi, my name is Farrah.
            </span>
            <p className={classes.Content}>
                I am a photo artist and art director from Munich. Last year I was chosen to be one of the nine Adobe Creative Residents in 2019/2020.My pictures are widely known for their colorful, surrealistic touch. by books, lyrics and words in total, I am able to abstract and visualize them into new artworks.
                </p>
                <BottomContent/>
        </div>
    );
};

export default RightSide;
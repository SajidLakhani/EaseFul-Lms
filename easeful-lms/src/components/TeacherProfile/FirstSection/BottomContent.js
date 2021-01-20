import { makeStyles } from '@material-ui/core';
import React from 'react';
import Star from '../../../Assets/Imgs/Star.svg'
import Eye from '../../../Assets/Imgs/eye.svg'
import Play from '../../../Assets/Imgs/play.svg'

const useStyles = makeStyles((theme) => ({
    Main: {
        display: 'flex',
        width: '55%',
        justifyContent: 'space-between'
    },

    subMain: {
        display: 'flex'
    },

    para: {
        margin: 'auto 0',
        fontSize: '10px',
        marginLeft: '5px'
    },

    imgDiv: {
        width: '15%'
    },

    imgDiv: {
        width: '22%'
    },
}))

const BottomContent = () => {
    const classes = useStyles();

    const data = [
        

        {
            text: '1,258 Students',
            image: `${Eye}`
        },

        {
            text: 'Course',
            image: `${Play}`
        },


    ]
    return (
        <div className={classes.Main}>
             <div className={classes.subMain}>
                    <img className={classes.imgDivStar} src={Star} />
                    <p className={classes.para}>
                    4.6 Instructor Rating
                    </p>
                </div>
            {data.map((item) => (
                <div className={classes.subMain}>
                    <img className={classes.imgDiv} src={item.image} />
                    <p className={classes.para}>
                        {item.text}
                    </p>
                </div>
            ))}


        </div>
    );
};

export default BottomContent;
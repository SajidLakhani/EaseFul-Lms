import { makeStyles } from '@material-ui/core';
import React from 'react';
import Star from '../../../Assets/Imgs/Star.svg'
import Eye from '../../../Assets/Imgs/eye.svg'
import Clock from '../../../Assets/Imgs/clock.svg'
import Play from '../../../Assets/Imgs/play.svg'

import Overview from './Overview';
const useStyles = makeStyles((theme) => ({
    Main: {
        color: '#5F5982',
        textAlign: 'justify',
        paddingBottom: '50px',
        paddingTop: '30px'
    },

    subMain: {
        display: 'flex',

    },
    ImgDiv: {
        display: 'flex'
    },
    Img: {
        margin: 'auto',
        width: '20px',

    },
    para: {
        margin: 'auto',
        fontSize: '12px',
        marginLeft: '3px'
    }
}))

const LeftSide = () => {
    const classes = useStyles();
    const data = [

        {
            image: `${Eye}`,
            text: 'Enrolled 45 students'
        },

        {
            image: `${Clock}`,
            text: 'Duration 10 week'
        },
        {
            image: `${Play}`,
            text: '36 Lesion'
        },


    ]
    return (
        <>
            <div className={classes.Main}>
                <h2>Adobe CC Masterclass: Photoshop,
                Illustrator, XD & InDesign
            </h2>
                <h4>
                    Learn graphic design today with Photoshop, Illustrator,
                    Adobe XD, InDesign & more in this Adobe CC Masterclass!
            </h4>
                <div className={classes.subMain}>
                    <div className={classes.ImgDiv}>
                        <img src={Star} className={classes.Img} />
                        <p className={classes.para}>4.5 (4.5 (1,348 ratings))</p>
                    </div>
                    {data.map((item) => (
                        <div className={classes.ImgDiv} style={{
                            marginLeft: '15px'
                        }}>
                            <img src={item.image} className={classes.Img} />
                            <p className={classes.para}>{item.text}</p>
                        </div>
                    ))}

                </div>
            </div>

            <Overview />
        </>

    );
};

export default LeftSide;
import { makeStyles } from '@material-ui/core';
import React from 'react';
import Star from '../../../Assets/Imgs/Star.svg'
import Eye from '../../../Assets/Imgs/eye.svg'
import Clock from '../../../Assets/Imgs/clock.svg'
import Play from '../../../Assets/Imgs/play.svg'
const useStyles = makeStyles((theme) => ({
    ImgDiv: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    Img: {
        margin: 'auto 0',
        width: '22px',

    },
    para: {
        margin: 'auto 0',
        fontSize: '13px',
        marginLeft: '3px',
        color:'#5F5982'
    },

    innerDiv: {
        display: 'flex'
    }
}))

const RightSide = () => {
    const classes = useStyles();

    return (
        <div>

            <div className={classes.ImgDiv}>
                <div className={classes.foritems}>
                    <div className={classes.innerDiv} >
                        <img src={Star} className={classes.Img} />
                        <p className={classes.para}>4.5 (4.5 (1,348 ratings))</p>
                    </div>
                    <div className={classes.innerDiv} style={{
                        marginTop: '10px'
                    }}>
                        <img src={Clock} className={classes.Img} />
                        <p className={classes.para}>Duration 10 week</p>
                    </div>
                </div>
                <div className={classes.foritems} >
                    <div className={classes.innerDiv} >
                        <img src={Eye} className={classes.Img} />
                        <p className={classes.para}>Enrolled 45 students</p>
                    </div>
                    <div className={classes.innerDiv} style={{
                        marginTop: '10px'
                    }}>
                        <img src={Play} className={classes.Img} />
                        <p className={classes.para}>36 Lesion</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RightSide;
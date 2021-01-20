import { makeStyles } from '@material-ui/core';
import React from 'react';
import Facebook from '../../../Assets/Imgs/Faceboook.svg'
import Twitter from '../../../Assets/Imgs/twittter.svg'
import LinkedIn from '../../../Assets/Imgs/linkeedin.svg'
import Reddit from '../../../Assets/Imgs/reeddit.svg'
import WhatsApp from '../../../Assets/Imgs/whattsapp.svg'
import YouTube from '../../../Assets/Imgs/yooutube.svg'
import { Link } from 'react-router-dom';
import LastPart from './LastPart';


const useStyles = makeStyles({
    Main: {
        marginBottom: '20px'
    },
    subMain: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    innerDiv: {
        display: 'flex',
        padding: '8px 10px',
        paddingRight: '60px',
        cursor: 'pointer',
        backgroundColor: '#4761A6',
        borderRadius: '2px'
    },

    para: {
        margin: 'auto 10px',
        fontSize: '11px',
        color: 'white',
    },
    ImgDiv: {
        width: '26%'
    },
    link: {
        textDecoration: 'none'
    }
})

const BottomPart = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                <Link className={classes.link} to='/'>
                    <div className={classes.innerDiv}>

                        <img className={classes.ImgDiv} src={Facebook} />
                        <p className={classes.para}>Share</p>

                    </div>
                </Link>
                <div className={classes.innerDiv} style={{
                    backgroundColor: '#56B4F5'
                }}>
                    <img className={classes.ImgDiv} src={Twitter} />
                    <p className={classes.para}>Share</p>
                </div>
                <div className={classes.innerDiv} style={{
                    backgroundColor: '#3C82C0'
                }}>
                    <img className={classes.ImgDiv} src={LinkedIn} />
                    <p className={classes.para}>Share</p>
                </div>
                <div className={classes.innerDiv} style={{
                    backgroundColor: '#F54504'
                }}>
                    <img className={classes.ImgDiv} src={Reddit} />
                    <p className={classes.para}>Share</p>
                </div>
                <div className={classes.innerDiv} style={{
                    backgroundColor: '#54CC61'
                }}>
                    <img className={classes.ImgDiv} src={WhatsApp} />
                    <p className={classes.para}>Share</p>
                </div>
                <div className={classes.innerDiv} style={{
                    backgroundColor: '#D51000'
                }}>
                    <img className={classes.ImgDiv} src={YouTube} />
                    <p className={classes.para}>Share</p>
                </div>


            </div>
            <LastPart/>
        </div>
    );
};

export default BottomPart;
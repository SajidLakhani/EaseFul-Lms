import { Divider, makeStyles } from '@material-ui/core';
import React from 'react';
import Language from '../../../Assets/Imgs/language.svg'
import Desktop from '../../../Assets/Imgs/desktop.svg'
import Access from '../../../Assets/Imgs/access.svg'
import Instagram from '../../../Assets/Imgs/Instagram.svg'
import Facebook from '../../../Assets/Imgs/facebook1.svg'
import Twitter from '../../../Assets/Imgs/twitter1.svg'
import Reddit from '../../../Assets/Imgs/reddit.svg'
import Whatsapp from '../../../Assets/Imgs/whatsapp.svg'
import Linkedin from '../../../Assets/Imgs/linkedin.svg'
import Youtube from '../../../Assets/Imgs/youtube1.svg'
import Certificate from '../../../Assets/Imgs/completion.svg'
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    Main: {

    },
    subMain: {
        display: 'flex',
        margin:'10px 0px '
    },
    Img: {
        width: '20px',
        margin: "auto 0",
    },
    Text: {
        margin: 'auto',
        fontSize: '13px',
        marginLeft: '10px',
    },
    iconDiv:{
        display:'flex',
        justifyContent:'space-between'
    },

    divider:{
        width:'100%',
        marginTop:'20px',
        color:'#CAC6D4'
    },
    para:{
        fontSize:'13px'
    },
    link:{
        textDecoration:'none',
        color:'#F68C20'
    },
    Img:{
        width:'10%'
    }
}))
const BottomPart = () => {
    const classes = useStyles();
    const icons = [
        {
            icon:`${Instagram}`
        },
        {
            icon:`${Facebook}`
        },
        {
            icon:`${Whatsapp}`
        },
        {
            icon:`${Twitter}`
        },
        {
            icon:`${Linkedin}`
        },
        {
            icon:`${Youtube}`
        },
        {
            icon:`${Reddit}`
        },

    ]
    const data = [
        {
            image: `${Language}`,
            text: 'Language - English'
        },
        {
            image: `${Desktop}`,
            text: 'Use on desktop, tablet & mobile'
        },
        {
            image: `${Access}`,
            text: ' Full lifetime access'
        },
        {
            image: `${Certificate}`,
            text: ' Certificate of Completion'
        },
    ]
    return (
        <div className={classes.Main}>
            <h3>This course includes</h3>
            {data.map((item) => (
                <div className={classes.subMain}>
                    <img src={item.image} className={classes.Img} />
                    <p className={classes.Text}>{item.text} </p>
                </div>
            ))}

            <Divider className = {classes.divider}/>
            <div>
                <h4>
                Training 5 or more people?
                </h4>
                <p className = {classes.para}>
                Get your team access to 3,500+ top courses anytime, <Link className = {classes.link}> Contact our sale</Link>
                </p>
            </div>
            <Divider className = {classes.divider}/>
            <div>
                <h4>
                Share This Course
                </h4>
                <div className = {classes.iconDiv}>
                {icons.map((item) => (
                    <img src = {item.icon} className = {classes.Img}/>
                ))}
                </div>
            </div>


        </div>
    );
};

export default BottomPart;
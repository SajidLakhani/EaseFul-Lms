import { Avatar, Card, makeStyles } from '@material-ui/core';
import React from 'react';
import Blog from '../../../Assets/Imgs/blog.jpg'
import UX from '../../../Assets/Imgs/ux.jpg'
import Seo from '../../../Assets/Imgs/seo.jpg'
import Development from '../../../Assets/Imgs/dev.jpg'
const useStyles = makeStyles((theme) => ({
    Main:{
        marginTop:'30px'
    },

    card:{
        width:'23px',        
        height:'10vh'
    },

    avatar: {
        width: '100%',
        height: '230px',
        borderRadius:'unset'
    },

    subMain:{
        display:'flex',
        justifyContent:'space-between'
    }
}))

const BottomCards = () => {
    const classes = useStyles();
    return (
        <div className={classes.Main} >
            <div className = {classes.subMain}>
                <Card className = {classes.card}>
                {/* <Avatar className={classes.avatar} src={Blog} /> */}
                <div>
                    Sajid
                </div>
                </Card>
                
            
           
            </div>
            
        </div>
    );
};

export default BottomCards;
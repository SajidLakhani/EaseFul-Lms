import { makeStyles } from '@material-ui/core';
import React from 'react'
import Footer from '../../ReusableComponents/Footer/Footer';
import Header from '../../ReusableComponents/Header';
const useStyles = makeStyles({
    forBackground: {
        backgroundColor: '#FEF0EF',
        padding:'70px 0'
    },
    content:{
        display:'flex',
        width:'52%',
        margin:'auto',
        justifyContent:'space-between'
    },
    forall:{
        margin:'auto 0',
        color:'#302D3A'
    }
})

function NotFound() {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <div className = {classes.forBackground}>
                <div className = {classes.content}>
                    <h1 className = {classes.forall} style ={{fontWeight:'unset'}}>Page Not Found</h1>
                    <p className = {classes.forall}>Home / 404</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFound

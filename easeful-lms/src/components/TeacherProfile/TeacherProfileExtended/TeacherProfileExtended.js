import { Avatar, makeStyles } from '@material-ui/core'
import React from 'react'
import Footer from '../../../ReusableComponents/Footer/Footer';
import Header from '../../../ReusableComponents/Header';

const useStyles = makeStyles((theme) => ({
    Main:{
        backgroundColor:'#FEEFEE'
    },
    subMain:{
        width:'60%',
        margin:'auto',
        padding:'50px 0',
        display:'flex',
        justifyContent:'space-between'
    },
    bottomContentBackground:{
        backgroundColor:'#F1F3F8'
    },
    bottomContent:{
        width:'60%',
        margin:'auto',
        backgroundColor:'white',
        padding:'20px',
    }
    
}))
function TeacherProfileExtended() {
    const classes = useStyles();
    return (
        <>
        <Header/>
          <div className = {classes.Main}>
            <div className = {classes.subMain}>
                <h1 style ={{margin:'auto 0'}}>Teacher</h1>
                <p style ={{margin:'auto 0'}}>Home/Tecaher/TeacherProfile</p>
            </div>
        </div>
        <div className = {classes.bottomContentBackground}>
            <div className = {classes.bottomContent}>
                <div style ={{display:'flex' , justifyContent:'space-between'}}>
                    <Avatar/>
                    <div>Sajid</div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
      
    )
}

export default TeacherProfileExtended

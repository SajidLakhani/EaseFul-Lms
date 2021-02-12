import { Avatar, makeStyles } from '@material-ui/core'
import React from 'react'
import Footer from '../../../ReusableComponents/Footer/Footer';
import Header from '../../../ReusableComponents/Header';
import Farrah from '../../../Assets/Imgs/farrah.jpg'

const useStyles = makeStyles((theme) => ({
    Main: {
        backgroundColor: '#F1F3F8',
        width: '100%',
        height:'80vh'
    },
    subMain: {
        width: '60%',
        margin: 'auto',
        padding: '50px 0',
        display: 'flex',
        justifyContent: 'space-between'
    },
    bottomContent: {
        width: '60%',
        margin: 'auto',
        backgroundColor: 'white',
        padding: '22px',
    }

}))
function TeacherProfileExtended() {
    const classes = useStyles();
    return (
        <>
        <Header/>
        <div className={classes.Main}>
            <div style={{ backgroundColor: '#FEEFEE' ,height:'20vh' }}>
                <div className={classes.subMain}>
                    <h1 style={{ margin: 'auto 0' }}>Teacher</h1>
                    <p style={{ margin: 'auto 0' }}>Home/Tecaher/TeacherProfile</p>
                </div>
                <div className={classes.bottomContent}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Avatar src = {Farrah} />
                        <div>Sajid</div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    )
}

export default TeacherProfileExtended

import { Button, makeStyles } from '@material-ui/core';
import React from 'react'
import Footer from '../../ReusableComponents/Footer/Footer';
import Header from '../../ReusableComponents/Header';
import NotFoundImage from '../../Assets/Imgs/notfoundimage.svg'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    forBackground: {
        backgroundColor: '#FEF0EF',
        padding: '70px 0'
    },
    content: {
        display: 'flex',
        width: '52%',
        margin: 'auto',
        justifyContent: 'space-between'
    },
    forall: {
        margin: '0',
        color: '#302D3A'
    },
    forallpara: {
        margin: '0',
        color: '#5F5982'
    },
    button: {
        padding: '7px 15px',
        color: "white",
        margin: '10px 0',
        width: 'fit-content',
        fontSize: "11px",
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "#f56962",
        "&:hover": {
            backgroundColor: '#f56962',
        },
    },

    imageDiv: {
        width: '98%',
        textAlign: '-webkit-center',
        margin: '40px 0',
    }
})

function NotFound() {
    const classes = useStyles();
    return (
        <div>
            <Header />
            <div className={classes.forBackground}>
                <div className={classes.content}>
                    <h1 className={classes.forall} style={{ fontWeight: 'unset' }}>Page Not Found</h1>
                    <p className={classes.forallpara}>Home / 404</p>
                </div>
            </div>
            <div style={{
                textAlign: '-webkit-center',
                width:'60%',
                margin:'auto'
            }}>
                <h1 className={classes.forall} style={{ fontWeight: 'unset', margin:'30px 0' }}>Page Not Found</h1>
                <p style ={{margin:'20px 0'}} className={classes.forallpara}>The Page You Are Attempting To Reach Is Currently Not Available. This May Be Because The Page
                Does Not Exist Or Has Been Moved.</p>
                <Link style ={{textDecoration:'none'}} to = "/">
                <Button className={classes.button}>Back to Home</Button>
                </Link>
            </div>
            <div className={classes.imageDiv}>
                <img style={{ width: '50%' }} src={NotFoundImage} />
            </div>
            <Footer />
        </div>
    )
}

export default NotFound

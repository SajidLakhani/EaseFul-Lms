import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RoundClose from '../../../Assets/Imgs/RoundClose.svg'
import Fail from '../../../Assets/Imgs/fail.svg'
import { Button } from '@material-ui/core';
import PassImage from '../../../Assets/Imgs/pass.svg'
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        width: '18%',
        padding: '20px',
        fontFamily:'MyFirstFont'

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
}));

export default function PassAndFailModal({ handleClose, handleOpen, open, Pass }) {
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    {Pass ? <div className={classes.paper}>
                        <div style={{ width: '100%', textAlign: 'end' }}>
                            <img src={RoundClose} onClick={handleClose} style={{ width: '10%', cursor: 'pointer' }} />
                        </div>

                        <div style={{ textAlign: '-webkit-center' }}>
                            <img src={PassImage} style={{ width: '45%' }} />
                            <h1 style={{ color: '#43C8B1', fontSize: '35px', margin: '10px 0' }}>7/10</h1>
                            <p style={{ color: '#5F5982', fontSize: '13px', margin: '10px 0' }}>You have done a great attempt, try another course  and level up your skills & knowledge</p>
                            <Button style={{ backgroundColor: '#43C8B1' }} className={classes.button}>Start next course</Button>
                        </div>
                    </div> :
                        <div className={classes.paper}>
                            <div style={{ width: '100%', textAlign: 'end' }}>
                                <img src={RoundClose} onClick={handleClose} style={{ width: '10%', cursor: 'pointer' }} />
                            </div>

                            <div style={{ textAlign: '-webkit-center' }}>
                                <img src={Fail} style={{ width: '45%' }} />
                                <h1 style={{ color: '#FF5A58', fontSize: '35px', margin: '10px 0' }}>4/10</h1>
                                <p style={{ color: '#5F5982', fontSize: '13px', margin: '10px 0' }}>You have done a great attempt, try another course  and level up your skills & knowledge</p>
                                <Button className={classes.button}>Review this course again</Button>
                            </div>
                        </div>}

                </Fade>
            </Modal>
        </div>
    );
}
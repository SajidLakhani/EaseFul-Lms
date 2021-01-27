import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RoundCancle from '../../../Assets/Imgs/RoundClose.svg'
import BottomFields from './BottomFields';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#FFFFFF',
    width: '28%',
    margin: 'auto',
    height: 'fit-content',
    fontFamily:'MyFirstFont'
  },
  Main: {
    padding: '30px'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  img: {
    margin: 'auto 0px',
    width: '6%',
    cursor:'pointer'
  },
  para: {
    margin: 'auto 0px',
    fontSize: '16px',
    fontFamily: 'inherit',
    fontWeight:'bold'
  }
}));

export default function DiscussionModal({ handleClose, open }) {
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
          <div className={classes.paper}>
            <div className={classes.Main}>
              <div className={classes.content}>
                <p className={classes.para}>Discuss with Teacher</p>
                <img onClick = {handleClose} className={classes.img} src={RoundCancle} />
              </div>
              <BottomFields/>
            </div>
           
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Adobe from '../../../Assets/Imgs/adobe.jpg'
import Save from '../../../Assets/Imgs/save.svg'
import Discussion from '../../../Assets/Imgs/discussion.svg'
import DownloadIcon from '../../../Assets/Imgs/downloadIcon.svg'
import Calender from '../../../Assets/Imgs/calender.svg'
import { Divider} from '@material-ui/core';
import ContentSection from './ContentSection';
import ReactPlayer from 'react-player'
import FeedBackSection from '../FeedBackSection/FeedBackSection';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '600px',
        borderRadius: 'unset'
    },

    media: {
        height: '100%'
    },

    Main: {
        display: 'flex',
        width: '95%',
        margin: '20px auto',
        justifyContent: 'space-between'
    },

    innerDiv: {
        display: 'flex',

    },
    contentDiv: {
        display: 'flex',
        backgroundColor: '#d5f5ef',
        borderRadius: '5px',
        padding: '6px 17px',
    },

    para: {
        margin: 'auto 10px',
        color: '#5ED0BC',
        fontWeight: 'bold',
        fontSize: '12px'
    }

});

export default function BottomPart() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Card className={classes.root}>

            <ReactPlayer width='100%'
            height='100%'
            controls
            className = {classes.media} url='https://www.youtube.com/watch?v=14O7AxqjiVY' />

            </Card>

            <div className={classes.Main}>
                <div className={classes.innerDiv} >
                    <div className={classes.contentDiv} style={{ marginRight: '15px' }}>
                        <img src={Save} />
                        <p className={classes.para}>Save note</p>
                    </div>
                    <div className={classes.contentDiv} style={{ backgroundColor: "#FEF9E5", marginRight: '15px' }}>
                        <img src={Discussion} />
                        <p className={classes.para} style={{ color: "#F68C20" }} >Discussion</p>
                    </div>
                    <div className={classes.contentDiv} style={{ backgroundColor: '#FEEFEE', marginRight: '15px' }}>
                        <img src={Calender} />
                        <p className={classes.para} style={{ color: '#F56962' }}>Add to calendar</p>
                    </div>
                    <div className={classes.contentDiv} style={{ backgroundColor: '#dedcff', marginRight: '15px' }}>
                        <img src={DownloadIcon} />
                        <p className={classes.para} style={{ color: '#6C63FF' }}>Download</p>
                    </div>

                </div>
                <div className={classes.innerDiv}>
                    {/* <div className={classes.contentDiv} style={{ backgroundColor: '#dedcff', marginRight: '15px' }}>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Open Menu
      </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div> */}
                    <div className={classes.contentDiv} style={{ backgroundColor: '#FEEFEE' }}>

                        <p className={classes.para} style={{ color: '#F56962' }}>Refer & Earn</p>
                    </div>
                </div>
            </div>
            <Divider style = {{
                width:'95%',
                margin:'auto'
            }}
            />
            <ContentSection/>
            <FeedBackSection/>
        </>
    );
}
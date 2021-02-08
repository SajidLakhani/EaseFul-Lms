import { makeStyles } from '@material-ui/core'
import React from 'react'
import Save from '../../Assets/Imgs/save.svg'
import Discussion from '../../Assets/Imgs/discussion.svg'
import DownloadIcon from '../../Assets/Imgs/downloadIcon.svg'
import Calender from '../../Assets/Imgs/calender.svg'
import DiscussionModal from '../../components/CourseFullView/Modal/DiscussionModal'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({

    Main: {
        display: 'flex',
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
        height:'fit-content',
        padding: '10px 17px',
    },

    para: {
        margin: 'auto 10px',
        color: '#5ED0BC',
        fontWeight: 'bold',
        fontSize: '12px',
        cursor: 'pointer'
    }

})

function CourseViewButtons({width}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    return (
        <>
            <div className={classes.Main} style ={{width:`${width}`}}>
                <div className={classes.innerDiv} >
                    <div className={classes.contentDiv} style={{ marginRight: '15px' }}>
                        <img src={Save} />
                        <p className={classes.para}>Save note</p>
                    </div>
                    <div className={classes.contentDiv} style={{ backgroundColor: "#FEF9E5", marginRight: '15px' }}>
                        <img src={Discussion} style ={{width:'14%'}}/>
                        <p className={classes.para} style={{ color: "#F68C20" }} onClick={handleOpen} >Discussion</p>
                    </div>
                    <div className={classes.contentDiv} style={{ backgroundColor: '#FEEFEE', marginRight: '15px' }}>
                        <img src={Calender} style = {{width:'12%'}}/>
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
                    <Link to = '/refer' className={classes.contentDiv} style={{ backgroundColor: '#FEEFEE', textDecoration:'none' }}>
                        <p className={classes.para} style={{ color: '#F56962' }}>Refer & Earn</p>
                    </Link>
                </div>

            </div>
            <DiscussionModal handleClose={handleClose} handleOpen={handleOpen} open={open} />
        </>

    )
}

export default CourseViewButtons

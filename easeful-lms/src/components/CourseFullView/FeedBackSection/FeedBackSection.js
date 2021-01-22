import { Avatar, makeStyles } from '@material-ui/core'
import React from 'react'
import Happy from '../../../Assets/Imgs/happy.jpg'
import RatingsComponent from '../../HomePage/SixthSection/RatingsComponent';

const useStyles = makeStyles({
    Main: {
        width: '95%',
        margin: '30px  auto',
        backgroundColor: '#ccf0fb'
    },
    subMain: {
        padding: '20px'
    },
    heading: {
        margin: 'auto 0',
        color: '#302D3A'
    },
    insideDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '15px 0'
    },
    avatar: {
        margin: 'auto',
        borderRadius: 'unset',
        width: '50px',
        height: '50px',
    },

    contentDiv: {
        margin: 'auto 25px',
    },
    paraOne: {
        margin: 'auto 0',
        fontWeight: 'bold',
        fontSize: '13px',
        color: '#302D3A',
    },
    paraTwo: {
        margin: '3px 0',
        fontSize: '11px',
        color: '#5F5982',
    }


})

function FeedBackSection() {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                <h3 className={classes.heading}>Student feedback</h3>
                <div className={classes.insideDiv}>
                    <div style={{ display: 'flex' }}>
                        <Avatar src={Happy} className={classes.avatar} />
                        <div className={classes.contentDiv}>
                            <p className={classes.paraOne}>Wynton McCurdy</p>
                            <p className={classes.paraTwo}>18 courses, <span>10 reviews</span></p>
                        </div>
                    </div>
                    <div>
                        <RatingsComponent />
                        {/* <p className={classes.paraTwo}>a month ago</p> */}
                    </div>
                </div>
                <div>
                    <p style={{ textAlign: 'justify' }} className={classes.paraTwo}>
                        This course is really excellent for people with basic knowledge of piano. The teacher provides a good technique and way for you to motivate yourself and out
                        the course. Highly recommended.This course is really excellent for people with basic knowledge of piano. The teacher provides a good technique and way for
                        you to motivate yourself and out
                </p>
                </div>
            </div>

        </div>
    )
}

export default FeedBackSection

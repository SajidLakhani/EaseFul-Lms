import { makeStyles } from '@material-ui/core';
import React from 'react'
import BackIcon from '../../../Assets/Imgs/Back.svg'
import ProgressBar from './ProgressBar'
import SearchField from './SearchField';
import Book from '../../../Assets/Imgs/coursebook.svg'
const useStyles = makeStyles((theme) => ({
    Main: {
        backgroundColor: '#F56962'
    },

    forback: {
        display: 'flex',

    },
    subMain: {
        padding: '20px 30px',

    },
    image: {
        width: '13%',
        margin: 'auto 0',
        cursor: 'pointer'
    },
    para: {
        margin: 'auto 10px',
        fontSize: '12px',
        color: 'white',
    },
    head: {
        margin: '25px auto',
        color: 'white',
        fontWeight: 'unset'
    },
    content: {
        padding: '15px 25px'
    }
}))

function SideBar() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.Main}>
                <div className={classes.subMain}>
                    <div className={classes.forback}>
                        <img src={BackIcon} className={classes.image} />
                        <p className={classes.para}>Back</p>
                    </div>
                    <h1 className={classes.head}>Learn Adobe XD
& Prototyping</h1>

                </div>

            </div>
            <ProgressBar />
            <SearchField />
            <div className={classes.content}>
                <h4 style={{ margin: '10px 0' }}>Change simplification</h4>
            </div>
            {/* <div className={classes.color}>
                    <div>
                        <img src={Book} />
                        <p>Lesson 02: Introducation about xd</p>
                        <div>
                            <p>30 min</p>
                        </div>
                    </div>
                </div> */}
        </>

    )
}

export default SideBar

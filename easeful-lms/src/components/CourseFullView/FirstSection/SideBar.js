import { makeStyles } from '@material-ui/core';
import React from 'react'
import BackIcon from '../../../Assets/Imgs/Back.svg'
import ProgressBar from './ProgressBar'
import SearchField from './SearchField';
import Book from '../../../Assets/Imgs/coursebook.svg'
import PurpleBook from '../../../Assets/Imgs/purpleBook.svg'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    Main: {
        backgroundColor: '#F56962'
    },

    forback: {
        display: 'flex',

    },
    forList: {
        margin: '0 10px',
        cursor: 'pointer'
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
        fontSize:'28px',
        fontWeight: 'unset'
    },
    content: {
        margin: '25px 25px'
    },
    innerDiv: {
        display: 'flex',
        padding: '10px',
    },

    color: {
        backgroundColor: '#F4F9FD',
        margin: '10px 0'
    },
    image: {
        width: '7%'
    },
    Firstpara: {
        fontSize: '12px',
        margin: 'auto 5px',
        color: '#5F5982',
    },
    Secondpara: {
        fontSize: '12px',
        margin: 'auto',
        padding: '3px',
        color: '#6C63FF',
        fontWeight: 'bold',
    },
    paracustomize: {
        backgroundColor: '#EDF0FD',
        margin: 'auto',
    }
}))

function SideBar() {
    const classes = useStyles();
    const data = [
        {
            heading: 'Change Simplification'
        },
        {
            heading: 'Key Skills for the Job Search'
        },
        {
            heading: 'Additional Exercises '
        },
        {
            heading: 'Entering the Job Market'
        },
        {
            heading: 'PRACTICE QUIZ'
        },
        {
            heading: 'Professor for a Day Simulation'
        },
        {
            heading: 'Customer ux Case Studies'
        },
    ]
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
            {data.map((item) => (
                <>
                    <div className={classes.content}>
                        <h3 style={{ margin: '10px 0' }}>{item.heading}</h3>
                    </div>
                    <div className={classes.forList}>
                        <div className={classes.color}>
                        <Link to = "/courseview-2" style ={{textDecoration:'none'}}>
                            <div className={classes.innerDiv}>
                                
                                <img src={PurpleBook} className={classes.image} />
                                <p className={classes.Firstpara}>Lesson 02: Introducation about xd</p>
                                <div className={classes.paracustomize}>
                                    <p className={classes.Secondpara}>30 min</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className={classes.color} style={{ backgroundColor: '#FEF9E5' }}>
                            <div className={classes.innerDiv}>
                                <img src={Book} className={classes.image} />
                                <p className={classes.Firstpara}>Lesson 02: Introducation about xd</p>
                                <div className={classes.paracustomize} style={{ backgroundColor: '#ffedec' }}>
                                    <p className={classes.Secondpara} style={{ color: '#F56962' }}>30 min</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.color} style={{ backgroundColor: '#F4F9FD' }}>
                            <div className={classes.innerDiv}>
                                <img src={Book} className={classes.image} />
                                <p className={classes.Firstpara}>Lesson 02: Introducation about xd</p>
                                <div className={classes.paracustomize} style={{ backgroundColor: '#ffedec' }}>
                                    <p className={classes.Secondpara} style={{ color: '#F56962' }}>30 min</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.color} style={{ backgroundColor: '#FEEFEE' }}>
                            <div className={classes.innerDiv}>
                                <img src={Book} className={classes.image} />
                                <p className={classes.Firstpara}>Lesson 02: Introducation about xd</p>
                                <div className={classes.paracustomize} style={{ backgroundColor: '#ffedec' }}>
                                    <p className={classes.Secondpara} style={{ color: '#F56962' }}>30 min</p>
                                </div>
                            </div>
                        </div>
                    </div></>
            ))}


        </>

    )
}

export default SideBar

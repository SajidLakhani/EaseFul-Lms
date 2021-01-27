import { makeStyles } from '@material-ui/core'
import React from 'react'
import TopSection from './TopSection'

const useStyles = makeStyles({
    Main: {
        backgroundColor: '#F6F7FB',
    },
    subMain: {

        width: '90%',
        margin: 'auto'
    }
})

function CourseViewSecond() {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div className={classes.subMain}>
                <TopSection />
            </div>

        </div>
    )
}

export default CourseViewSecond

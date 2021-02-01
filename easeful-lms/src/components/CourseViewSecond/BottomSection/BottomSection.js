import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Player from '../../../ReusableComponents/Player/Player';
import CourseViewButtons from '../../../ReusableComponents/CourseViewButtons/CourseViewButtons';
import LessonLearn from '../../../ReusableComponents/LessonLearn/LessonLearn';

const useStyles = makeStyles((theme) => ({
root:{
    display:'flex'
}
}))

function BottomSection() {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3}className = {classes.root}>
                <Grid item xs={9}>
                   <Player Height = '720px' BorderRadius = '15px'/>
                   <CourseViewButtons width = '100%'/>
                </Grid>
                <Grid item xs={3}>
                   <LessonLearn/>
                </Grid>
            </Grid>
        </div>
    )
}

export default BottomSection

import { makeStyles } from '@material-ui/core';
import React from 'react'
import Back from '../../Assets/Imgs/PurpleBack.svg'
import SearchField from '../CourseFullView/FirstSection/SearchField';

const useStyles = makeStyles({
    Main:{
       display:'flex'
    }
})

function TopSection() {
    const classes = useStyles();
    return (
        <div className = {classes.Main}>
            <img src = {Back}/>
            <div>
                <h3>UIUX Design Conference Meeting</h3>
                <p>9 lesson  <span>6h 30 min</span></p>
            </div>
            <SearchField/>

        </div>
    )
}

export default TopSection

import { Divider, makeStyles } from '@material-ui/core'
import React from 'react'
import ForHeadAndText from '../../ReusableComponents/ForHeadAndText/ForHeadAndText';
import BottomSection from './BottomSection'

const useStyles = makeStyles((theme) => ({
    Main: {
        width: '95%',
        margin: '40px auto',
    },
    subMain:{
        background:'white',
        margin:'40px 0',
        padding:'20px 25px'
    },
    same:{
        margin: 0 ,
        color:'#5F5982'
    }
}))
function Event() {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <ForHeadAndText text='User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time your the cost of any additional seats are prorated. User access can be revoked only when a user leaves the. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated. User access can be revoked only when a user . That user’s seat can then be re-assigned to a new employee. User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to You can add seats at any time throughout your contract and the cost of any additional seats are prorated.'
                head='Create new event' />
                <div className = {classes.subMain}>
                    <div style ={{display:'flex' , justifyContent: 'space-between'}}>
                        <h3 className = {classes.same}>Create EVENTS</h3>
                        <p className = {classes.same}>You can choose your calendar</p>
                    </div>
                    <Divider style={{margin:'15px 0'}}
            />
            <BottomSection/>
                </div>
        </div>
    )
}

export default Event

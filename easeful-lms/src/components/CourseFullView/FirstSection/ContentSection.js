import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    Main: {
        width: '95%',
        margin: 'auto'
    },

    subMain: {
        marginTop:'40px'
    },

    head: {
        color: '#302D3A'
    },
    para: {
        color: '#5F5982',
        fontSize: '13px'
    }
})

function ContentSection() {
    const classes = useStyles();
    const paragraph = 'User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time your the cost of any additional seats are prorated. User access can be revoked only when a user leaves the. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated. User access can be revoked only when a user . That user’s seat can then be re-assigned to a new employee. User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to You can add seats at any time throughout your contract and the cost of any additional seats are prorated. User access can be revoked only when a user hat user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated. User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. '


    const data = [
        {
            heading:'Overview of the Unit',
        },
        {
            heading:'Who this course is for:'
        },
        {
            heading:'Achievable'
        },
    ]
    return (
        <div className={classes.Main}>
            {data.map((item)=>(
                <div className={classes.subMain}>
                <h1 className={classes.head}>{item.heading}</h1>
                <p className={classes.para}>{paragraph}</p>
            </div>
            ))}
            
        </div>
    )
}

export default ContentSection

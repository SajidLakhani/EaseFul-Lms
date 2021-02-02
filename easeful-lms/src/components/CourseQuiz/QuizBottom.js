import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    Main: {
        width: '95%',
        margin: '40px auto'
    }
}))

function QuizBottom() {
    const classes = useStyles();
    return (
        <div className={classes.Main}>
            <div>
                <h1 style={{ color: '#302D3A', fontWeight: 'unset', fontSize: '35px' }}>Quiz For learn </h1>
                <p style={{ color: '#5F5982' }}>User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time your the cost of any additional seats are prorated. User access can be revoked only when a user leaves the. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated. User access can be revoked only when a user . That user’s seat can then be re-assigned to a new employee. User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to You can add seats at any time throughout your contract and the cost of any additional seats are prorated.</p>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    Sajid
        </Grid>
                <Grid item xs={6}>
                    Lakhani
        </Grid>
            </Grid>
        </div>
    )
}

export default QuizBottom

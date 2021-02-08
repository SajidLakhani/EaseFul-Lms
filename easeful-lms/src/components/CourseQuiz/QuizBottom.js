import { Button, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import ForHeadAndText from '../../ReusableComponents/ForHeadAndText/ForHeadAndText';
import PassAndFailModal from './QuizModal/PassAndFailModal'
const useStyles = makeStyles((theme) => ({
    Main: {
        width: '95%',
        margin: '40px auto'
    },
    gridcontainer: {
        border: '2px solid #F56962',
        textAlign: 'center',
        color: '#F56962',
        margin: '40px 0px',
        backgroundColor: '#FEEFEE',
        borderStyle: 'dashed',
        padding: '10px 0',
        fontWeight: 'bold'
    },

    questionsDiv: {
        backgroundColor: '#edeef1',
        padding: '25px',
    },
    questionHead: {
        color: '#302D3A',
        fontWeight: 'bold',
        margin: 'auto 0',
        fontSize: '20px',
    },
    options: {
        color: '#5F5982',
        border: '1px solid #707070',
        backgroundColor: '#f5f5f5',
        padding: '10px 15px',
        margin: '20px 0',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: '#F68C20',
            color: 'white'
        },

    },
    buttondiv: {
        margin: '30px 0',
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        padding: '8px 20px',
        color: "white",
        margin: 'auto 0',
        width: 'fit-content',
        fontSize: "12px",
        fontFamily: 'inherit',
        textTransform: "unset",
        backgroundColor: "#f56962",
        "&:hover": {
            backgroundColor: '#f56962',
        },
    },
}))

function QuizBottom() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    const data = [
        {
            option: 'The Canvas can have zero, one or more Artboards placed on it'
        },
        {
            option: 'Imagine the canvas is a table and each artboard is a sheet of paper. '
        },
        {
            option: 'You can organize the artboards on the canvas the same way as you can organize .'
        },
        {
            option: 'All above'
        },

    ]
    return (
        <div className={classes.Main}>
            <ForHeadAndText text = 'User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time your the cost of any additional seats are prorated. User access can be revoked only when a user leaves the. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated. User access can be revoked only when a user . That user’s seat can then be re-assigned to a new employee. User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to You can add seats at any time throughout your contract and the cost of any additional seats are prorated.'
                            head = 'Quiz For learn'/>
            <Grid container className={classes.gridcontainer}>
                <Grid className={classes.childgrid} item xs={6}>
                    <p style={{ margin: '0' }}>1/1 Question</p>
                </Grid>
                <Grid className={classes.childgrid} item xs={6}>
                    <p style={{ margin: '0' }}>0:57:17 Timing</p>
                </Grid>
            </Grid>
            <div className={classes.questionsDiv}>
                <p className={classes.questionHead}>What is a difference between Canvas and Artboard in Adobe XD?</p>
                {data.map((item) => (
                    <p className={classes.options}>{item.option}</p>
                ))}

            </div>
            <div className={classes.buttondiv}>
                <Button className={classes.button} style={{ backgroundColor: 'rgb(254, 249, 229)', color: '#5F5982' }} onClick={handleOpen}>Quiz preview : new Interview</Button>
                <Button className={classes.button} onClick={handleOpen}>Quiz next : Short Interview</Button>
            </div>
            <PassAndFailModal handleClose = {handleClose} handleOpen = {handleOpen} open = {open} Pass = {true}/>
        </div>
    )
}

export default QuizBottom

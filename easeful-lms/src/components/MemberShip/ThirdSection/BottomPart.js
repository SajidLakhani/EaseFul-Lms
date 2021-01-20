import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

    },
    Main: {

        boxShadow: 'unset',
        marginBottom: '20px',

        "&.MuiAccordion-root:before": {
            backgroundColor: "white"
          },

          "&.MuiAccordion-root.Mui-expanded":{
              background:'#EFEFF6'
          }

    },
    content: {
        color: '#5F5982',
        margin: 'auto 0'
    },

    icon:{
        fill:'#5F5982'
    }
}));

export default function BottomPart() {
    const classes = useStyles();

    const data = [
        {
            head: 'Which Skillfy for Teams plan is right for me?',
            text: 'User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated. User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated.'
        },
        {
            head: 'Can we work together?',
            text: 'User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated. User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated.'
        },
        {
            head: 'Can I remove or add seats throughout my contract? ',
            text: 'User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated. User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated.'
        },
        {
            head: 'Do you offer bulk pricing?',
            text: 'User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated. User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated.'
        },
        {
            head: 'Does the Team Admin seat count towards my plan’s seat count? ',
            text: 'User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated. User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated.'
        },
        {
            head: 'Do you work with non-profits and schools?',
            text: 'User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated. User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated.'
        },

    ]

    return (
        <div className={classes.root}>
            {data.map((item) => (
                <Accordion className={classes.Main}>
                    <AccordionSummary className={classes.summary}
                        expandIcon={<ExpandMoreIcon className = {classes.icon}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <h4 className={classes.content}>{item.head}</h4>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <Typography className={classes.content} style={{
                            fontSize: '14px',
                            width:'95%'
                        }}>
                            {item.text}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}


        </div>
    );
}
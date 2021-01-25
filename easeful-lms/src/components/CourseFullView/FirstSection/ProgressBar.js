import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function LinearProgressWithLabel(props) {
    return (
        <Box display="block" alignItems="center">
            <Box textAlign='center' style={{ margin: '2px 0px', color: 'white' }}>
                <Typography style={{ color: 'white', fontSize: '10px', fontFamily: 'inherit' }} variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`} Complete</Typography>
            </Box>
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>

        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '-24px',
         "& .MuiLinearProgress-colorPrimary":{
            backgroundColor:'unset',
            height:'6px'
        }
    },
    bar: {
        "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: '#43C8B1'
        },

       
    }
});

export default function LinearWithValueLabel() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 1 : prevProgress + 1));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
            <LinearProgressWithLabel className={classes.bar} value={progress} />
        </div>
    );
}
import React from 'react'
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

function Player({ Height, BorderRadius }) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} style={{
                height: `${Height}`,
                borderRadius: `${BorderRadius}`
            }}>

                <ReactPlayer width='100%'
                    height='100%'
                    controls
                    pip='true'
                    stopOnUnmount='false'
                    className={classes.media} url='https://www.youtube.com/watch?v=14O7AxqjiVY' />
            </Card>
        </div>
    )
}

export default Player

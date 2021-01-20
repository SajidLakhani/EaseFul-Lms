import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import University from '../../../Assets/Imgs/university.jpg'

const useStyles = makeStyles({
    root: {
        width: '450px',
        margin: 'auto 0',
        height: '330px',
        boxShadow: 'unset',
        borderRadius: '10px'
    },
    media: {
        height: '100%',
        backgroundPosition: 'center',
    
    },
});

export default function RightSide() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={University}
                        title="Image"
                    />
                </Card>
  );
}
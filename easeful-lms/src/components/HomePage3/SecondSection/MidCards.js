import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Photo from '../../../Assets/Imgs/photo.jpg'
import Business from '../../../Assets/Imgs/forBack.jpg'
import IT from '../../../Assets/Imgs/it.jpg'
import Development from '../../../Assets/Imgs/deve.jpg'
import Marketing from '../../../Assets/Imgs/marketing.jpg'
import Photography from '../../../Assets/Imgs/photography.jpg'
import Health from '../../../Assets/Imgs/health.jpg'
import Technology from '../../../Assets/Imgs/technology.jpg'

const useStyles = makeStyles({
  root: {
    width: '180px',
    padding: '15px',
    height: '185.5px',
    borderRadius:'10px',
    marginLeft:'30px'
  },
  media: {
    height: 145,
    borderRadius:'inherit'
  },
  Main:{
    display:'flex',
    marginTop: '35px',
    justifyContent: 'center',
    paddingBottom:'30px'
  },
  para:{
    textAlign: 'center',
    fontSize: '17px',
    color: '#302d3a',
  }
});

export default function MidCards() {

  const data = [
    {
      name: 'Design',
      image: `${Photo}`
    },
    {
      name: 'Development',
      image: `${Development}`
    },
    {
      name: 'IT & Software',
      image: `${IT}`
    },
    {
      name: 'Business',
      image: `${Business}`
    },
    

  ]

  const data2 = [
    {
      name: 'Marketing',
      image: `${Marketing}`
    },
    {
      name: 'Photography',
      image: `${Photography}`
    },
    {
      name: 'Health Care',
      image: `${Health}`
    },
    {
      name: 'Technology',
      image: `${Technology}`
    },
    

  ]
  const classes = useStyles();

  return (
    <div>
    <div className = {classes.Main}>
      {data.map((item) => (
         <Card className={classes.root}>

         <CardMedia
           className={classes.media}
           image={item.image}
           title="Courses"
         />
 
      <p className = {classes.para}>{item.name}</p>
      
     </Card>
      ))}
   
    </div>
    <div className = {classes.Main}>
      {data2.map((item) => (
         <Card className={classes.root}>

         <CardMedia
           className={classes.media}
           image={item.image}
           title="Courses"
         />
 
      <p className = {classes.para}>{item.name}</p>
      
     </Card>
      ))}
   
    </div>
    </div>
  );
}
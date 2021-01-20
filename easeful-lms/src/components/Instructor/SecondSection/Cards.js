import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Instructor from '../../../Assets/Imgs/instructor2.jpg'
import InstructorTwo from '../../../Assets/Imgs/instructor3.jpg'
import InstructorThree from '../../../Assets/Imgs/instructor4.jpg'
import InstructorFour from '../../../Assets/Imgs/instructor5.jpg'
import Star from '../../../Assets/Imgs/Star.svg'

const useStyles = makeStyles({
    Main: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    subMain: {
        width: '23%'
    },

    root: {

    },
    media: {
        height: '250px',
    },

    contentDiv: {

        display: "flex",
        justifyContent: 'space-between'
    },
    InnerDiv: {
        display: 'flex',
        margin: '10px 0'
    },

    para: {
        margin: 'auto 0',
        fontSize: '13px',
        color: '#5F5982'
    },
    Img: {
        width: '22%',
        marginRight: '5px'
    }
});

export default function Crads() {
    const classes = useStyles();
    const Images = [
        {
            image: `${Instructor}`
        },
        {
            image: `${InstructorTwo}`
        },
        {
            image: `${InstructorThree}`
        },
        {
            image: `${InstructorFour}`
        },

    ]

    return (
        <div className={classes.Main}>
            {Images.map((item) => (

                <div className={classes.subMain}>
                    <Card className={classes.root}>

                        <CardMedia
                            className={classes.media}
                            image={item.image}
                            title="Image"
                        />
                    </Card>

                    <div className={classes.contentDiv}>
                        <p className={classes.para}>Yamilet Booker</p>
                        <div className={classes.InnerDiv}>
                            <img className={classes.Img} src={Star} />
                            <p className={classes.para}>4.5<span className={classes.span}>(120)</span></p>
                        </div>
                    </div>
                </div>


            ))}

        </div>
    )
}

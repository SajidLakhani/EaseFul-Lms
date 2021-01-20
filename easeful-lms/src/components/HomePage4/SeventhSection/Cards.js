import React from 'react';
import { makeStyles, Card, Avatar } from '@material-ui/core';
import PersonOne from '../../../Assets/Imgs/person1.jpg'
import PersonTwo from '../../../Assets/Imgs/person2.jpg'
import PersonThree from '../../../Assets/Imgs/person3.jpg'
import Twitter from '../../../Assets/Imgs/bluetwitter.svg'
import { Link } from 'react-router-dom';
import PersonFour from '../../../Assets/Imgs/sajid.jpg'

const useStyles = makeStyles((theme) => ({
    main: {
        width: '65%',
        margin: 'auto',
        paddingTop:'40px',
        paddingBottom:'150px'
    },
    cardInnerDiv: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    cardHead: {
        margin: 0
    },

    cardPara: {
        margin: 0,
        fontSize: '12px'
    },

    IconAvatar: {
        borderRadius: 'unset'
    },
    root: {
        width: '28%',
        padding: '10px 15px',
        marginRight: '15px',
        marginTop: '15px'
    },
    link: {
        textDecoration: 'none',
        color: '#4098ff'
    },
    head: {
        marginBottom: '40px',
        color: '#302d3a'
    },
    CardDiv: {
        display: 'flex',
        flexWrap: 'wrap'
    }
}))

const Cards = () => {
    const data = [
        {
            image: `${PersonOne}`,
            name: 'Jonath',
            designation: 'CEO at Madbrains',
            message: 'Skillfy is a life saver. I don’t have the money for a college education. Platform ',
            link: '@Skillfy'
        },
        {
            image: `${PersonTwo}`,
            name: 'Rovid',
            designation: 'Co Founder at Easeful',
            message: 'Skillfy is a life saver. I don’t have the money for a college education. Platform ',
            link: '@Skillfy'
        },
        {
            image: `${PersonThree}`,
            name: 'Sajid',
            designation: 'React Developer',
            message: 'Skillfy is a life saver. I don’t have the money for a college education. Platform ',
            link: '@Skillfy'
        },

    ]
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <h2 className={classes.head}>
                What our students have to say
            </h2>
            <div className={classes.CardDiv}>
                {data.map(item => (
                    <Card className={classes.root}>
                        <div className={classes.cardInnerDiv}>

                            <Avatar alt="Remy Sharp" src={item.image} />


                            <div>
                                <h3 className={classes.cardHead}>{item.name}</h3>
                                <p className={classes.cardPara}>{item.designation}</p>
                            </div>

                            <Avatar className={classes.IconAvatar} alt="Remy Sharp" src={Twitter} />
                        </div>

                        <p>{item.message}<Link to='/' className={classes.link}>{item.link}</Link></p>

                    </Card>
                ))}

            </div>

        </div>
    );
};

export default Cards;
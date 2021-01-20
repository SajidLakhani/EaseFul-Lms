import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';

import Blog from '../../Assets/Imgs/blo.jpg'
import { Avatar } from '@material-ui/core'
import Eye from '../../Assets/Imgs/eye.svg'
import Guy from '../../Assets/Imgs/pent.jpg'
import BookMark from '../../Assets/Imgs/bookmark.svg'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    Main: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px'
    },
    root: {
        width: '46%'
    },
    media: {
        height: 250,
    },
    action: {
        padding: '15px'
    },
    flexDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px'
    },
    innerDiv: {
        display: 'flex'
    },

    para: {
        margin: 'auto',
        marginLeft: '8px',
        color: '#5F5982',
        fontWeight: 'bold',
        fontSize: '13px'
    },

    avatar: {
        width: '30px',
        height: '30px',
        borderRadius: 'unset'
    },
    Content: {
        fontSize: '14px',
        color: '#5F5982'
    },
    head: {
        color: '#302D3A',
        margin: 'auto 0px'
    },
    imgDiv: {
        width: '7%',
        margin: 'auto 0'
    },
    link: {
        textDecoration: 'unset'
    }
});

export default function BottomCards() {
    const classes = useStyles();

    return (
        <div className={classes.Main}>
            {[1, 2].map((el) => (

                <Card className={classes.root}>
                    <div className={classes.action}>
                        <Link className={classes.link} to='/blogdetails'>
                            <CardMedia
                                className={classes.media}
                                image={Blog}
                                title="Image"
                            />

                            <h3 style={{
                                marginTop: '10px'
                            }} className={classes.head}>3 Clear Warnings That Say Your Goals Are
Too Small</h3>
                            <div className={classes.flexDiv}>
                                <div className={classes.innerDiv}>
                                    <Avatar className={classes.avatar} src={Guy} />
                                    <p style={{
                                        color: '#7A7A7A'
                                    }} className={classes.para}>Nicole Brown</p>
                                </div>
                                <div className={classes.innerDiv}>
                                    <img src={Eye} />
                                    <p className={classes.para}>28,500</p>
                                </div>
                            </div>
                            <p className={classes.Content}>Data thieves: Names, email and postal addresses, bank and is confidential business these are prime examples of valuable & data. Many threat actors specialize in extracting this, to use themselves or to sell on to others.
</p>

                            <div className={classes.flexDiv}>
                                <h3 className={classes.head}>Read More</h3>
                                <img className={classes.imgDiv} src={BookMark} />
                            </div>
                        </Link>

                    </div>

                </Card>
            ))}



        </div>

    );
}
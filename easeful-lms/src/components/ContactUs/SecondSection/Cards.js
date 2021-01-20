import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Card } from '@material-ui/core';
import NewYork from '../../../Assets/Imgs/new.jpg'
import Location from '../../../Assets/Imgs/locIcon.svg'
import BlueLocation from '../../../Assets/Imgs/blueloc.svg'
import Turkey from '../../../Assets/Imgs/turkey.jpg'

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '50px 0'
    },

    root: {
        marginTop: '50px'
    },

    Main: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    media: {
        height: '320px',
    },

    textDiv: {
        width: '55%',
        backgroundColor: '#F5F5F5',

    },

    cardDiv: {
        width: '45%',
        margin: 'auto'
    },

    ContentTwo: {
        display: 'flex'
    },

    Content: {
        padding: '70px 15px',
        width: '75%',
        margin: 'auto',
    },
    para: {
        fontSize: '13px',
        color: '#5F5982'
    },
    Img: {
        width: '7%'
    }

}));

export default function Cards() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {[1,2].map((el) => (
                <>
                    <div className={classes.root}>
                        <div className={classes.Main}>

                            <div className={classes.textDiv}>
                                <div className={classes.Content}>
                                    <p>CONTACT</p>
                                    <h1>New York</h1>
                                    <p className={classes.para}>Our mission is to democratize education through the offering of world-class higher education opportunities that are accessible, flexible, and economical. Virtually anyone on the planet with an internet connection and a commitment to self-empowerment through learning can come to Skillify,</p>
                                    <div className={classes.ContentTwo} >
                                        <img src={Location} className={classes.Img} />
                                        <p className={classes.para} style={{
                                            margin: 'auto 10px'
                                        }}>600 Harrison St. 3rd Floor San Francisco, CA 94107</p>
                                    </div>
                                </div>

                            </div>


                            <Card className={classes.cardDiv}>
                                <CardMedia
                                    className={classes.media}
                                    image={NewYork}
                                    title="New York"
                                />
                            </Card>
                        </div>
                    </div>
                    <div className={classes.root}>
                        <div className={classes.Main} style={{
                            flexFlow: 'row-reverse'
                        }}>

                            <div className={classes.textDiv}>
                                <div className={classes.Content}>
                                    <p>CONTACT</p>
                                    <h1>Ankara, Turkey</h1>
                                    <p className={classes.para}>Our mission is to democratize education through the offering of world-class higher education opportunities that are accessible, flexible, and economical. Virtually anyone on the planet with an internet connection and a commitment to self-empowerment through learning can come to Skillify,</p>
                                    <div className={classes.ContentTwo} >
                                        <img src={BlueLocation} className={classes.Img} />
                                        <p className={classes.para} style={{
                                            margin: 'auto 10px'
                                        }}>600 Harrison St. 3rd Floor San Francisco, CA 94107</p>
                                    </div>
                                </div>

                            </div>


                            <Card className={classes.cardDiv}>
                                <CardMedia
                                    className={classes.media}
                                    image={Turkey}
                                    title="New York"
                                />
                            </Card>
                        </div>
                    </div>
                </>
            ))}

        </div>
    );
}
import { CardMedia, makeStyles, Card } from '@material-ui/core';
import React from 'react';
import PlayStation from '../../../Assets/Imgs/playstation.jpg'
import BottomPart from './BottomPart'
const useStyles = makeStyles({
    Main: {
        width: '60%',
        margin: 'auto',


    },

    root: {
        marginTop: '-85px',
        width: '100%',
        height: '380px'
    },
    media: {
        height: '100%',
    },

    para: {
        fontSize: '14px',
        color: '#5F5982',
        margin:'20px 0px'
    }
})

const Screen = () => {
    const classes = useStyles();
    const data = [
        {
            content: 'Playstation vs Xbox, Mario vs Sonic, Unreal vs Unity? Whether it’s consoles, characters, or game engines, people get passionate about defending their gaming industry favorites.'
        },
        {
            content: 'Focusing on the game engines, Unity and Unreal Engine (aka UE4) are the two most popular game engines on the market today. They are the go-to tools for most indie developers. While many game development studios use their own proprietary game engines, plenty use Unity or Unreal.'
        },
        {
            content: 'So which engine is better? This is one of the most asked questions from the over half a million students that the team at GameDev.tv and I have taught over the last 5 years.'
        },
        {
            content: 'Unreal Engine was developed by Epic Games founder, Tim Sweeney, in 1998. It launched alongside its debut title ‘Unreal’ and was unique in allowing players to modify the game for the first time. Today Unreal is associated with “better graphics” and offers a big studio AAA-quality to the games that use it. Epic Games, the company behind Unreal Engine, has seen epic success with its game Fortnite which has 200 million users and has generated revenue reported at $1 billion as of January 2019. Unreal Engine itself has 7 million users.'
        },
        {
            content: 'Founded in Copenhagen in 2004, the founders of Unity wanted to make game development universally accessible. Today Unity is known as the “make any game” engine and is ideal for indie developers. Over 50% of games across all platforms use Unity and 60% of all VR/AR content is powered by Unity.  '
        },
        {
            content: 'In reality, though, both engines are capable of making nearly any sort of game and deploying that game to most gaming platforms.'
        },
        {
            content: 'But that doesn’t help you decide, right? To answer which of these game engines is best for your needs, you first need to answer these five questions:'
        },

    ]
    return (
        <div className={classes.Main}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={PlayStation}
                    title="Image"
                />
            </Card>
            {data.map((item) => (
                <p className={classes.para}>{item.content}</p>
            ))}

            <BottomPart/>

        </div>

    );
};

export default Screen;
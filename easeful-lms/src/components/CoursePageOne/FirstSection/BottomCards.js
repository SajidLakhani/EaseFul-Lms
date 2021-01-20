import { Avatar, Card, makeStyles } from '@material-ui/core';
import React from 'react';
import Photo from '../../../Assets/Imgs/photocourse.jpg'
import Design from '../../../Assets/Imgs/designing.jpg'
import TeacherOne from '../../../Assets/Imgs/teacherone.jpg'
import TeacherTwo from '../../../Assets/Imgs/teachertwo.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        paddingBottom: '90px',
        marginTop:'35px'

    },

    Main:{
        width:'50%',
        marginLeft:'15px',
    },

    subMain: {
        display: 'flex',
        padding: '15px'
    },
    smallDiv: {
        display: 'flex'
    },
    AvatarOne: {
        width: '35%',
        height: '130px',
        borderRadius: 'unset'
    },
    lesson: {
        margin: ' 5px auto',
        fontSize:'13px'
    },
    name: {
        margin: ' 5px auto',
        fontSize:'15px'
    },
    Tname: {
        margin: 'auto 15px',
        fontSize:'13px'
    },

    AvatarTwo: {
        borderRadius: 'unset',
        width:'30px',
        height:'30px'
    }
}))

const BottomCards = () => {
    const classes = useStyles();
    const data = [
        {
            Avatar1: `${Photo}`,
            Lesson: 'LESSON 5 OF 17 | 5m',
            CourseName: 'Merge Duplicates in Sketch - Inconsistent Symbols & Styles',
            Avatar2: `${TeacherOne}`,
            TeacherName: 'Nicole Brown'
        },
        {
            Avatar1: `${Design}`,
            Lesson: 'LESSON 5 OF 17 | 5m',
            CourseName: 'Merge Duplicates in Sketch - Inconsistent Symbols & Styles',
            Avatar2: `${TeacherTwo}`,
            TeacherName: 'Nicole Brown'
        },

    ]
    return (
        <div className={classes.root}>
            {data.map(item => (
                <Card className={classes.Main}>
                    <div className={classes.subMain}>
                        <Avatar className={classes.AvatarOne} src={item.Avatar1} />
                        <div style={{
                            marginLeft: '15px'
                        }}>
                            <p className={classes.lesson}>{item.Lesson}</p>
                            <h3 className={classes.name}>{item.CourseName}</h3>
                            <div className={classes.smallDiv}>
                                <Avatar className={classes.AvatarTwo} src={item.Avatar2} />
                                <p className={classes.Tname}>{item.TeacherName}</p>
                            </div>
                        </div>
                    </div>

                </Card>
            ))}

        </div>
    );
};

export default BottomCards;
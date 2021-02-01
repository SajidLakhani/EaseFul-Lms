import { Card, CardMedia, Divider, makeStyles } from '@material-ui/core'
import React from 'react'
import CalenderDays from '../../Assets/Imgs/calenderDays.svg'
import Book from '../../Assets/Imgs/coursebook.svg'
import BookOne from '../../Assets/Imgs/forBook1.jpg'
import BookTwo from '../../Assets/Imgs/forBook2.jpg'

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: '#ffffff',
        padding: '10px 25px',
        fontFamily: 'MyFirstFont'
    },
    forhead: {
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'space-between'
    },
    para: {
        color: '#302D3A',
        fontWeight: 'bold'
    },
    content: {
        fontSize: '12px',
        color: '#302D3A',
        margin: 'auto 0'
    },
    forTime: {
        backgroundColor: 'rgb(254, 239, 238)',
        color: 'rgb(245, 105, 98)',
        padding: '4px',
        fontSize: '11px',
        fontWeight: 'bold',
        margin: 'auto 0'
    },
    card: {
        width: '45%',
        boxShadow: 'unset'
    },
    cardContent: {
        margin: '10px auto',
        fontSize: '14px',
        color: '#5F5982',
        textAlign:'center'
    },
    price:{
        color:'#F68C20',
        textAlign:'center'
    }

}))

function LessonLearn() {
    const classes = useStyles();
    const data = [
        {
            img:`${BookOne}`
        },
        {
            img:`${BookTwo}`
        },
    ]
    return (
        <>
            <div className={classes.main}>
                <div className={classes.forhead}>
                    <p className={classes.para}>Lesson learn for you</p>
                    <img src={CalenderDays} />
                </div>
                {[1, 2, 3, 4, 5, 6].map((el) => (
                    <>
                        <div className={classes.forhead} style={{ width: '90%', margin: '10px auto' }}>
                            <div style={{ display: 'flex' }}>
                                <img style={{ width: '12%' }} src={Book} />
                                <p className={classes.content} style={{ marginLeft: '15px' }}>Lesson 01: Introducation</p>
                            </div>
                            <p className={classes.forTime}>30 min</p>
                        </div>
                        <Divider style={{
                            width: '90%',
                            margin: '15px auto'
                        }}
                        />
                    </>
                ))}
            </div>
            <div className={classes.main} style={{ margin: '20px auto' }}>
                <div className={classes.forhead}>
                    <p className={classes.para}>Book For you</p>
                    <img src={CalenderDays} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {data.map((item) => (
                          <Card className={classes.card}>
                          <CardMedia
                              component="img"
                              alt="Contemplative Reptile"
                              height="180"
                              image={item.img}
                              title="Contemplative Reptile"
                          />
                          <div>
                              <p className={classes.cardContent}>Use SEO to Boost Your Business</p>
                              <p className = {classes.price}>$59.00</p>
                          </div>
                      </Card>
                    ))}
                  
                </div>

            </div>
        </>
    )
}

export default LessonLearn
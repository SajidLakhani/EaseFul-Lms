

// Curriculum Code

// import React from 'react';
// import { Avatar, Button, makeStyles } from '@material-ui/core';
// import Selectors from './Selectors';
// import OrangeClock from '../../../Assets/Imgs/orangeClock.svg'
// import Curriculum from '../../../Assets/Imgs/curriculum.jpg'

// const useStyles = makeStyles((theme) => ({
//     subMain: {
//         backgroundColor: '#FEF9E5',
//         marginTop: '15px'
//     },
//     subMain2: {
//         backgroundColor: 'rgba(67,200,177,0.1)',

//         marginTop: '15px'
//     },
//     button: {
//         width: 'fit-content',
//         padding: '5px 10px',
//         fontFamily: 'myFirstFont',
//         margin: 'auto 0',
//         color: "#ffffff",
//         backgroundColor: '#F68C20',
//         fontSize: "12px",
//         textTransform: "unset",
//     },

//     container: {
//         display: 'flex',
//         padding: '15px',
//         justifyContent: 'space-between'
//     },
//     avatar: {
//         width: '15%',
//         height: '80px',
//         borderRadius: 'unset'
//     },
//     img: {
//         width: '20px'
//     },
//     heading: {
//         margin: 0
//     },
//     para: {
//         margin: 0,
//         fontSize: '15px',
//         marginLeft: '10px'
//     }
// }))

// const LeftBottomPart = () => {
//     const classes = useStyles();
//     return (
//         <div className={classes.Main}>
//             <Selectors />
//             {[1, 2].map((item) => (
//                 <div className={classes.subMain}>
//                     <div className={classes.container}>
//                         <Avatar src={Curriculum} className={classes.avatar} />
//                         <div style={{
//                             margin: 'auto'
//                         }}>
//                             <h4 className={classes.heading}>Everything You Need To Know Business</h4>
//                             <div style={{
//                                 display: 'flex',
//                                 marginTop: '10px'
//                             }}>
//                                 <img className={classes.img} src={OrangeClock} />
//                                 <p className={classes.para}>Duration 10 week</p>
//                             </div>
//                         </div>
//                         <Button className={classes.button}>Try with Pro</Button>
//                     </div>

//                 </div>
//             ))}
//             {[1, 2].map((item) => (
//                 <div className={classes.subMain2}>
//                     <div className={classes.container}>
//                         <Avatar src={Curriculum} className={classes.avatar} />
//                         <div style={{
//                             margin: 'auto'
//                         }}>
//                             <h4 className={classes.heading}>Everything You Need To Know Business</h4>
//                             <div style={{
//                                 display: 'flex',
//                                 marginTop: '10px'
//                             }}>
//                                 <img className={classes.img} src={OrangeClock} />
//                                 <p className={classes.para}>Duration 10 week</p>
//                             </div>
//                         </div>
//                         <Button className={classes.button}>Try with Pro</Button>
//                     </div>

//                 </div>
//             ))}


//         </div>
//     );
// };

// export default LeftBottomPart;


                                                             // Instructor Code

// import React from 'react';
// import Selectors from './Selectors';
// import { Avatar, makeStyles } from '@material-ui/core';
// import Instructor from '../../../Assets/Imgs/instructor.jpg'
// import Star from '../../../Assets/Imgs/Star.svg'
// import Eye from '../../../Assets/Imgs/eye.svg'
// import Play from '../../../Assets/Imgs/play.svg'
// const useStyles = makeStyles((theme) => ({
//     Main: {
//         backgroundColor: '#FEF0EF',
//         marginTop:'35px'
//     },
//     container: {
//         padding: '15px',

//     },

//     topDiv: {
//         display: 'flex',
//         justifyContent: 'space-between'
//     },
//     subMain: {
//         display: 'flex',

//     },
//     ImgDiv: {
//         display: 'flex',
//         color:'#5F5982'

//     },
//     Img: {
//         margin: 'auto',
//         width: '20px',

//     },
//     para: {
//         margin: 'auto',
//         fontSize: '10px',

//         marginLeft: '3px'
//     },
//     text: {
//         margin: 'auto',
//         fontSize: '13px',
//         marginTop: '10px',
//         color:'#5F5982'
//     },

//     heading: {
//         margin: 'auto',
//         marginBottom: '10px',
//     },
//     avatar: {
//         width: '20%',
//         height: '120px',
//         borderRadius: 'unset'
//     },
//     lastPara:{
//         fontSize:'14px',
//         color:'#5F5982'
//     },
//     textDiv:{
//         margin:'auto',
//         marginLeft:'15px'
//     }

// }))

// const LeftBottomPart = () => {
//     const classes = useStyles();
//     const data = [

//         {
//             image: `${Eye}`,
//             text: 'Enrolled 45 students'
//         },

//         {
//             image: `${Play}`,
//             text: 'Duration 10 week'
//         },
//     ]
//     return (
//         <div>
//             <Selectors />
//             <div className={classes.Main}>
//                 <div className={classes.container}>
//                     <div className={classes.topDiv}>
//                         <Avatar src={Instructor} className={classes.avatar} />
//                         <div className = {classes.textDiv}>
//                             <h3 className={classes.heading}>Demetri Caron</h3>
//                             <div className={classes.subMain}>
//                                 <div className={classes.ImgDiv}>
//                                     <img src={Star} className={classes.Img} />
//                                     <p className={classes.para}>4.5 (4.5 (1,348 ratings))</p>
//                                 </div>
//                                 {data.map((item) => (
//                                     <div className={classes.ImgDiv} style={{
//                                         margin: 'auto',
//                                         marginLeft: '15px'
//                                     }}>
//                                         <img src={item.image} className={classes.Img} />
//                                         <p className={classes.para}>{item.text}</p>
//                                     </div>
//                                 ))}

//                             </div>
//                             <p className={classes.text}>CBE brings you courses that are affordable, current, entertaining and based on practical work experience instead of theory.</p>

//                         </div>
//                     </div>
//                     <div>
//                         <h5>
//                             Adobe Certified Instructor & Adobe Certified Expert
//                         </h5>
//                         <p className = {classes.lastPara}>Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut
//                         away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy mid
//                         kitten heel this ladylike design slingback strap mid kitten heel this ladylike design.
//                         Sharing is who I am, and teaching is where I am at my best, because I’ve been on both
//                         sides of that equation, and getting to deliver useful training is my meaningful way to
//                         be a part of the creative community. I’ve spent a long time watching others learn, and
//                         teach, to refine how I work with you to be efficient, useful and, most importantly,
// memorable. I want you to carry what I’ve shown you into a bright future.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LeftBottomPart;


import React from 'react';
import Selectors from './Selectors';

const LeftBottomPart = () => {
    return (
        <div>
            <Selectors/>
        </div>
    );
};

export default LeftBottomPart;
import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import Selectors from './Selectors';

const useStyles = makeStyles((theme) => ({
    text: {
        color: '#5F5982',
        fontSize: '14px'
    }


}))

const Overview = () => {
    const classes = useStyles();
    const data = [
        {
            heading: 'Course Description',
            text: 'See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover- up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.'
        },
        {
            heading: 'Certification',
            text: 'Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design.'
        },

        {
            heading: 'Who this course is for',
            text: 'Anyone interested in learning about business (only practical concepts that you can use and no boring theory + we won’t cover business topics that are common sense'
        }
    ]
    return (
        <div className={classes.Main}>
            <Selectors active = "overview"/>
            {data.map((item) => (
                <div className={classes.contentDiv}>
                    <h3>{item.heading}</h3>
                    <p className={classes.text}>{item.text}</p>
                </div>
            ))}

        </div>
    );
};

export default Overview;
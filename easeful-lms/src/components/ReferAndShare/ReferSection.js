import { makeStyles } from '@material-ui/core';
import React from 'react'
import Money from '../../Assets/Imgs/money.svg'
import Instagram from '../../Assets/Imgs/Instagram.svg'
import Facebook from '../../Assets/Imgs/facebook1.svg'
import Twitter from '../../Assets/Imgs/twitter1.svg'
import Reddit from '../../Assets/Imgs/reddit.svg'
import Whatsapp from '../../Assets/Imgs/whatsapp.svg'
import Linkedin from '../../Assets/Imgs/linkedin.svg'
import Youtube from '../../Assets/Imgs/youtube1.svg'
import ForHeadAndText from '../../ReusableComponents/ForHeadAndText/ForHeadAndText';

const useStyles = makeStyles((theme) => ({
    Main: {
        width: '95%',
        margin: '40px auto'
    },
    submain: {
        backgroundColor: 'white',
        padding: '15px',
        margin:'20px auto'
    },
    textandImage: {
        display: 'flex'
    },
    image: {
        margin: 'auto',
        width: '10%',
    }
}))

function ReferSection() {
    const classes = useStyles();

    const imageData = [
        {
            image: `${Instagram}`
        },
        {
            image: `${Facebook}`
        },
        {
            image: `${Twitter}`
        },
        {
            image: `${Reddit}`
        },
        {
            image: `${Whatsapp}`
        },
        {
            image: `${Linkedin}`
        },
        {
            image: `${Youtube}`
        },
    ]
    return (
        <div className={classes.Main}>
            <ForHeadAndText head = 'Share and refer'
            text = 'User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to a new employee. You can add seats at any time your the cost of any additional seats are prorated. User access can be revoked only when a user leaves the. That user’s seat can then be re-assigned to a new employee. You can add seats at any time throughout your contract and the cost of any additional seats are prorated. User access can be revoked only when a user . That user’s seat can then be re-assigned to a new employee. User access can be revoked only when a user leaves the organization. That user’s seat can then be re-assigned to You can add seats at any time throughout your contract and the cost of any additional seats are prorated.'/>
            <div>
                {[1, 2, 3].map((item) => (
                    <div className={classes.submain}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className={classes.textandImage}>
                                <img src={Money} className={classes.image} />
                                <div style={{ margin: 'auto 10px' }}>
                                    <h3 style={{ margin: 'auto', color: '#5F5982' }}>06 SuperCoins on the way</h3>
                                    <p style={{ margin: '4px auto', color: '#5F5982', fontSize: '13px', }}>SuperCoins are credited after the return period is over for all items in the order</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', margin: 'auto 0' }}>
                                {imageData.map((item) => (
                                    <img style={{ width: '10%', margin: 'auto 5px', cursor:'pointer' }} src={item.image} />
                                ))}

                            </div>
                        </div>
                        <div style={{ backgroundColor: '#FEEFEE', padding: '15px', margin: '15px auto' }}>
                            <p style={{ fontSize: '14px', color: '#5F5982' }}>Existing customers can invite (via unique link containing a referral code) their friends to join Skillfy. Once
 the friend registers, then both (existing customer and friend) get CluesBucks+ worth Rs.700.</p>
                            <p style={{ color: '#5F5982', fontSize: '11px' }}>You earn 100 miles & your friend earns 100 miles on successful Sign-Up</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ReferSection

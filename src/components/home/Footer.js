import { Grid } from '@mui/material'
import React from 'react'
import Logo from '../../assets/images/logo.jpg'
const Footer = () => {
    return (
        <>
            <div className='footerContainer'>
                <div className='leftSection'>
                    <div className='pageSection'>
                        <img src={Logo} height={50} width={50} />
                        <ul>
                            <li><a href='#'>News + Updates</a></li>
                            <li><a href='#'>Research</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Graduate Program</a></li>
                            <li><a href='#'>People</a></li>
                            <li><a href='#'>Events</a></li>
                            <li><a href='#'>Videos</a></li>
                            <li><a href='#'>Member Portal</a></li>
                        </ul>
                    </div>
                    <div className='exploreSection'>
                        <h3>More ways to explore</h3>
                        <ul>
                            <li><a href='#'>Videos</a></li>
                            <li><a href='#'>Publications</a></li>
                            <li><a href='#'>Job Opportunities</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>

                </div>
                <div className='rightSection'>
                    <div className='socialIcons'>
                        <ul>
                            <li><a href='#'><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href='#'><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div className='middleSection'>
                        <img src={Logo} height={50} width={50} />
                        <ul>
                            <li><a href='#'>Massachusetts Institute of Technology</a></li>
                            <li><a href='#'>School of Architecture + Planning</a></li>
                        </ul>
                    </div>
                    <div className='bottomSection'>
                        <ul>
                            <li><a href='#'>Accessibility</a></li>
                            <li><a href='#'>Donate to the Lab</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer
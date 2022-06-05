import React from 'react'
import Image3 from '../assets/images/p3.jpg'
import Image2 from '../assets/images/p2.jpg'
import Image1 from '../assets/images/p1.jpg'
import { Grid } from '@mui/material'
const MainContent = () => {
    return (
        <div className='MainContent'>
            <Grid container>
                <Grid item xs={12} sm={4} md={4} lg={3}>
                    <div className='singleItem'>
                        <div className='imageSection'>
                            <img src={Image3} />
                            <h6>Jhon De</h6>
                        </div>
                        <span className='angleUp'></span>
                        <div className='bottomSection'>
                            <h2>June 3 Exhibit and Show at Media Lab: Queer-Feminist-Antiracism and Design for the Future</h2>
                            <h4>June 3 Exhibit and Show asks: "How can we work as Engineers, Scientists, Artists and Designers to create prototypes of a future that supports a liberatory experience for all?"</h4>
                            <p>June 6, 2022</p>
                            <p><a href=''>In space enabled</a></p>

                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={3}>
                    <div className='singleItem'>
                        <div className='imageSection'>
                            <img src={Image1} />
                            <h6>Jhon De</h6>
                        </div>
                        <span className='angleUp'></span>
                        <div className='bottomSection'>
                            <h2>June 3 Exhibit and Show at Media Lab: Queer-Feminist-Antiracism and Design for the Future</h2>
                            <h4>June 3 Exhibit and Show asks: "How can we work as Engineers, Scientists, Artists and Designers to create prototypes of a future that supports a liberatory experience for all?"</h4>
                            <p>June 6, 2022</p>
                            <p><a href=''>In space enabled</a></p>

                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={3}>
                    <div className='singleItem'>
                        <div className='imageSection'>
                            <img src={Image2} />
                            <h6>Jhon De</h6>
                        </div>
                        <span className='angleUp'></span>
                        <div className='bottomSection'>
                            <h2>June 3 Exhibit and Show at Media Lab: Queer-Feminist-Antiracism and Design for the Future</h2>
                            <h4>June 3 Exhibit and Show asks: "How can we work as Engineers, Scientists, Artists and Designers to create prototypes of a future that supports a liberatory experience for all?"</h4>
                            <p>June 6, 2022</p>
                            <p><a href=''>In space enabled</a></p>

                        </div>
                    </div>
                </Grid>
            </Grid>

          

        </div>
    )
}

export default MainContent
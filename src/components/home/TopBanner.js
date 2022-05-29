import { Box } from '@mui/system'
import React from 'react'
import BannerImage from '../../assets/images/banner2.webp'
import Header from './Header'
const TopBanner = () => {

    const myStyle={
        backgroundImage: `url(${BannerImage})`,
        height:'80vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <>
            <Box sx={myStyle}  >
 
                <Box sx={{paddingTop:'10%'}} >
                    <Header />

                </Box> 
            </Box>


        </>
    )
}

export default TopBanner
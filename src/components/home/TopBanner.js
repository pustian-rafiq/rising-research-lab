import { Box } from '@mui/system'
import React, { useState } from 'react'
import BannerImage from '../../assets/images/banner2.webp'


import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Close } from '@mui/icons-material';

import Header from './Header'
import { Grid } from '@mui/material';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 128,
    },
}));

const TopBanner = () => {

    const myStyle = {
        backgroundImage: `url(${BannerImage})`,
        height: '80vh',
        marginTop: '-70px',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const [menu, setMenu] = useState(true)

    const menuHandler = () => {
        setMenu(!menu)
    }

    return (
        <>
            <Box sx={{display:'flex'}}>
                <Box sx={myStyle} style={!menu ? { width: '70%', display: 'inline-block' } : { width: '100%' }} >
                    <Box sx={{marginTop:'15%'}}>
                        <AppBar position="static" style={!menu ? { display: 'none' } : { width: '100%' }} >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0066CE', padding: '60px 30px' }}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    Rising Research Lab
                                </Typography>
                                <Box  >
                                    <IconButton size="large" aria-label="search"  >
                                        <SearchOutlinedIcon />
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        aria-label="display more actions"
                                        edge="end"
                                        color="inherit"
                                    >
                                        <PersonOutlineOutlinedIcon />
                                    </IconButton>

                                    <IconButton
                                        size="large"
                                        aria-label="display more actions"
                                        edge="end"
                                        color="inherit"
                                        onClick={menuHandler}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </AppBar>
                    </Box>
                </Box>
                <Box sx={{marginTop:'15%',marginRight:'10px'}} style={!menu ? { width: '30%' } : { display: 'block' }}>
                    {
                        !menu && <Header menu={menu} setMenu={setMenu} />
                    }
                </Box>
            </Box>


        </>
    )
}

export default TopBanner
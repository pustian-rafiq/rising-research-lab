import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 128,
    },
}));

export default function TopBanner() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
               
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#0066CE',padding:'30px 30px'}}>
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
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Box>
               
            </AppBar>
        </Box>
    );
}

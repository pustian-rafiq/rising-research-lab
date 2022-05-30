import { Close } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useState } from "react";
import Search from './Search'


const Header = ({ setMenu, menu }) => {
    const [searchIcon, setSearchIcon] = useState(true);

    const closeHandler = () => {
        setMenu(!menu)
    }
    const menuOpenHandler = () => {
        setMenu(!menu)
        setSearchIcon(!searchIcon)
    }

    return (
        <Box style={{ display: 'flex', justifyContent: 'center' }} sx={{ flexGrow: 1 }}>
            <div className="headerContainer">
                <ul className="headerContent">
                    <li>News + Updates</li>
                    <li>Research</li>
                    <li>About</li>
                    <li>Graduate Program</li>
                    <li>People</li>
                    <li>Events</li>
                    <li>Videos</li>
                    <li>Member Portal</li>
                </ul>
                <div>
                    <Box  >
                        <IconButton size="large" aria-label="search"  >
                            <SearchOutlinedIcon onClick={menuOpenHandler} />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="display more actions"
                            edge="end"
                            color="inherit"
                        >
                            <PersonOutlineOutlinedIcon />
                        </IconButton>

                        {
                            menu ?

                                <IconButton
                                    size="large"
                                    aria-label="display more actions"
                                    edge="end"
                                    color="inherit"
                                   
                                >
                                    <MenuIcon  />
                                </IconButton>
                                :
                                <IconButton
                                size="large"
                                aria-label="display more actions"
                                edge="end"
                                color="inherit"
                               
                            >
                              <Close onClick={closeHandler}  />
                            </IconButton>
                              
                        }
                    </Box>

                </div>
            </div>
            {
                !searchIcon && <Search searchIcon={searchIcon} setSearchIcon={setSearchIcon}/>
            }
            {/* <div>
                <Close onClick={closeHandler} sx={{ color: 'white' }} />
            </div> */}
        </Box>
    );
}

export default  React.memo(Header)
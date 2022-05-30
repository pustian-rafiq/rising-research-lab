import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import { Box, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Header({ setMenu, menu, searchIcon, searchHandler }) {
    const closeHandler = () => {
        searchHandler(!searchIcon)
    }

    const searchOpenHandler = () => {
        setMenu(!menu)
    }

    return (
        <Box style={{ display: 'flex', justifyContent: 'center' }} sx={{ flexGrow: 1 }}>
            <div className="searchContainer">
                {/* <ul className="headerContent">
                    <li>News + Updates</li>
                    <li>Research</li>
                    <li>About</li>
                    <li>Graduate Program</li>
                    <li>People</li>
                    <li>Events</li>
                    <li>Videos</li>
                    <li>Member Portal</li>
                </ul> */}
                
               
                    <Box sx={{float:'right'}} >
                        {
                            searchIcon ?
                                <IconButton size="large" aria-label="search"  >
                                    <SearchOutlinedIcon />
                                </IconButton>
                                :
                                <IconButton
                                    size="large"
                                    aria-label="display more actions"
                                    edge="end"
                                    color="inherit"

                                >
                                    <Close onClick={closeHandler} />
                                </IconButton>
                        }

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
                            <MenuIcon onClick={searchOpenHandler} />
                        </IconButton>

                    </Box>

              
                <FormControl className="searchContent" fullWidth    >
                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        //value={values.amount}
                        //onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
            </div>
            {/* <div>
                <Close onClick={closeHandler} sx={{ color: 'white' }} />
            </div> */}
        </Box>
    );
}

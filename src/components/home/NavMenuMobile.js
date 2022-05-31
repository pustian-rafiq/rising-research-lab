import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

const NavMenuMobile = () => {
  const [open,setOpen] = useState(false)
const openMenuHandler = () => {
  setOpen(!open)
}
  return (
    <div className='navContainerMobile'>
      <div className='arrowSection'>
        <li><a href='#' style={open? {display:'none'} : {display:'block'}}>Groups</a></li>
        {
          open ? <KeyboardArrowUpRoundedIcon onClick={openMenuHandler}  /> :  <KeyboardArrowDownIcon className='arrowDown' onClick={openMenuHandler} />
        }
       
      </div>

      <ul className='navItemsMobile' style={open? {display:'block'} : {display:'none'}}>
        <li><a href='#'>Groups</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>Publications</a></li>
        <li><a href='#'>Centers</a></li>
        <li><a href='#'>Initiatives</a></li>
      </ul>

    </div>
  )
}

export default NavMenuMobile
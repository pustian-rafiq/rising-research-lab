import React from 'react'

const LeftSidebar = () => {
  return (
    <div className='leftContainer'>
        <div className='items'>
            <ul>
                <li><a href='#'>News + Updates</a></li>
                <li><a href='#'>Research</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Graduate Program</a></li>
                <li><a href='#'>People</a></li>
                <li><a href='#'>Events</a></li>
                <li><a href='#'>Video</a></li>
                <li><a href='#'>Member Portal</a></li>
            </ul>
        </div>
        <hr></hr>
        <div className='icons'>
            <ul>
                <li><a href='#'><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href='#'><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
                
            </ul>
        </div>

    </div>
  )
}

export default LeftSidebar
import React, { useEffect, useState } from 'react'
import Body from '../components/home/Body'
import Footer from '../components/home/Footer'
import NavMenu from '../components/home/NavMenu'
import NavMenuMobile from '../components/home/NavMenuMobile'
import TopBanner from '../components/home/TopBanner'
import LeftSidebar from '../components/sidebar/LeftSidebar'


const HomePage = () => {

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  return (
    <>
    
      {/* <TopBanner />
      {
        screenSize.dynamicWidth < 520 ? <NavMenuMobile/> :  <NavMenu />
      }
     <Body/>
      <Footer/>
      <li>Width: <strong>{screenSize.dynamicWidth}</strong></li>
        <li>Height: <strong>{screenSize.dynamicHeight}</strong></li> */}
        <TopBanner/>
        <LeftSidebar/>
    </>

  )
}

export default HomePage
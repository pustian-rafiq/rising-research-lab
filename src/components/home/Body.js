import React from 'react'
import Logo from '../../assets/images/logo.jpg'
const Body = () => {
  return (
    <div className='cardContainer'>
        <div className='singleCard'>
            <div className='topSection'>
                <img src={Logo} />
                <h2>affective Computing</h2>
            </div>
            <div className='middleSection'>
                <h2>Advancing human wellbeing by developing new ways to communicate, understand, and respond to emotion</h2>
            </div>
            <div className='bottomSection'>
                <h5>Rafiqul Islam</h5>
                <ul className='tagLists'>
                    <li><a href='#'>#Tag1</a></li>
                    <li><a href='#'>#Tag2</a></li>
                    <li><a href='#'>#Tag3</a></li>
                    <li><a href='#'>#Tag4</a></li>
                </ul>

            </div>

        </div>

    </div>
  )
}

export default Body
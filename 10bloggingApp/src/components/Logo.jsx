import React from 'react'
import LogoImage from '../assets/BlogApp.png';

function Logo({width = '100px'}) {
  return (
    <div><img src={LogoImage} alt='WebSite Logo' className='image-data' /></div>
  )
}

export default Logo

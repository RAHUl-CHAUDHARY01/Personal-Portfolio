import React from 'react'
import './socialstyle.css'
import phone from '../assets/phone.png'
import Particle from './Particle'

const Socials = () => {
  return (
    < div style={{flexWrap:"wrap"}}>
    <Particle/>
    <img src={phone} style={{height:"20%",width:"30%"}} alt="" />
    <div class="wrapper" style={{position:"relative",justifyContent:"center",alignItems:"center",justifyItems:"center"}}>
      <a href="https://www.instagram.com/rahul._chaudhary._/" class="icon"><i class="fa-brands fa-instagram"></i></a>
      <a href="www.linkedin.com/in/rahul-kumar-b31187214" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
      <a href="https://www.youtube.com/channel/UCuOn3rjdVnJjXJxqffAovJg" class="icon"><i class="fa-brands fa-youtube"></i></a>
      <a href="https://twitter.com/RahulCh08908694" class="icon"><i class="fa-brands fa-x-twitter"></i></a>
      <a href="https://github.com/RAHUl-CHAUDHARY01" class="icon"><i class="fa-brands fa-github"></i></a>
    </div>
    </div>
  )
}

export default Socials

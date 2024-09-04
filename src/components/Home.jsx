import React from 'react'
import profile from '../images/rahulpp.jpg'
import Particle from './Particle'
const Home = () => {
  return (
    <div className='h-screen bg-[#09090b]'>
      <Particle/>
        <p style={{fontFamily:"monospace",margin:"auto",display:"flex",paddingTop:"280px",
          justifyContent:"center",textAlign:"center",fontWeight: "600"}}className='text-[90px]  text-[white] item-center justify-center text-center '> Rahul Kumar</p>
    </div>
  )
}

export default Home

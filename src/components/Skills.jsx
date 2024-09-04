import React from 'react'
import { SkillsData } from '../assets/assets'
import SkillsItem from './SkillsItem'
import img2 from '../assets/img2.png'
import Particle from './Particle'
const Skills = () => {
  return (
    <div  style={{ backgroundColor:"#09090b", position:"relative",top:"120px"}}>
        <Particle/>
        <div className='flex flex-wrap justify-center'>
            <img style={{height:"200px",right:"50px",position:"relative"}}src={img2} alt="" />
        <h1 style={{justifyContent:"center" , textAlign:"center",fontSize:"60px",fontFamily:"monospace",color:"white",fontWeight:"600", marginBottom:"100px",marginTop:"40px"}}>Skills</h1>
            </div>
    {/* <p>sdfsfsdf</p> */}
    <div className='d-flex ' style={{flexWrap:"wrap",justifyContent:"center"}}>

    {SkillsData.map((item,index)=>{
        return (
            <div key={index}>

            <SkillsItem
            // key={index}
            image ={item.image}
            name={item.name} />

            {/* </SkillsItem> */}
    </div>
        );
    })}
    </div>
    </div>
  )
}

export default Skills

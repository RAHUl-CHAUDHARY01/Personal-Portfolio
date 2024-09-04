import React from 'react'
import './skillstyle.css'
const SkillsItem = (props) => {

    const {name,image}= props;
    return (
      <div className='col'>
  
      <div class="card " style={{width: "130px", height:"130px",alignItems:"center",margin:"10px"}}>
      <img class="card-img-top" style={{height:"80px",width:"90px",position:"relative",top:"10px"}} src={image} alt="Card image cap"/>
      <div class="card-body" style={{position:"absolute",top:"83px",fontFamily:"monospace",}}>
        <h5 class="card-title">{name}</h5>
    
      </div>
    </div>
      </div>
    )
}

export default SkillsItem

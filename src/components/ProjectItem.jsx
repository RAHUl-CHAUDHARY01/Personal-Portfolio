import React from 'react'
import './projectstyle.css'
const ProjectItem = (props) => {

  const {name,desc,image,tech,gh,deploy}=props;
  return (
    <div
      className="project-container flex flex-col align-center  p-4"
      style={{
        borderRadius: "20px",
        border: "0.5px solid gray #7b43a6",
        minWidth: "20rem",
        maxWidth: "20rem",
        // minHeight: "10rem",
        height:"470px",
        paddingBottom:"10px",
        // position:"relative",
        // left:"10px", 
        // right:"102px",
        backgroundColor:"white"
      }}
    >
      <img
        src={image}
        alt=""
        className="rounded mb-4"
        style={{ height: "10rem" }}
      />
      <h4 className="text-black font-bold mb-2" style={{ minHeight: "3rem" }}>
        {name}
      </h4>
      <p className="text-black text-sm" style={{ flexGrow: "1" }}>
        {desc}
      </p>
      <p className="text-[#7b43a6] text-sm" style={{ flexGrow: "1" }}>
        
        {tech.map((item,index)=>{
          return(
            <div key = {index} className='btn   rounded border border-info mx-2 h-[30px] my-1  ' style={{textAlign:"center",flexWrap:"wrap",justifyItems:"center" ,width:"90px"}}><p style={{marginBottom:"49px"}}>{item}</p></div>

          );
})}
      </p>
      <div className="mt-5 mb-3 flex justify-start">
        
          <a
            href={gh}
            className="btn px-7 rounded"
            style={{
              backgroundColor: "#e0f2fe",
              color: "#0284c7",
              marginRight: "8px",
              border: "1px solid #e0f2fe",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href={deploy}
            className="btn px-7 rounded"
            style={{ backgroundColor: "#0ea5e9", color: "#fff" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy
          </a>
      </div>
    </div>
  );
}

export default ProjectItem

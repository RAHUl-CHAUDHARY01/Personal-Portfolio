import React from "react";
import { projectData } from "../assets/assets";
import ProjectItem from "./ProjectItem";
import work from "../assets/work.png";
import './projectstyle.css'
import Particle from "./Particle";
// ProjectItem
const Projects = () => {
  return (
    <div className="h-screen  bg-[#09090b]" style={{position:"relative", top:"120px",height:"fit-content"}} >
      <Particle/>
      <div
        style={{ position: "relative", left: "-10%" }}
        class="flex justify-center"
      >
        <img src={work} alt="Image" class="w-full " style={{position:"relative",top:"-20px",left:"-10px",height:"23vh",width:"350px"}}/>
        <h2
          style={{
            position: "relative",
            bottom: "-7vh",
            right:"5vw",
            fontSize:"6vh",
            fontWeight:"700",
            color: "white",
            fontFamily: "monospace",
          }}
          class=" text-5xlfont-bold"
        >
          Projects
        </h2>
      </div>
      {/* <div
      id="projects-container"
      className="projects-container px-10 py-20 bg-slate-950"
      style={{ zIndex: 100, position: "relative" }}> */}
      <div className="project-list flex flex-wrap gap-x-10 gap-y-16 justify-center">

      {projectData.map((item,index)=>{
        
        return (
          <div className="" key={index}style={{position:"relative",justifyItems:"center",display:"inline-block",gridTemplateColumns:"repeat(4,1fr)",gap:"10px"}} >
              <ProjectItem  
              className="col-lg-3 col-md-6 col-sm-12"
              style={{width:"18rem"}}
                  name={item.name}
                  desc={item.desc}
                  image={item.image}
                  // newsUrl={element.url}
                  // author={element.author ? element.author : "Anonymous"}
                  // time={element.publishedAt}
                  // source={element.source.name}
                  tech ={item.tech}
                  deploy={item.deploy}
                  gh={item.gh}
                  />
          </div>
      );
    })}
    </div>
    </div>
    
    // </div>
  );
};

export default Projects;

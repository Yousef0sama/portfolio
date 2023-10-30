"use client"

import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import { ProjectsContext } from "../page";
import axios from "axios";



function Projects() {

  const [phNum, setPhNum] = useState(0);
  const [proNum, setProNum] = useState(0);


  const RightPh = () => {
    if (phNum > 0) {
      setPhNum(phNum - 1);
    }
  }

  const LeftPh = () => {
    if (phNum < projects.projects[0].pics.length - 1) {
      setPhNum(phNum + 1);
    }
  }

  const RightPro = () => {
    if (proNum > 0) {
      setProNum(proNum - 1);
      setPhNum(0)
    }
  }

  const LeftPro = () => {
    if (proNum < projects.projects.length - 1) {
      setProNum(proNum + 1);
      setPhNum(0)
    }
  }
  

  const projects = useContext(ProjectsContext);

    return (
      <div className='container-fluid projects'>
        <div className="row">
          <div className="col col-sm-12 head">
            <h2 className="colored">Projects</h2>
          </div>
          <div className="con col col-sm-12 row">
            <div className="col col-sm-12">
              <div className="np">
                <span className="rightP" onClick={() => {RightPro()}}>
                  <b className="d-none d-md-block">last project</b>
                  <b className="d-sm-block d-md-none"><i className="bi bi-arrow-left"></i></b>
                </span>
                <span className="leftP" onClick={() => {LeftPro()}}>
                  <b className="d-none d-md-block">next project</b>
                  <b className="d-sm-block d-md-none"><i className="bi bi-arrow-right"></i></b>
                </span>
              </div>
            </div>
            <div className="Card row col col-sm-12">
              <div className="col col-sm-12 Num"> project {proNum + 1} from {projects.projects.length} projects </div>
              <div className="row col-sm-12 pic">
                <div className="col col-sm-12">
                  <div className="np">
                    <span className="right" onClick={() => {RightPh()}}>
                      <b className="d-none d-md-block">last photo</b>
                      <b className="d-sm-block d-md-none"><i className="bi bi-arrow-left"></i></b>
                    </span>
                    <span className="left" onClick={() => {LeftPh()}}>
                      <b className="d-none d-md-block">next photo</b>
                      <b className="d-sm-block d-md-none"><i className="bi bi-arrow-right"></i></b>
                    </span>
                  </div>
                </div>
                <div className="col col-sm-12 Num"> photo {phNum + 1} from {projects.projects[proNum].pics.length} projects </div>
                <div className="col col-sm-12">
                  <img
                  src= {`./images/gallery/${projects.projects[proNum].name}/${projects.projects[proNum].pics[phNum]}`}
                  />
                </div>
              </div>
              <br />
              <div className="name col col-sm-12">  <h3 className="colored">{projects.projects[proNum].name}</h3> </div>
              <div className="des col col-sm-12">
                <p>{projects.projects[proNum].des}</p>
                <div className="lans">
                  {projects.projects[proNum].lan.map((lan) => {
                    return <p key={lan} className="lan">{lan}</p>
                  })}
                </div>
              </div>
              <br />
              <div className="link col col-sm-12">
                  <p> {projects.projects[proNum].date} </p>
                  <a href={`https://${projects.projects[proNum].link}`} target="_blank" className="float-end" > Link </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Projects;
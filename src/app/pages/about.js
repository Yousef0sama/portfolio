"use client"

import Image from "next/image";
import { useState, useContext } from "react";
import { ProjectsContext } from "../page";


function About() {

  const projects = useContext(ProjectsContext);

  let startDate = 2022,
    currentDate = new Date(),
    date = currentDate.getFullYear() - startDate,
    pro = projects.projects.length;

  if (date < 10) {
    date = `0${date}`
  }

  if (pro < 10) {
    pro = `0${pro}`
  }

  const FS = [
    {
      id : 1,
      skill : "HTML5"
    },
    {
      id : 2,
      skill : "CSS3"
    },
    {
      id : 3,
      skill : "JavaScript"
    }, 
    {
      id : 4,
      skill : "React JS"
    },
    {
      id : 5,
      skill : "Next JS"
    },
    {
      id : 6,
      skill : "Bootstrap"
    }
  ],
    BS = [
      {
        id : 1,
        skill : "Node JS"
      }, 
      {
        id : 2,
        skill : "Express JS"
      }, 
      {
        id : 3,
        skill : "MySQL"
      }, 
      {
        id : 4,
        skill : "JSON"
      }, 
      {
        id : 5,
        skill : "AJAX"
      }
    ],
    WS = [
      {
        id : 1,
        skill : "HTML5"
      }, 
      {
        id : 2,
        skill : "CSS3"
      }, 
      {
        id : 3,
        skill : "Photoshop"
      } 
    ],
    [showFS, setShowFS] = useState(false),
    [showBS, setShowBS] = useState(false),
    [showDS, setShowDS] = useState(false);

  const ShowFS = () => {
    if (showFS) {
      setShowFS(false);
    } else {
      setShowFS(true);
    }
  }

  const ShowBS = () => {
    if (showBS) {
      setShowBS(false);
    } else {
      setShowBS(true);
    }
  }

  const ShowDS = () => {
    if (showDS) {
      setShowDS(false);
    } else {
      setShowDS(true);
    }
  }

    return (
      <>
        <div className="container about">
          <div className="row">

            <div className="col col-sm-12 head">
              <h2 className="colored">About me</h2>
            </div>

            <div className="col col-md-6 col-sm-12">
              <div className="pic float-md-end float-sm-none">
                <img
                  src="./images/profile.png"
                  alt="profile pic"
                />
              </div>
            </div>

            <div className="col col-lg-6 col-md-6 col-sm-12">
              <div className="row">

                <div className="col col-sm-12">
                  <div className="dis">
                    <p>
                    web developer with extensive knowledege and expereince since <span className="colored">{startDate}</span>, working in <span className="colored">Fornt-end</span> &amp; <span className="colored">Back-end</span> development.
                    </p>

                    <div className="row experince">
                      <div className="col col-sm-6">
                        {currentDate.getFullYear() - startDate == 1 && <p> <span className="plus">+</span><span className="ex colored">{`${date}`}</span> <br /> year <br /> experience </p>}
                        {currentDate.getFullYear() - startDate > 1 && <p> <span className="plus">+</span><span className="ex colored">{`${date}`}</span> <br /> years <br /> experience </p>}
                        {date == null && <p></p>}
                      </div>
                      <div className="col col-sm-6">
                        <p><span className="ex colored">{`${pro}`}</span> <br /> projects <br /> compeleted </p>
                      </div>
                      <div className="col col-sm-12">
                        <a href="#" download>Download CV <span className="float-end"><i className="bi bi-cloud-arrow-down-fill"></i></span></a>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
          <div className="container service">
            <div className="row">
              <div className="col col-sm-12 head">
                <h2 className="colored">Services</h2>
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12" onClick={() => { ShowFS();}}>
                {
                  !showFS &&
                  <div className="con">
                      <span><i className="bi bi-code"></i></span>
                      <p>Front-end Development</p>
                  </div>
                }
                  {
                    showFS &&
                    <div className="skills">
                      <p>
                          <h4>Used Skills</h4>
                        {
                          FS.map((skill) => {
                            return (
                              <span key={skill.id}>{skill.skill}</span>
                            );
                          })
                        }
                      </p>
                    </div>
                  }
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-12" onClick={() => { ShowBS();}}>
                {
                  !showBS &&
                  <div className="con">
                      <span><i className="bi bi-database"></i></span>
                      <p>Back-end Development</p>
                  </div>
                }
                  {
                    showBS &&
                    <div className="skills">
                      <p>
                          <h4>Used Skills</h4>
                        {
                          BS.map((skill) => {
                            return (
                              <span key={skill.id}>{skill.skill}</span>
                            );
                          })
                        }
                      </p>
                    </div>
                  }
              </div>
              <div className="col col-lg-4 col-md-12 col-sm-12" onClick={() => { ShowDS();}}>
                {
                  !showDS &&
                  <div className="con">
                      <span><i className="bi bi-brush-fill"></i></span>
                      <p>Web Design</p>
                  </div>
                }
                  {
                    showDS &&
                    <div className="skills">
                      <p>
                          <h4>Used Skills</h4>
                        {
                          WS.map((skill) => {
                            return (
                              <span key={skill.id}>{skill.skill}</span>
                            );
                          })
                        }
                      </p>
                    </div>
                  }
              </div>
            </div>
          </div>
        </>
    )
}

export default About;
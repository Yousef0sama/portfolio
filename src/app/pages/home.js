"use client"

import Image from "next/image";
import { useContext } from "react";
import { PageContext } from "../page";

function Home() {

  const page = useContext(PageContext);

    return (
      <div className='container home'>
        <div className="row BS">
          <div className="col col-sm-6">
            <div className="con">
              <div className="info">
                <h2>Hello my name is <span className="colored">Yousef Osama</span>.</h2>
                <br />
                <p><span className="colored">front-end</span> and <span className="colored">back-end</span> developer.</p>
                <br />
                <span className="btn" onClick={()=>{page.setPage("Contact")}}> contact me </span>
                <br />
                <span className="icons">
                  <span className="float-start">
                    <a href="https://www.linkedin.com/in/yousef-osama-569677242/" target="_blank"> <i class="bi bi-linkedin"></i> </a>
                  </span>
                  <span className="float-end">
                    <a href="https://github.com/Yousef0sama" target="_blank"> <i class="bi bi-github"></i> </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="col col-sm-6">
            <div className="con">
              <div className="pic">
                <img
                  src="./images/profile.png"
                  alt="profile pic"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row SS">
          <div className="con">
            <div className="col col-sm-12">
              <div className="pic">
                <img
                  src="./images/profile.png"
                  alt="profile pic"
                  />
              </div>
            </div>
            <div className="col col-sm-12">
              <div className="info">
                <h2>Hello my name is <span className="colored">Yousef Osama</span>.</h2>
                <br />
                <p><span className="colored">front-end</span> and <span className="colored">back-end</span> developer.</p>
                <br />
                <span className="btn" onClick={()=>{page.setPage("Contact")}}> contact me </span>
                <br />
                <span className="icons">
                  <span className="float-start">
                    <a href="https://www.linkedin.com/in/yousef-osama-569677242/" target="_blank"> <i class="bi bi-linkedin"></i> </a>
                  </span>
                  <span className="float-end">
                    <a href="https://github.com/Yousef0sama" target="_blank"> <i class="bi bi-github"></i> </a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;
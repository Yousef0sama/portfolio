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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;
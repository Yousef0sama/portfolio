"use client";

import { useState, useContext } from "react";

import { HeaderContext } from "../page";



function Header() {

  const header = useContext(HeaderContext);

  const [sett, setSett] = useState("cls")

  const open = () => {
    if (screen.width < 767.9) {
      if (header.menu === "") {
        header.setMenu("open")
      } else {
        header.setMenu("")
      }
    }
  }

  const change = () => {
    if (sett === "opn") {
      setSett("cls")
    } else {
      setSett("opn")
      setTimeout(() => {
        setSett("cls");
      }, 10000)
    }
  }

  return (
    <>
      <div className={`container-fluid header ${header.menu}`}>
        <div className='row'>
          <div className="col-lg-4 col-md-3 d-none d-md-block logo"> {/* logo */}
            <span onClick={() => { header.setPage("Home") }}>Youssef</span>
          </div>
          <div className='col-lg-6 col-md-7 col-sm-12 row pages'> {/* menu */}
            <div className="col col-sm-3" onClick={() => { header.setPage("Home"); header.setMenu("") }}>
              <span className="d-none d-md-block">home</span>
              <span className="d-sm-block d-md-none"><i className="bi bi-house"></i></span>
            </div>
            <div className="col col-sm-3" onClick={() => { header.setPage("About"); header.setMenu("") }}>
              <span className="d-none d-md-block">about</span>
              <span className="d-sm-block d-md-none"><i className="bi bi-info-circle"></i></span>
            </div>
            <div className="col col-sm-3" onClick={() => { header.setPage("Projects"); header.setMenu("") }}>
              <span className="d-none d-md-block">projects</span>
              <span className="d-sm-block d-md-none"><i className="bi bi-layout-text-window-reverse"></i></span>
            </div>
            <div className="col col-sm-3" onClick={() => { header.setPage("Contact"); header.setMenu("") }}>
              <span className="d-none d-md-block">contact me</span>
              <span className="d-sm-block d-md-none"><i className="bi bi-telephone"></i></span>
            </div>
          </div>
        </div>
      </div>
      <div className="sett">
        <div className='d-sm-block d-md-none menu' onClick={()=>{open()}}><i className="bi bi-list"></i></div>
        <div className="Mode"> {/* dark and light mode */}
          {header.mode === "dark" && <div onClick={() => { header.setMode("light") }}><i className="bi bi-sun-fill"></i></div>}
          {header.mode === "light" && <div onClick={() => { header.setMode("dark") }}><i className="bi bi-moon-fill"></i></div>}
        </div>
        <div className="change" onClick={() => {change()}}><i className="bi bi-gear"></i></div>
        <div className={sett}>
          <span className="red" onClick={() => {header.setTheme("red"); setSett("cls")}}></span>
          <span className="blue" onClick={() => {header.setTheme("blue"); setSett("cls")}}></span>
          <span className="green" onClick={() => {header.setTheme("green"); setSett("cls")}}></span>
          <span className="yellow" onClick={() => {header.setTheme("yellow"); setSett("cls")}}></span>
          <span className="purple" onClick={() => {header.setTheme("purple"); setSett("cls")}}></span>
        </div>
      </div>
    </>
  );
}

export default Header;
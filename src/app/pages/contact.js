"use client"


import { useState, useEffect } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");

  const check = () => {
    if (name.length === 0) {
      alert("please input your name");
      return false
    }
    if (mail.length === 0) {
      alert("please input your E-mail");
      return false
    }
    if (!mail.includes("@")) {
      alert("your E-mail is invailed");
      return false;
    }
    if (mail.includes("@") && !mail.includes(".")) {
      alert("your Email is invailed")
      return false
    }
    if (mail.includes(" ")) {
      alert("your E-mail is invailed");
      return false
    }
    if (header.length === 0) {
      alert("please input mail header");
      return false
    }
    if (body.length === 0) {
      alert("please input mail body");
      return false
    }
    return true;
  }

  const send = () => {
    if (check()) {
      window.location.href = `mailto:yousefosama1885@gmail.com?subject=${header}&body=Hello%20my%20name%20is%20${name}%20and%20my%20mail%20is%20${mail}%20and%20this%20is%20my%20massage%20${body}`
    }
  }


    return (
      <div className="contact container-fluid">
        <div className="row">
          <div className="col col-sm-12 head">
            <h2 className="colored">Contact</h2>
          </div>
          <div className="col col-sm-12">
            <div className="con row">
              <div className="col-sm-12">
                <input type="text" className="name" placeholder="name" onChange={(e) => { setName(e.target.value.replace(/ /g, "%20")); }}/>
              </div>
              <div className="col-sm-12">
                <input type="email" required className="email" placeholder="E-mail" onChange={(e) => { setMail(e.target.value); }}/>
              </div>
              <div className="col-sm-12">
                <input type="text" className="Header" placeholder="Header" onChange={(e) => { setHeader(e.target.value.replace(/ /g, "%20")); }}/>
              </div>
              <div className="col-sm-12">
                <textarea type="text" className="subject" id="sub" placeholder="Body" onChange={(e) => { setBody(e.target.value.replace(/ /g, "%20")); }}/>
              </div>
              <div className="col-sm-12">
                <button className="btn" onClick={() => { send(); }}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contact;
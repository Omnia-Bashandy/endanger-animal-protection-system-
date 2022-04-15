import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";




const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
  const handleToggle = ()=> {
    setToggle(!toggle)
  }
  function boxHandler() {
    setToggle(false)
  }
  return (
    <>
      <nav>
        <div className="logo">
        <img src={require("./logo.jpg")} alt="logo" className="logo"></img>
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
          <li>
          <i class="fas fa-edit"></i>
            <Link href="#" onClick={boxHandler} to="/Mange">
              Mange
            </Link>
          </li>
          <li>
          <i class="fas fa-bell fs"></i>
            <Link onClick={boxHandler} to="/Notification">
            Notification
            </Link>
          </li>
          <li>
          <i class="fas fa-search fs"></i>
            <Link onClick={boxHandler} to="/Monitoring">
            Monitoring
            </Link>
          </li>
          <li>
          <i class="far fa-file-alt fs"></i>
            <Link onClick={boxHandler} to="/Emergency">
            Emergency
            </Link>
          </li>
          {/* <li>
          <i class="fas fa-user-alt fs"></i>
            <Link onClick={boxHandler} to="/">
              Mange Users
            </Link>
          </li> */}
          <li>
          <i class="fas fa-print fs"></i>
            <Link onClick={boxHandler} to="/Reporting">
              Reporting
            </Link>
          </li>
          <li>
          <i class="far fa-user-circle fs"></i>
            <Link onClick={boxHandler} to="/Welcome">
            Welcome
            </Link>
          </li>
          
        </ul>
        <div onClick={handleToggle} className="toggle-button">
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;
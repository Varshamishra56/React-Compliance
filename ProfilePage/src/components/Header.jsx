import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS for components like dropdowns

const Header = () => {
  const [iscollapsed, setcollapsed] = useState(true);
  const handletoggle = () => {
    setcollapsed(!iscollapsed);
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Never expand
      </a>
      <button
        className={`navbar-toggler ${iscollapsed ? 'collapsed' : ''}`}
        type="button"
        data-toggle="collapse"
        onClick={handletoggle}
        data-target="#navbarsExample01"
        aria-controls="navbarsExample01"
        aria-expanded={!iscollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${iscollapsed ? '' : 'show'}`} id="navbarsExample01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#" style={{color:"white"}}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:"white"}}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#" style={{color:"white"}}>
            EducationExperience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:"white"}}>
            Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:"white"}}>
            Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:"white"}}>
            ContactMe
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

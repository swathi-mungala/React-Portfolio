import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark" id="mainNav">
         <div className="container">
            <a className="navbar-brand" href="#page-top">
               <h1>Swathi Munagala</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <a className="nav-link text-white" href="#about">Home</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link text-white" href="#work">Projects</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link text-white" href="#contact">Contact</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
  );
}

export default Navbar;

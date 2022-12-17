import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav id="nav" className='navbar navbar-expand-lg sticky-top bg-dark py-3 mb-5'>
        <div className="rc-container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-2 name">
              <a href="#" className='nav-link'>Rob Anthony Curtis</a>
            </div>
            <div className="col-8 d-none d-lg-block">
              <div className="row justify-content-end">
                <div className="col-2 text-center">
                  <a href="#about" className="nav-link">About</a>
                </div>
                <div className="col-2 text-center">
                  <a href="#projects" className="nav-link">Projects</a>
                </div>
                <div className="col-2 text-center">
                  <a href="#tools" className="nav-link">Tools</a>
                </div>
                <div className="col-2 text-center">
                  <a href="#contact" className="nav-link">Contact Me</a>
                </div>
                <div className="col-2 text-center">
                  <a target='_blank' href="https://drive.google.com/file/d/15IUGGW11ldSWB7EbL7vVnET11Sh034Rn/view?usp=sharing" className="nav-link" rel="noreferrer">Resume</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

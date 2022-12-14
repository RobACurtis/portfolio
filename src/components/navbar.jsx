import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav id="nav" className='navbar navbar-expand-lg bg-dark py-3'>
        <div className="rc-container">
          <div className="row">
            <div className="col-6">
              <a href="#" className='nav-link'>Rob Anthony Curtis</a>
            </div>
            <div className="col-5">
              <div className="row justify-content-between">
                <div className="col-4">
                  <a href="#sign-up" className="nav-link">About</a>
                </div>
                <div className="col-4">
                  <a href="#sign-up" className="nav-link">Projects</a>
                </div>
                <div className="col-4">
                  <a href="#sign-up" className="nav-link">Contact Me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

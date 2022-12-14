import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav id="nav" className='navbar navbar-expand-lg bg-dark fixed-top'>
        <div className="container-fluid">
          <a href="#">Rob Anthony Curtis</a>
          <a href="#sign-up" className="">About</a>
        </div>
      </nav>
    );
  }
}

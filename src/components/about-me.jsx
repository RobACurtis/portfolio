import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <section id='about'>
        <div className="rc-container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-6">
              <h2>Hello! I am Rob,</h2>
              <p> A Full Stack Software Engineer who has a passion for creating web
                applications that will impact others in a positive way.</p>
            </div>
            <div className='col-12 text-center col-lg-5'>
              <img src="images/Robert-Curtis.jpg" alt="Portrait" className='portrait' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

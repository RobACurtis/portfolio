import React from 'react';

export default class Projects extends React.Component {
  render() {
    const appsList = apps.map((item, index) => {
      return (
        <div key={index} className="col-12 col-lg-4 mt-3 mt-lg-0">
          <div className="row justify-content-center text-center">
            <a className='project-link' href={item.href} target='_blank' rel="noreferrer">
              <h4> {item.name} </h4>
              <img src={item.src} alt="" className='project-image'/>
            </a>
            <p className='mt-3'>{item.description} </p>
            <p className='fst-italic'> View On Github
              <a className='nav-link' href={item.github} target='_blank' rel="noreferrer">
                <i className="contact-icon fa-brands fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      );
    });

    return (
      <section id='projects'>
        <div className="rc-container">
          <div className="row justify-content-center">
            <div className="col-12 text-center my-5">
              <h2>Projects</h2>
              <hr></hr>
            </div>
            {appsList}
          </div>
        </div>
      </section>
    );
  }
}

const apps = [
  {
    name: 'surfr-photographer',
    description: 'A web application for surf photographers who want to showcase their photographs to the world.',
    href: 'https://surfr.app',
    github: 'https://github.com/RobACurtis/surfr-photographer',
    src: 'https://surfr-photographer.s3.amazonaws.com/surfr.jpg'
  },
  {
    name: 'Liturgical Calendar',
    href: 'https://robacurtis.github.io/liturgical-calendar/',
    src: 'https://robacurtis.github.io/liturgical-calendar/images/vatican.jpg',
    github: 'https://github.com/RobACurtis/liturgical-calendar',
    description: 'A web application for Catholics who want the liturgical cycle of the Church to be a part of their daily life.'
  },
  {
    name: 'Weather-App',
    href: 'https://github.com/RobACurtis/weather-app',
    src: 'images/weather-app.png',
    github: 'https://github.com/RobACurtis/weather-app',
    description: 'Coding Challenge to make a weather app using fast-api'
  }
];

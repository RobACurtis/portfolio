import React from 'react';

export default class About extends React.Component {
  render() {
    const apps = [
      {
        name: 'surfr',
        href: 'https://surfr.app'
      },
      {
        name: 'weather-app',
        href: 'github.com/weather-app'
      },
      {
        name: 'liturgical-calendar',
        href: 'github.com/robacurtis/liturgical-calendar'
      }
    ];

    const appsList = apps.map((item, index) => {
      return <li key={index}> <a href={item.href} target='_blank' rel="noreferrer">{item.name}</a></li>;
    });

    return (
      <div className="rc-container mt-5">
        <div className="row">
          <div className="col-12">
            <h2>Hey! I am Rob, a Full Stack Web Developer!</h2>
            <h5>Projects</h5>
            <ul>
              {appsList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

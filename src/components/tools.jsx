import React from 'react';

export default class Tools extends React.Component {
  render() {
    const toolsList = tools.map((items, index) => {
      return (
        <div key={index} className="col-6 col-lg-2 mt-5 text-center">
          <img src={items.tool.src} alt={items.tool.title} className='logo' />
          <p className='tool-description'>{items.tool.title}</p>
        </div>
      );
    });

    return (
      <section id='tools'>
        <div className="rc-container">
          <div className="row justify-content-between flex-wrap text-center">
            <h2>Tools</h2>
            <hr></hr>
            {toolsList}
          </div>
        </div>
      </section>
    );
  }
}

const tools = [
  {
    tool: {
      src: 'images/logos/html.png',
      title: 'HTML'
    }
  },
  {
    tool: {
      src: 'images/logos/css.webp',
      title: 'CSS'
    }
  },
  {
    tool: {
      src: 'images/logos/JavaScript-logo.png',
      title: 'JavaScript'
    }
  },
  {
    tool: {
      src: 'images/logos/postgresql.svg.png',
      title: 'PostgreSQL'
    }
  },
  {
    tool: {
      src: 'images/logos//jinja.png',
      title: 'Jinja'
    }
  },
  {
    tool: {
      src: 'images/logos/github.png',
      title: 'Github'
    }
  },
  {
    tool: {
      src: 'images/logos/node.png',
      title: 'NodeJS'
    }
  },
  {
    tool: {
      src: 'images/logos/fastapi.svg',
      title: 'FastAPI'
    }
  },
  {
    tool: {
      src: 'images/logos/python.svg.png',
      title: 'Python'
    }
  },
  {
    tool: {
      src: 'images/logos/mdb.png',
      title: 'MongoDB'
    }
  },
  {
    tool: {
      src: 'images/logos/figma.svg',
      title: 'Figma'
    }
  },
  {
    tool: {
      src: 'images/logos/adobe.png',
      title: 'Abobe Suite'
    }
  }
];

import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <footer id="contact" className='bg-dark'>
        <div className="rc-container text-center">
          <div className="row justify-content-center">
            <div className="col-12 text-white mb-5">
              <h3 className='footer-title mb-5'>Contact Me</h3>
              <a href='mailto:robanthonycurtis@gmail.com' className=' nav-link'>
                Robanthonycurtis@gmail.com
              </a>
            </div>
            <div className="col-12 col-lg-4 text-white text-center mt-3">
              <div className="row justify-content-center">
                <a className='nav-link col-3' target='_blank' href='https://github.com/RobACurtis' rel="noreferrer">
                  <i className="contact-icon fa-brands fa-github"></i>
                </a>
                <a className='nav-link col-3' target='_blank' href='https://www.linkedin.com/in/robanthonycurtis/' rel="noreferrer">
                  <i className="contact-icon fa-brands fa-linkedin"></i>
                </a>
                <a target='_blank'
                  href="https://drive.google.com/file/d/15IUGGW11ldSWB7EbL7vVnET11Sh034Rn/view?usp=sharing"
                  className="nav-link col-3"
                  rel="noreferrer">
                  <i className="contact-icon fa-solid fa-file"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

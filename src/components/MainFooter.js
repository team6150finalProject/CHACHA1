import React from 'react';

class MainFooter extends React.Component {
  render() {
    return (
      <div>
        <footer id="footer">
          <div className="footer-nav">
            <div id="footer-logo">
              <img src={process.env.PUBLIC_URL + "/img/logo.jpg"} className="rounded-circle" alt="logo" width="70" height="70" />
            </div>
            <div>
              <br />
              <ul className="nav justify-content-end">

                <li className="nav-item">
                  <a className="nav-link active" href="#navbar">Home</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#tea-gallery">Our Tea</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#story">Our Store</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>
              <br /> Copyright &copy; 2021 CHACHA
                  <br /> CONTACT EMAIL:
                  <a href="mailto:">chachatea@gmail.com</a>
              <br />
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default MainFooter;
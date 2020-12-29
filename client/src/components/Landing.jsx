import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faTablet, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import thumbnails from '../thumbnails/grad-cap.png';

const Landing = () => {
  
  return (
    <div>
      <header className="showcase">
        <div className="showcase-top">
          <h1>LOGO</h1>
          <Link to="/sign-in" className="btn btn-primary">Sign In</Link>
        </div>
        <div className="showcase-content">
          <h1>Invest in your future</h1>
          <p>Watch anywhere. Learn what you need to know</p>
          <Link to="/sign-in" className="btn btn-primary btn-lg">Sign in to watch courses</Link>
        </div>
      </header>

      <section className="tabs">
        <div className="container">
          <div id="tab-1" className="tab-item tab-border">
            <FontAwesomeIcon className="fa-3x" icon={faBan}/>
            <p className="hide-sm">Cancel anytime</p>
          </div>
          <div id="tab-2" className="tab-item">
            <FontAwesomeIcon className="fa-3x" icon={faTablet}/>
            <p className="hide-sm">Watch anywhere</p>
          </div>
          <div id="tab-3" className="tab-item">
            <FontAwesomeIcon className="fa-3x" icon={faGraduationCap}/>
            <p className="hide-sm">Learn Everything</p>
          </div>
        </div>
      </section>

      <section className="tab-content">
        <div className="container">
          <div id="tab-1-content" className="tab-content-item show">
            <div className="tab-1-content-inner">
              <div>
                <p className="text-lg">
                  Watch all our courses to help you learn what you need to earn your certifiaction
                </p>
                <Link to="/sign-in" className="btn btn-primary btn-lg">Sign in to watch courses</Link>
              </div>
              <img src={thumbnails} alt=""/>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer">
          <p>Questions? Call 1-866-579-7172</p>
          <div className="footer-cols">
            <ul>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Investor Relations</a></li>
              <li><a href="/">Ways To Watch</a></li>
              <li><a href="/">Corporate Information</a></li>
              <li><a href="/">Netflix Originals</a></li>
            </ul>
            <ul>
              <li><a href="/">Help Center</a></li>
              <li><a href="/">Jobs</a></li>
              <li><a href="/">Terms Of Use</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
            <ul>
              <li><a href="/">Account</a></li>
              <li><a href="/">Redeem Gift Cards</a></li>
              <li><a href="/">Privacy</a></li>
              <li><a href="/">Speed Test</a></li>
            </ul>
            <ul>
              <li><a href="/">Media Center</a></li>
              <li><a href="/">Buy Gift Cards</a></li>
              <li><a href="/">Cookie Preferences</a></li>
              <li><a href="/">Legal Notices</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
import React, {useState} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faTablet, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Link
} from "react-router-dom";
import thumbnails from '../thumbnails/grad-cap.png';

const Landing = () => {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  
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

      <section class="tabs">
        <div class="container">
          <div id="tab-1" class="tab-item tab-border">
            <FontAwesomeIcon className="fa-3x" icon={faBan}/>
            <p class="hide-sm">Cancel anytime</p>
          </div>
          <div id="tab-2" class="tab-item">
            <FontAwesomeIcon className="fa-3x" icon={faTablet}/>
            <p class="hide-sm">Watch anywhere</p>
          </div>
          <div id="tab-3" class="tab-item">
            <FontAwesomeIcon className="fa-3x" icon={faGraduationCap}/>
            <p class="hide-sm">Learn Everything</p>
          </div>
        </div>
      </section>

      <section class="tab-content">
        <div class="container">
          <div id="tab-1-content" class="tab-content-item show">
            <div class="tab-1-content-inner">
              <div>
                <p class="text-lg">
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
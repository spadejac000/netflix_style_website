import './App.css';

function App() {

  const tabItems = document.querySelectorAll('.tab-item');
  const tabContentItems = document.querySelectorAll('.tab-content-item');

  // select tab content item
  function selectItem(e) {
    removeBorder()
    removeShow()
    // Add border to current tab
    this.classList.add('tab-border')
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    // add show class
    tabContentItem.classList.add('show')
  }

  function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
  }

  function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
  }

  // Listen for tab click
  tabItems.forEach(item => item.addEventListener('click', selectItem))
  
  return (
    <div>
      <header className="showcase">
        <div className="showcase-top">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="The Brand"/>
          <a href="" className="btn btn-rounded">Sign In</a>
        </div>
        <div className="showcase-content">
          <h1>See what's next</h1>
          <p>Watch anywhere. Cancel anytime</p>
          <a href="" className="btn btn-xl">
            Watch Free For 30 Days <i className="fa fa-chevron-right btn-icon"></i>
          </a>
        </div>
      </header>
      <section className="tabs">
        <div className="container">
          <div id="tab-1" className="tab-item tab-border">
            <i className="fa fa-ban fa-3x"></i>
            <p className="hide-sm">Cancel anytime</p>
          </div>
          <div id="tab-2" className="tab-item">
            <i className="fa fa-tablet fa-3x"></i>
            <p className="hide-sm">Watch anywhere</p>
          </div>
          <div id="tab-3" className="tab-item">
            <i className="fa fa-tags fa-3x"></i>
            <p className="hide-sm">Pick your price</p>
          </div>
        </div>
      </section>

      <section className="tab-content">
        <div className="container">
          {/* tab content 1 */}
          <div id="tab-1-content" className="tab-content-item show">
            <div className="tab-1-content-inner">
              <div>
                <p className="text-lg">
                  If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.
                </p>
                <a href="" className="btn btn-lg">Watch Free For 30 Days</a>
              </div>
              <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt=""/>
            </div>
          </div>
          
          <div id="tab-2-content" className="tab-content-item">
            <div className="tab-2-content-top">
              <p className="text-lg">
                Watch TV shows and movies anytime, anywhere - personalized for you.
              </p>
              <a href="" className="btn btn-lg">Watch Free For 30 Days</a>
            </div>
            <div className="tab-2-content-bottom">
              <div>
                <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt=""/>
                <p className="text-md">Watch on your TV</p>
                <p className="text-dark">Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray</p>
              </div>

              <div>
                <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt=""/>
                <p className="text-md">Watch instantly or download later</p>
                <p className="text-dark">Available on phone and tablet, wherever you go.</p>
              </div>

              <div>
                <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt=""/>
                <p className="text-md">Use any computer</p>
                <p className="text-dark">Watch right on Netflix.com</p>
              </div>
            </div>
          </div>

          <div id="tab-3-content" className="tab-content-item">
            <div className="text-center">
              <p className="text-lg">Choose one plan and watch everything on Netflix</p>
              <a href="" className="btn btn-lg">Watch Free For 30 Days</a>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly price after free months ends on 6/19/19</td>
                  <td>$8.99</td>
                  <td>$12.99</td>
                  <td>$15.99</td>
                </tr>
                <tr>
                  <td>HD Available</td>
                  <td><i className="fa fa-times"></i></td>
                  <td><i className="fa fa-check"></i></td>
                  <td><i className="fa fa-check"></i></td>
                </tr>
                <tr>
                  <td>Screens you can watch on at the same time</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Watch on your laptop, TV, phone and tablet</td>
                  <td><i className="fa fa-check"></i></td>
                  <td><i className="fa fa-check"></i></td>
                  <td><i className="fa fa-check"></i></td>
                </tr>
                <tr>
                  <td>Unlimited movies and TV shows</td>
                  <td><i className="fa fa-check"></i></td>
                  <td><i className="fa fa-check"></i></td>
                  <td><i className="fa fa-check"></i></td>
                </tr>
                <tr>
                  <td>Cancel anytime</td>
                  <td><i className="fa fa-check"></i></td>
                  <td><i className="fa fa-check"></i></td>
                  <td><i className="fa fa-check"></i></td>
                </tr>
                <tr>
                  <td>First month free</td>
                  <td><i className="fa fa-check"></i></td>
                  <td><i className="fa fa-check"></i></td>
                  <td><i className="fa fa-check"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Questions? Call 1-866-579-7172</p>
        <div className="footer-cols">
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Ways To Watch</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Netflix Originals</a></li>
          </ul>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Redeem Gift Cards</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Speed Test</a></li>
          </ul>
          <ul>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Buy Gift Cards</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Legal Notices</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;

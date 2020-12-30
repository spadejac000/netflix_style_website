import './App.css';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import VideoPlay from './components/VideoPlay';
import VideoList from './components/VideoList';
import VideoList2 from './components/VideoList2';
import VideoSearch from './components/VideoSearch';
import Settings from './components/Settings';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {VideoProvider} from './VideoContext';
import {SearchProvider} from './SearchContext';

function App() {
  return(
    <VideoProvider>
      <SearchProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/sign-in" component={SignIn}/>
            <Route exact path="/sign-up" component={SignUp}/>
            {/* <Route exact path="/video-list" component={VideoList}/> */}
            <Route exact path="/video-list" component={VideoList2}/>
            <Route exact path="/video-play" component={VideoPlay}/>
            <Route exact path="/video-search" component={VideoSearch}/>
            <Route exact path="/settings" component={Settings}/>
          </Switch>
        </Router>
      </SearchProvider>
    </VideoProvider>
  )
}

export default App;

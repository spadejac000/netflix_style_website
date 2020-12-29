import './App.css';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import VideoPlay from './components/VideoPlay';
import VideoList from './components/VideoList';
import VideoSearch from './components/VideoSearch';
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
            <Route exact path="/video-list" component={VideoList}/>
            <Route exact path="/video-play" component={VideoPlay}/>
            <Route exact path="/video-search" component={VideoSearch}/>
          </Switch>
        </Router>
      </SearchProvider>
    </VideoProvider>
  )
}

export default App;

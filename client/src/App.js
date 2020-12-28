import './App.css';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import VideoPlay from './components/VideoPlay';
import VideoList from './components/VideoList';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {VideoProvider} from './VideoContext';

function App() {
  return(
    <VideoProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/sign-in" component={SignIn}/>
          <Route exact path="/video-list" component={VideoList}/>
          <Route exact path="/video-play" component={VideoPlay}/>
        </Switch>
      </Router>
    </VideoProvider>
  )
}

export default App;

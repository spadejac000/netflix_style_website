import './App.css';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import Video from './components/Video';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/sign-in" component={SignIn}/>
        <Route exact path="/video" component={Video}/>
      </Switch>
    </Router>
  )
}

export default App;

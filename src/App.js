// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import NavBar from './Components/NavBar';
import NewsTodayBody from './Components/NewsTodayBody';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [progress, setprogress] = useState(0)
  const progressfunc = ( progress) =>{
    setprogress(progress)
  }
  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar
        color='#4facfe'
        progress={progress}
      />
        <Switch>
          <Route exact path="/"><NewsTodayBody progressfunc={progressfunc} key="general" category="general" /></Route>
          <Route exact path="/business"><NewsTodayBody progressfunc={progressfunc} key="business" category="business" /></Route>
          <Route exact path="/entertainment"><NewsTodayBody progressfunc={progressfunc} key="entertainment" category="entertainment" /></Route>
          <Route exact path="/health"><NewsTodayBody progressfunc={progressfunc} key="health" category="health" /></Route>
          <Route exact path="/science"><NewsTodayBody progressfunc={progressfunc} key="science" category="science" /></Route>
          <Route exact path="/sports"><NewsTodayBody progressfunc={progressfunc} key="sports" category="sports" /></Route>
          <Route exact path="/technology"><NewsTodayBody progressfunc={progressfunc} key="technology" category="technology" /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

// fd5481cadc5f45bb95311a876b6f4462

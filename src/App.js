// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import NewsTodayBody from './Components/NewsTodayBody';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"><NewsTodayBody key="general" category="general" /></Route>
          <Route exact path="/business"><NewsTodayBody key="business" category="business" /></Route>
          <Route exact path="/entertainment"><NewsTodayBody key="entertainment" category="entertainment" /></Route>
          <Route exact path="/health"><NewsTodayBody key="health" category="health" /></Route>
          <Route exact path="/science"><NewsTodayBody key="science" category="science" /></Route>
          <Route exact path="/sports"><NewsTodayBody key="sports" category="sports" /></Route>
          <Route exact path="/technology"><NewsTodayBody key="technology" category="technology" /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

// fd5481cadc5f45bb95311a876b6f4462

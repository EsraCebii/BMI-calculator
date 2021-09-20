import Home from "./components/Home";
import Result from "./components/Result";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/"><h1>Body Mass Index </h1></Link>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result" component={Result} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

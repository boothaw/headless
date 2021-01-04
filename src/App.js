import logo from './logo.svg';
import './App.css';
import Blog from "./Blog.js";
import Article from "./Article.js";
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Blog />
          </Route>
          <Route path="/blog/:articleSlug">
            <Article />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

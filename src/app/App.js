import React, { Component } from 'react';
import './App.css';

// Import Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import Pages
import {
  PageAbout,
  PageTodo
} from '../pages'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Todo</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={PageTodo} />
          <Route path="/about" component={PageAbout} />
        </div>
      </Router>
    );
  }
}

export default App;

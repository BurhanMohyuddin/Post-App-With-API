import React, { Component } from "react";
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import NewPost from '../App/NewPost/NewPost';
import Posts from '../App/Posts/Posts';
import FullPost from '../App/FullPost/FullPost';

import './App.css';

class App extends Component {
 
  render() {
    
    return (
      <BrowserRouter>
      <div className="App">

        <header>
          <nav className="navbar">
            <NavLink
              to="/"
              exact
              activeClassName="navbar__link--active"
              className="navbar__link"
            >
              <h5>Home</h5>
            </NavLink>

            <NavLink
              to="/new-post"
              activeClassName="navbar__link--active"
              className="navbar__link"
            >
              <h5>New Post</h5>
            </NavLink>
          </nav>
        </header>

        <Route path="/" exact component={Posts}/>
        <Switch>
        <Route path="/new-post" component={NewPost} />
        <Route path="/FullPost/:id" exact component={FullPost}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

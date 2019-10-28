import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Postspage from './pages/PostsPage';
import NewPostpage from './pages/NewPostPage';

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Link to='/posts'>Posts </Link>
        <Link to='/newPost'>New Post </Link>
        <Switch>
          <Route exact path='/posts' component={Postspage} />
          <Route exact path='/newPost' component={NewPostpage} />
        </Switch>
      </Router>
    )
  }

}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Postspage from './pages/PostsPage';
import NewPostpage from './pages/NewPostPage';
import NavigationComponent from './components/NavigationComponent';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import './assets/bootstrap.min.css';
import { getJwt } from './helper/JWT'

import './App.css';
class App extends React.Component {
  componentDidMount() {
    const token = getJwt();
    if (!token) {
      return (
        <Redirect to="/login" />
      )
    }
    return (
      <Route exact path='/posts' component={Postspage} />
    );
  }

  render() {
    return (
      <Router>
        <NavigationComponent />
        <Switch>
          <Route exact path='/posts' component={Postspage} />
          <Route exact path='/newPost' component={NewPostpage} />
          <Route exact path='/edit/:id' component={NewPostpage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/login' component={LoginPage} />
        </Switch>
      </Router>
    )
  }

}

export default App;

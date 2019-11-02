import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './store/AuthContext';
import { PostProvider } from './store/PostsContext'
import { PrivateRoute } from './components/PrivateRoute';
import NavigationComponent from './components/NavigationComponent';
import Postspage from './pages/PostsPage';
import NewPostpage from './pages/NewPostPage';
import UserPostpage from './pages/UserPostPages';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import './assets/bootstrap.min.css';

import './App.css';
class App extends React.Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <NavigationComponent />
          <PostProvider>
            <Switch>
              <Route exact path='/' component={Postspage} />
              <PrivateRoute exact path='/newPost' component={NewPostpage} />
              <PrivateRoute exact path='/userPosts' component={UserPostpage} />
              <Route exact path='/edit/:id' component={NewPostpage} />
              <Route exact path='/signup' component={SignUpPage} />
              <Route exact path='/login' component={LoginPage} />
            </Switch>
          </PostProvider>
        </AuthProvider>
      </Router>
    )
  }

}

export default App;

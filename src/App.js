import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// Importing context
import { AuthProvider } from './store/AuthContext';
import { PostProvider } from './store/PostsContext'
import { CommentProvider } from './store/CommentsContext';
//Importing routes and pages
import NavigationComponent from './components/RoutesComponents/NavigationComponent';
import { PrivateRoute } from './components/RoutesComponents/PrivateRoute';
// Importing Pages
import HomePostsPage from './pages/HomePostsPage';
import NewPostpage from './pages/NewPostPage';
import PostDetailsPage from './pages/PostDetailsPage';
import UserPostpage from './pages/UserPostPages';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
//Importing Css
//import './assets/bootstrap.min.css';

import './App.css';
class App extends React.Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <NavigationComponent />
          <PostProvider>
            <CommentProvider>
              <Switch>
                <Route exact path='/' component={HomePostsPage} />
                <PrivateRoute exact path='/newPost' component={NewPostpage} />
                <PrivateRoute exact path='/userPosts' component={UserPostpage} />
                <Route exact path='/postDetails/:handle' component={PostDetailsPage} />
                <Route exact path='/edit/:id' component={NewPostpage} />
                <Route exact path='/signup' component={SignUpPage} />
                <Route exact path='/login' component={LoginPage} />
              </Switch>
            </CommentProvider>
          </PostProvider>
        </AuthProvider>
      </Router>
    )
  }

}

export default App;

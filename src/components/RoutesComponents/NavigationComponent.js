import React, { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

export default function NavigationComponent() {
  const { handleLogout, user } = useContext(AuthContext);
  return (

    <Navbar bg="light" expand="lg" >
      <Navbar.Brand>
        <Link to="/"><h4>Hacker News</h4> </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link >
            <Link to='/userPosts'>My Posts</Link>
          </Nav.Link>
          <Nav.Link >
            <Link to="/newPost"  >New Post</Link>
          </Nav.Link>

          {!user && <>
            <Nav.Link >
              <Link to="/login" >Login</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/signup"  >Sign Up</Link>
            </Nav.Link>
          </>}
          {user ? <Nav.Link >
            <Link className="nav-Link" onClick={handleLogout} >Logout</Link>
          </Nav.Link> : null}

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar >






  )
}
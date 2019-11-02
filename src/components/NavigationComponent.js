import React,{useContext} from 'react';
import {AuthContext} from '../store/AuthContext';
import {Link} from 'react-router-dom';

export default function NavigationComponent() {
    const{handleLogout}=useContext(AuthContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Hacker News</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto d-flex justify-content-between">
                        <li className="nav-item active">
                            <Link className="nav-Link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link  to='/posts' className="nav-Link" >Posts </Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-Link" to="/newPost"  >New Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link" to="/login" >Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link" to="/signup" >Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link" onClick={handleLogout} >Logout</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
            )
}
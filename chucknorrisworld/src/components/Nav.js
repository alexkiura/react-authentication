import React , { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Chuck Norris World</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Food Jokes</Link>
            </li>
            <li>
              <Link to="/special">Celebrity Jokes</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
          </ul>
        </div>
      </nav>
    )
  }    
}
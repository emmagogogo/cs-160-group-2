import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
//import {userType} from '../../middleware/userType';


const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const userType = JSON.parse(localStorage.getItem('type'));
  //console.log(userType);
  const authLinksApplicant = (
    <ul>
      <li>
        <Link to="/profiles">Network</Link>
      </li>
      <li>
      <Link to="/jobs">Jobs</Link>
      </li>
      {/* <li>
      <Link to="/postjob">Post Job</Link>
      </li> */}
      <li>
      <Link to="/applied">Applied</Link>
      </li>
      <li>
      <Link to="/messenger">Messages</Link>
      </li>
      <li>
        <Link to="/posts">Blogs</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const authLinksRecruiter = (
    <ul>
      <li>
        <Link to="/profiles">Network</Link>
      </li>
      <li>
      <Link to="/jobs">Jobs</Link>
      </li>
      <li>
      <Link to="/postjob">Post Job</Link>
      </li>
      <li>
      <Link to="/posted">Posted</Link>
      </li>
      <li>
      <Link to="/messenger">Messages</Link>
      </li>
      <li>
        <Link to="/posts">Blogs</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );


  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Network</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> YAJW
        </Link>
      </h1>
      <div id='search-bar'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <form className="example" action="/jobs">
            <input type="text" placeholder="Enter a job title" name="search" />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
        {/* <Fragment>{isAuthenticated ? authLinksRecruiter : guestLinks}</Fragment> */}
      {/* <Fragment>{(isAuthenticated && userType === 'recruiter') ? authLinksRecruiter: ((isAuthenticated && userType === 'applicant') ? authLinksApplicant :  guestLinks)}</Fragment> */}
      <Fragment>{isAuthenticated ? ((userType === 'recruiter') ? authLinksRecruiter : authLinksApplicant) : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);

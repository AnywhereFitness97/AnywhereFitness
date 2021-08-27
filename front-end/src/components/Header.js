import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { setCurrentUser } from "../actions/actions";

function Header(props) {
  const pathname = useLocation().pathname;

  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    props.setCurrentUser({ username: null, password: null });
  };

  return (
    <nav className="navbar py-3 bg-dark navbar-dark navbar-expand-md">
      <div className="container navbar-container">
        <a className="navbar-brand">Anywhere Fitness</a>

        <button
          className="navbar-toggler ms-auto"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbar-menu">
          <ul className="navbar-nav ms-auto">
            {pathname === "/" && (
              <li className="nav-item m-auto">
                <Link to="/register" className="text-decoration-none">
                  <a className="nav-link">Register</a>
                </Link>
              </li>
            )}

            {pathname === "/register" && (
              <li className="nav-item m-auto">
                <Link to="/" className="text-decoration-none">
                  <a className="nav-link">Already Registered? Login</a>
                </Link>
              </li>
            )}

            {pathname.toLowerCase().includes("/instructor") && (
              <>
                <li className="nav-item m-auto">
                  <Link to="/instructor" className="text-decoration-none">
                    <a className="nav-link">Your Classes</a>
                  </Link>
                </li>
                <li className="nav-item m-auto">
                  <Link to="/instructor/add" className="text-decoration-none">
                    <a className="nav-link">Create Class</a>
                  </Link>
                </li>
              </>
            )}

            {pathname.toLowerCase().includes("/client") && (
              <>
                <li className="nav-item m-auto">
                  <Link to="/client/upcoming" className="text-decoration-none">
                    <a className="nav-link">Upcoming Classes</a>
                  </Link>
                </li>
                <li className="nav-item m-auto">
                  <Link to="/client" className="text-decoration-none">
                    <a className="nav-link">Available Classes</a>
                  </Link>
                </li>
              </>
            )}

            {pathname !== "/" && pathname !== "/register" && (
              <li className="nav-item m-auto">
                <Link
                  to="/"
                  className="text-decoration-none"
                  onClick={handleLogout}
                >
                  <a className="nav-link">Logout</a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default connect(null, { setCurrentUser })(Header);

import React from "react";
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
        <button className="navbar-brand btn">Anywhere Fitness</button>

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
                  <button className="nav-link btn">Register</button>
                </Link>
              </li>
            )}

            {pathname === "/register" && (
              <li className="nav-item m-auto">
                <Link to="/" className="text-decoration-none">
                  <button className="nav-link btn">
                    Already Registered? Login
                  </button>
                </Link>
              </li>
            )}

            {pathname.toLowerCase().includes("/instructor") && (
              <>
                <li className="nav-item m-auto">
                  <Link to="/instructor" className="text-decoration-none">
                    <button className="nav-link btn">Your Classes</button>
                  </Link>
                </li>
                <li className="nav-item m-auto">
                  <Link to="/instructor/add" className="text-decoration-none">
                    <button className="nav-link btn">Create Class</button>
                  </Link>
                </li>
              </>
            )}

            {pathname.toLowerCase().includes("/client") && (
              <>
                <li className="nav-item m-auto">
                  <Link to="/client/upcoming" className="text-decoration-none">
                    <button className="nav-link btn">Upcoming Classes</button>
                  </Link>
                </li>
                <li className="nav-item m-auto">
                  <Link to="/client" className="text-decoration-none">
                    <button className="nav-link btn">Available Classes</button>
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
                  <button className="nav-link btn">Logout</button>
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

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Header(props) {
  const pathname = useLocation().pathname;
  console.log(pathname);

  return (
    <nav className="navbar py-3 bg-dark navbar-dark navbar-expand-sm">
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
                  <a className="nav-link">Already Registered? Login.</a>
                </Link>
              </li>
            )}

            {pathname !== "/" && pathname !== "/register" && (
              <li className="nav-item m-auto">
                <Link to="/" className="text-decoration-none">
                  <a className="nav-link">Logout</a>
                </Link>
              </li>
            )}

            {pathname.includes("/instructor") && (
              <li className="nav-item m-auto">
                <Link to="/instructor/add" className="text-decoration-none">
                  <a className="nav-link">Add Class</a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

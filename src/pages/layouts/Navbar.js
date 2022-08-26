import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ProfileContext } from "../../context";
// component
import NavList from "../../components/molecules/NavList";

function Navbar() {
  const ProfileName = React.useContext(ProfileContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top py-3 px-5">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
            {/* Home */}
            <NavList
              className="nav-item mx-2 nav-link active fw-bold"
              href="/"
              labelLink="Home"
              aria-current="page"
            />

            <NavList
              className="nav-item mx-2 nav-link fw-bold"
              href="/add"
              labelLink="Add Recipe"
            />
            <NavList
              className="nav-item mx-2 nav-link fw-bold"
              href="/profile"
              labelLink="Profile"
            />
          </ul>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-warning text-light dropdown-toggle px-4 py-3"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              <small className="me-3 fw-bold fs-6">
                {ProfileName?.name || "Username"}
              </small>
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
              <li>
                <Link to="/login" className="text-decoration-none">
                  <button className="dropdown-item text-center" type="button">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-decoration-none">
                  <button className="dropdown-item text-center" type="button">
                    Register
                  </button>
                </Link>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

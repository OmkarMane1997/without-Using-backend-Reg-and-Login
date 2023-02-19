import React, { useEffect, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Menu() {
  const loginsData = useMemo(() => {
    return localStorage.getItem("Login");
  }, []);
  // console.log(loginsData.length);
  const Navigation = useNavigate();

  const Logout = () => {
    localStorage.setItem("Login", "");
    // window.location('/Login')
    Navigation("/Login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <NavLink className="navbar-brand" to={"/"}>
            Omkar-Geeksynergy
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
              <li className="nav-item">
                <NavLink className="nav-link" to={"Login"}>
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/Registration"}
                >
                  Registration
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Menu;

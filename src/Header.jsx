import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { Link, NavLink } from "react-router-dom";

import logo from "./assets/green_youth_logo.png";
import "./App.css";

export default function Header({ pageTitle }) {
  const navItems = [
    { label: "Home", to: "/", end: true },
    { label: "about us", to: "/About_Us" },
    { label: "What we do", to: "/What_We_Do" },
    { label: "Get Involved", to: "/Get_Involved" },
  ];

  return (
    <>
      {/* Optional page-title strip */}
      {pageTitle && (
        <div className="site-topline">
          {pageTitle}
        </div>
      )}

      <AppBar
        component="header"
        position="static"
        elevation={0}
        className="site-appbar"
      >
        <Toolbar className="site-toolbar">
          {/* Logo */}
          <Link to="/" className="site-logo">
            <img
              src={logo}
              className="logo"
              alt="Green Youth"
            />
          </Link>

          {/* Navigation */}
          <nav className="site-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `site-nav-link${isActive ? " is-active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Join Now button */}
          <Button
            component={Link}
            to="/Get_Involved"
            variant="contained"
            disableElevation
            className="join-button"
          >
            Join Now
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
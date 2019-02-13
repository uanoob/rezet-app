import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-light bg-light">
      <NavLink to="/" className="navbar-brand">
        REZET
      </NavLink>
      <NavLink
        to="/cart"
        className="btn btn-outline-info my-2 my-sm-0"
        type="button"
      >
        Cart
      </NavLink>
    </nav>
  </div>
);

export default Header;

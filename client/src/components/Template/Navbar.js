import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  return (
    <nav className="navbar is-fixed-top is-family-secondary is-transparent is-spaced" role="navigation">
      <div className="navbar-brand">
        <Link className="navbar-item has-text-weight-bold has-text-white is-size-4" to="/">Horizon Zero Dawn Wiki</Link>
        <div className="navbar-burger" onClick={() => setActive(!isActive)}>
          <span className="has-background-red"></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={classnames("navbar-menu", isActive === true && "is-active")} data-target="navbar">
        <div id="navbar" className="navbar-end is-size-5 has-text-centered">
          <Link className="navbar-item has-text-white has-text-weight-bold" onClick={() => setActive(!isActive)} to="/machines">Machines</Link>
          <Link className="navbar-item has-text-white has-text-weight-bold" onClick={() => setActive(!isActive)} to="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
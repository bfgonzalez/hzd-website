import React from 'react';
import { Link } from "react-router-dom";

import '../../styles/variables.scss';
import hzdLogo from '../../assets/hzd-logo.png';

require('dotenv').config()

const Home = () => {
  return (
    <div className="hero-section">
      <img src={hzdLogo} alt="logo" />
      <div className="buttons">
        <Link to="/machines">
          <a className="button is-link has-text-weight-bold mt-5">View Machine Catalogue</a>
        </Link>
      </div>
    </div>
  )
}

export default Home;

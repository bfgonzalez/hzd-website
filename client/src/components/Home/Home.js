import React from 'react';
import { Link } from "react-router-dom";

import Layout from '../Template/Layout';

import '../../styles/variables.scss';
import hzdLogo from '../../assets/hzd-logo.png';


require('dotenv').config()

const Home = () => {
  return (
    <Layout>
      <div className="hero-section">
        <img src={hzdLogo} alt="logo" />
        <div className="buttons">
          <Link to="/machines">
            <button className="button is-primary has-text-weight-bold mt-5 mr-4">View Machine Catalogue</button>
          </Link>
          <Link to="/admin">
            <button className="button is-black has-text-white has-text-weight-bold mt-5">Admin Login</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home;

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="has-background-dark">
      <Navbar/>
      <div className='has-navbar-fixed-top'>
        <main>
          {children}
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;
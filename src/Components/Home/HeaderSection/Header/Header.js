import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
      <header>
          <Navbar></Navbar>
          <HeaderMain></HeaderMain>

      </header>
    );
};

export default Header;
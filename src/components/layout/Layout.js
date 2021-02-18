'use strict'

import React from 'react';
import NavbarCustom from './NavbarCustom';

function Layout(props) {
    return (
      <React.Fragment>
        <NavbarCustom/>
        {props.children}
      </React.Fragment>
    );
  }
  
export default Layout;
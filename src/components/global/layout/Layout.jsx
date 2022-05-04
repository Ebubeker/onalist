import React from 'react';
import { Navbar } from '../source';

const Layout = ({children}) => {
  return (
    <>  
        <Navbar/>
        {children}
    </>
  )
}

export default Layout
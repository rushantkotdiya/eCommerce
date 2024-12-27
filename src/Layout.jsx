import React from 'react';
import Header from './componets/header' ;
import Navbar from './componets/navbar';
import Contant from './componets/contant';
import Footer from './componets/Footer';


function Layout() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Contant/>
      <Footer/>
    </div>
  );
}

export default Layout;

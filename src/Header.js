import React from 'react';
import './style/Header.css'
import {Route,Switch} from 'react-router-dom'


import picture1 from './pictures/gym1.jpg'
import picture2 from './pictures/gym2.jpg'
import picture3 from './pictures/gym4.jpg'


const Header = () => {
    return ( 
        <>
        <Switch>
        <Route path="/" exact render = {() => (
         <img src={picture2} alt="gym" />
     )} />
     <Route path="/products" render = {() => (
         <img src={picture3} alt="gym" />
     )} />
      
      <Route path="/contact" render = {() => (
         <img src={picture1} alt="gym" />
     )} />
      <Route path="/admin" render = {() => (
         <img src={picture2} alt="gym" />
     )} />
      <Route path="/users" render = {() => (
         <img src={picture2} alt="gym" />
     )} />
     <Route  render = {() => (
         <img src={picture2} alt="gym" />
     )} />
</Switch>
     </>
     );
}
 
export default Header;
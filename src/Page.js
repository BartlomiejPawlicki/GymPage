import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import ErrorPage from './pages/ErrorPage'
import UsersPage from './pages/UsersPage'

const Page = () => {
    return (
        <>
       <Route path='/' exact component={HomePage} />
       <Route path='/products' exact component={ProductPage} />
       <Route path='/contact' exact component={ContactPage} />
       <Route path='/admin' exact component={AdminPage} />
       <Route path='/users' exact component={UsersPage} />
       <Route  exact component={ErrorPage} />
       </>
      );
    
}
 
export default Page;
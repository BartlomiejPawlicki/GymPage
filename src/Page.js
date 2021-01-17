import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import ProductPageList from './pages/ProductPageList'
import ErrorPage from './pages/ErrorPage'
import UsersPage from './pages/UsersPage'
import LoginPage from './pages/LoginPage'

const Page = () => {
    return (
        <>
       <Route path='/' exact component={HomePage} />
       <Route path='/products' exact component={ProductPageList} />
       <Route path='/product/:id' exact component={ProductPage} />
       <Route path='/contact' exact component={ContactPage} />
       <Route path='/admin' exact component={AdminPage} />
       <Route path='/users' exact component={UsersPage} />
       <Route path ='/login' component={LoginPage}/>
       <Route  exact component={ErrorPage} />
       </>
      );
    
}
 
export default Page;
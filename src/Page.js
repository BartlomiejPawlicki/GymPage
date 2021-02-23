import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import ContactPage from './pages/ContactPage'
import ProductPageList from './pages/ProductPageList'
import ErrorPage from './pages/ErrorPage'
import UsersPage from './pages/UsersPage'
import LoginPage from './pages/LoginPage'
import SeperateProduct from './components/SeperateProduct'
import {DataProvider} from './components/DataProvider' 


const Page = () => {
    return (
     
        <DataProvider>
       <Route path='/' exact component={HomePage} />
       <Route path='/products' exact component={ProductPageList} />
       <Route path="/products/:id" exact component={SeperateProduct} />
       <Route path='/contact' exact component={ContactPage} />
       <Route path='/admin' exact component={AdminPage} /> 
       <Route path='/users' exact component={UsersPage} />
       <Route path ='/login' component={LoginPage}/>
       <Route  exact component={ErrorPage} />
       </DataProvider>
      
      );
    
}
 
export default Page;
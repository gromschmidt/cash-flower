import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// Components
import Header from './components/Header';

// Pages
import LoginPage from './pages/login/LoginPage';

import UserListing from './pages/user/UserListing'
import UserDetail from './pages/user/UserDetail'

import CustomerListing from './pages/customer/CustomerListing'
import CustomerDetail from './pages/customer/CustomerDetail'
import CustomerCreate from './pages/customer/CustomerCreate'




const App = () => {
  return (
    <Router>
      <Header/>

      {/* Login Page */}
      <Route exact path="/">
        <LoginPage/>
      </Route>

      <Route exact path="/user/:userID">
        <LoginPage/>
      </Route>


      {/* 
      *
      * User Routes
      *
      */}

      {/* UserListing - Show all Customers */}
      <Route exact path="/user">
        <UserListing/>
      </Route>

      {/* UserDetail - show one Customer */}
      <Route exact path="/user/:userID">
        <UserDetail/>
      </Route>
      

      {/* 
      *
      * Customer Routes
      *
      */}

      {/* CustomerListing - Show all Customers */}
      <Route exact path="/customer">
        <CustomerListing/>
      </Route>

      {/* CustomerDetail - show one Customer */}
      <Route exact path="/customer/:customerID">
        <CustomerDetail/>
      </Route>
      
      {/* CustomerCreate - create new Customer */}
      <Route exact path="/customer/add">
        <CustomerCreate/>
      </Route>





     {/* Redirect all Pages not Listed above */}
      <Redirect to="/"></Redirect>
    </Router>
  );
}
 
export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

/**
 * Components
 */
import Header from './components/Header';

/**
 * Pages
 */
import LoginPage from './pages/login/LoginPage';
// User
import UserListing from './pages/user/UserListing'
import UserDetail from './pages/user/UserDetail'
// Customer
import CustomerListing from './pages/customer/CustomerListing'
import CustomerDetail from './pages/customer/CustomerDetail'
import CustomerCreate from './pages/customer/CustomerCreate'
// Invoice
import InvoiceListing from './pages/invoice/InvoiceListing'
import InvoiceDetail from './pages/invoice/InvoiceDetail'
import InvoiceCreate from './pages/invoice/InvoiceCreate'




const App = () => {
  return (
    <Router>
      <Header/>

      {/* Login Page */}
      <Route exact path="/">
        <LoginPage/>
      </Route>

      {/* 
      * User Routes
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
      * Customer Routes
      */}

      {/* CustomerListing - Show all Customers */}
      <Route exact path="/customer">
        <CustomerListing/>
      </Route>

      {/* CustomerCreate - create new Customer */}
      <Route exact path="/customer/add/new">
        <CustomerCreate/>
      </Route>

      {/* CustomerDetail - show one Customer */}
      <Route exact path="/customer/:customerID">
        <CustomerDetail/>
      </Route>
      
      {/* 
      * Invoice Routes
      */}

      {/* InvoiceListing - Show all Invoices */}
      <Route exact path="/invoice">
        <InvoiceListing/>
      </Route>
      
      {/* InvoiceCreate - create new Invoice */}
      <Route exact path="/invoice/add/new">
        <InvoiceCreate/>
      </Route>

      {/* InvoiceDetail - show one Invoice */}
      <Route exact path="/invoice/:invoiceID">
        <InvoiceDetail/>
      </Route>

     {/* Redirect all Pages not Listed above */}
      <Redirect to="/"></Redirect>
    </Router>
  );
}
 
export default App;
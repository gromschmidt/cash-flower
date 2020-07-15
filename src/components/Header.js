import React from 'react';
import { Link } from 'react-router-dom'

/**
 * Header Component that is displayed on all Pages
 */
const Header = () => {
  return (
    <div>
      <p>APP</p>
      <Link to="/">Login</Link>
      <hr/>
      <Link to="/customer">Customers</Link>
      <Link to="/customer/c1">Customer ID</Link>
      <Link to="/customer/add/new">Add new Customer</Link>
      <hr/>
      <Link to="/user">Users</Link>
      <Link to="/user/u1">User ID</Link>
      <hr/>
      <Link to="/invoice">Invoices</Link>
      <Link to="/invoice/200221">Invoice ID</Link>
      <Link to="/invoice/add/new">Add new Invoice</Link>

    </div>
  );
}
 
export default Header;
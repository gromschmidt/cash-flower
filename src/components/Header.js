import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <p>APP</p>
      <Link to="/">Login</Link>
      <hr/>
      <Link to="/customer">Customers</Link>
      <Link to="/customer/123">Customer ID</Link>
      <Link to="/customer/add/new">Add new Customer</Link>
      <hr/>
      <Link to="/user">Users</Link>
      <Link to="/user/123">User ID</Link>
      <hr/>
      <Link to="/invoice">Invoices</Link>
      <Link to="/invoice/123">Invoice ID</Link>
      <Link to="/invoice/add/new">Add new Invoice</Link>

    </div>
  );
}
 
export default Header;
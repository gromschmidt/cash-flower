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
      <Link to="/customer/add">Add new Customer</Link>
      <hr/>
      <Link to="/user">Users</Link>
      <Link to="/user/123">User ID</Link>

    </div>
  );
}
 
export default Header;
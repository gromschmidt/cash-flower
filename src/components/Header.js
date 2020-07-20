import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'evergreen-ui';


/**
 * Header Component that is displayed on all Pages
 */
const Header = () => {
  return (
    <div>
      <p>APP</p>
      <Button><Link to="/">Login</Link></Button>
      <hr/>
      <Button><Link to="/customer">Customers</Link></Button>
      <Button><Link to="/customer/add/new">Add new Customer</Link></Button>
      <hr/>
      <Button><Link to="/user">Users</Link></Button>
      <Button><Link to="/user/u1">User ID</Link></Button>
      <hr/>
      <Button><Link to="/invoice">Invoices</Link></Button>
      <Button><Link to="/invoice/add/new">Add new Invoice</Link></Button>

    </div>
  );
}
 
export default Header;
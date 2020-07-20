import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { getCustomers } from '../../../database/helpers/lowDBHelpers';
import { Avatar } from 'evergreen-ui';

/**
 * All Customers Page
 */
const CustomerListing = () => {

  const [customers, setCustomers] = useState(getCustomers())
  
  return ( 
    <div>
      {customers.map((customer, key) => (
        <div key={key} className="customer-wrap">
          <Link to={`/customer/${customer.id}`}>
            <Avatar name={customer.name} size={40} />
            <p>{customer.name}</p>
          </Link>
        </div>
      ))}
    </div> 
  );
}
 
export default CustomerListing;
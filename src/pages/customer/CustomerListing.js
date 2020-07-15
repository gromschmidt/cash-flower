import React, { useState } from 'react';

import { getCustomers } from '../../../database/helpers/lowDBHelpers';

/**
 * All Customers Page
 */
const CustomerListing = () => {

  const [customers, setCustomers] = useState(getCustomers())
  
  return ( 
    <div>
      {customers.map(customer => <p>{customer.name}</p>)}
    </div> 
  );
}
 
export default CustomerListing;
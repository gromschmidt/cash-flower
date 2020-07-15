import React, { useState } from 'react';

import { getCustomers } from '../../../database/helpers/lowDBHelpers';


const CustomerListing = () => {

  const [customers, setcustomers] = useState([])

  console.log(getCustomers());
  return ( <h1>CustomerListing</h1> );
}
 
export default CustomerListing;
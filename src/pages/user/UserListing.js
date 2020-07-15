
import React from 'react';

 import { getCustomers } from '../../../database/helpers/lowDBHelpers';


const UserListing = () => {
  console.log(getCustomers());
  return ( <h1>UserListing</h1> );
}
 
export default UserListing;
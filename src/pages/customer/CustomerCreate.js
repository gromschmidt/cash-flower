import React from 'react';
import {createCustomer} from '../../../database/helpers/lowDBHelpers';
import {Customer} from '../../../database/helpers/bluePrints';


const CustomerCreate = () => {

  let customer =  Customer
  console.log(customer);

  return ( <h1>CustomerCreate</h1> );
}
 
export default CustomerCreate;
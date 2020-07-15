import React, {useState} from 'react';
import {createCustomer} from '../../../database/helpers/lowDBHelpers';
import {Customer} from '../../../database/helpers/bluePrints';
import InputsFromObject from '../../components/InputsFromObject';

/**
 * Create Customer Page
 */

const CustomerCreate = () => {

  const [customer, setCustomer] = useState(new Customer())

  console.log(customer);
  return ( <div>
  <h1>CustomerCreate</h1>
  { customer && <InputsFromObject obj={customer} change={setCustomer}/>}

  </div> );
}
 
export default CustomerCreate;
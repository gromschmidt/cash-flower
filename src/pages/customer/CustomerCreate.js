import React, {useState} from 'react';
import {createCustomer} from '../../../database/helpers/lowDBHelpers';
import {Customer} from '../../../database/helpers/bluePrints';

import InputsFromObject from '../../components/InputsFromObject';
import slugify from 'slugify';

/**
 * Create Customer Page
 */

const CustomerCreate = () => {

  const [customer, setCustomer] = useState(new Customer())

  console.log(customer);

  const saveNewCustomer = () => createCustomer(customer)


  /**
   * Reorder Function to pass into InputsFromObject
   * @param {array} fields Fields from Callback set in InputsFromObject.js
   */
  const orderFunction = (fields) => {

    const customOrder = [
      "id",
      "name",
      "slug",
      "adress",
      "defaultPrice"
    ]

    return customOrder.map( key => fields.filter(field => field.key == key)[0] )
  }

  return ( 
    <div>
      <h1>CustomerCreate</h1>
      { customer && <InputsFromObject obj={customer} change={setCustomer} orderFunction={orderFunction}/>}
      <button onClick={saveNewCustomer}>Save</button>
    </div> 
  );
}
 
export default CustomerCreate;
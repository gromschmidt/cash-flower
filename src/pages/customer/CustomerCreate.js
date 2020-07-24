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


  const orderFunction = (fields) => {

    const customOrder = [
      "id",
      "name",
      "slug",
      "adress",
      "defaultPrice"
    ]

    const orderedFields = customOrder.map((key, i) => fields.filter(field => field.key == key)[0])

    return orderedFields
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
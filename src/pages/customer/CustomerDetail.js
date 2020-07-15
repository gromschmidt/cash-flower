import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import {getCustomerById, updateCustomerById} from '../../../database/helpers/lowDBHelpers';


/**
 * Single Customer Page
 */
const CustomerDetail = () => {

  // The Customer ID from Url
  let { customerID } = useParams()

  const [singleCustomer, setSingleCustomer] = useState(getCustomerById(customerID))

  return ( 
    <div>
      <h1>CustomerDetail {customerID}</h1>
      <p>{singleCustomer.name}</p>
    </div> 
    );
}
 
export default CustomerDetail;
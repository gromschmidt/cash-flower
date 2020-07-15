import React from 'react';
import { useParams } from 'react-router-dom'
import getCustomers from '../../../database/helpers/lowDBHelpers';

const CustomerDetail = () => {

  // The Customer ID from Url
  let { customerID } = useParams()

  /**
  * DB customer functions
  */
  const db = {
    /**
     * Get customer by id
     * @param id customer id
     */
    get(id) {
      console.log(getCustomers()); 
    },
    /**
     * Update customer by id
     * @param id customer id
     */
    update(id) {
      console.log('update'); 
    }
  }

  return ( 
    <div>
      <h1>CustomerDetail {customerID}</h1>
      <div onClick={db.get}>Klick</div>
    </div> 
    );
}
 
export default CustomerDetail;
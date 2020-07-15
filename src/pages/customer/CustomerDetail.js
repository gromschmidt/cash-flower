import React from 'react';
import { useParams } from 'react-router-dom'


const CustomerDetail = () => {

  /**
  * The Customer ID from Url
  */
  let { customerID } = useParams()

  return ( <h1>CustomerDetail {customerID}</h1> );
}
 
export default CustomerDetail;
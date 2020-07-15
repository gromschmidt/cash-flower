import React from 'react';
import { useParams } from 'react-router-dom'


const InvoiceDetail = () => {

  /**
  * The Invoice ID from Url
  */
  let { invoiceID } = useParams()

  return ( <h1>InvoiceDetail {invoiceID}</h1> );
}
 
export default InvoiceDetail;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { getInvoiceById } from '../../../database/helpers/lowDBHelpers';


const InvoiceDetail = () => {

  // The Invoice ID from Url
  
  let { invoiceID } = useParams()
  const [singleInvoice, setSingleInvoice] = useState(getInvoiceById(invoiceID))

  return (
  <div>
    <h1>CustomerDetail {invoiceID}</h1>
    <p>{singleInvoice.title}</p>
  </div> 
  )
}
 
export default InvoiceDetail;
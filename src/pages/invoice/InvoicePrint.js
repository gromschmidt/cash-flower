import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { getInvoiceById } from '../../../database/helpers/lowDBHelpers';


const InvoicePrint = () => {

  // The Invoice ID from Url
  let { invoiceID } = useParams()

  const [invoice, setInvoice] = useState(getInvoiceById(invoiceID))

  return (
  <div>
    <h1>{invoice.title}</h1>
    <p>{invoice.title}</p>
  </div> 
  )
}
 
export default InvoicePrint;
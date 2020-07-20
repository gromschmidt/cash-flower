import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { getInvoiceById } from '../../../database/helpers/lowDBHelpers';
import EditableField from '../../components/EditableField';


const InvoiceDetail = () => {

  // The Invoice ID from Url
  let { invoiceID } = useParams()

  const [invoice, setInvoice] = useState(getInvoiceById(invoiceID))

  const changeHandler = (key, val) => {
    console.log(key);
    setInvoice({...invoice, [key]: val})
  }

  return (
  <div>
    <h1>{invoice.title}</h1>


    <EditableField editmode={false} value={invoice.title} name='olre' changeHandler={changeHandler}/>
  </div> 
  )
}
 
export default InvoiceDetail
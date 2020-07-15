import React, {useState} from 'react';

import {Invoice, InvoicePosition} from '../../../database/helpers/bluePrints';

import InputsFromObject from '../../components/InputsFromObject';

/**
 * Create new Invoice Page
 */
const InvoiceCreate = () => {

  const [invoice, setInvoice] = useState(new Invoice())

  console.log(invoice)
  return ( <div>
   { invoice && <InputsFromObject obj={invoice} change={setInvoice}/>}
  </div> )
}
 
export default InvoiceCreate;
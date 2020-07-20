import React, {useState} from 'react';

import {Invoice, InvoicePosition} from '../../../database/helpers/bluePrints';

import InputsFromObject from '../../components/InputsFromObject';
import { createInvoice } from '../../../database/helpers/lowDBHelpers';


/**
 * Create new Invoice Page
 */
const InvoiceCreate = () => {

  const [invoice, setInvoice] = useState(new Invoice())


  return ( 
    <div>
      { invoice && <InputsFromObject obj={invoice} change={setInvoice}/>}
    </div> 
  )
}
 
export default InvoiceCreate;
import React, {useState} from 'react';

import {Invoice, InvoicePosition} from '../../../database/helpers/bluePrints';

/**
 * Create new Invoice Page
 */
const InvoiceCreate = () => {

  const [invoice, setInvoice] = useState(new Invoice())

  return ( <div>
    New Invoice
  </div> )
}
 
export default InvoiceCreate;
import React, { useState } from 'react';
import { getInvoices } from '../../../database/helpers/lowDBHelpers';


const InvoiceListing = () => {

  const [invoices, setInvoices] = useState(getInvoices())
  return ( 
    <div>
      <p>Lorem</p>
      {invoices.map(invoice => <p>{invoice.title}</p>)}
    </div> 
  );
}
 
export default InvoiceListing;
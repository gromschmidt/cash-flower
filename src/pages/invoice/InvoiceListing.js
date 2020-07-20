import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import { getInvoices } from '../../../database/helpers/lowDBHelpers';


const InvoiceListing = () => {

  const [invoices, setInvoices] = useState(getInvoices())
  console.log(invoices);
  return ( 
    <div>
      {invoices.map((invoice, key) => (
        <div key={key} className="invoices-wrap">
          <Link to={`/invoice/${invoice.id}`}>
            <p>{invoice.title}</p>
          </Link>
        </div>
      ))}
    </div> 
  );
}
 
export default InvoiceListing
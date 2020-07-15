import React from 'react';
import { useParams } from 'react-router-dom'


const InvoiceDetail = () => {

  // The Invoice ID from Url
  let { invoiceID } = useParams()

  /**
   * DB Invioce functions
   */
  const db = {
    /**
     * Get invoice by id
     * @param id invoice id
     */
    get(id) {
      console.log('get'); 
    },
    /**
     * Update invoice by id
     * @param id invoice id
     */
    update(id) {
      console.log('update'); 
    }
  }

  return ( <h1>InvoiceDetail {invoiceID}</h1> );
}
 
export default InvoiceDetail;
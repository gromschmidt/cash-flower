import React, {useState} from 'react';

import {Invoice, InvoicePosition} from '../../../database/helpers/bluePrints';

import InputsFromObject from '../../components/InputsFromObject';
import { createInvoice } from '../../../database/helpers/lowDBHelpers';
import { Button, Pane } from 'evergreen-ui';


/**
 * Create new Invoice Page
 */
const InvoiceCreate = () => {

  /**
   * Invoice state
   */
  const [invoice, setInvoice] = useState(new Invoice())

  /**
   * All positions for the Invoice
   */
  const [positions, setPositions] = useState([])

  /**
   * Create a new Position Object and put it in positions
   */
  const createNewPosition = () => {
    setPositions([...positions, new InvoicePosition()])
    console.log(positions)
  }

/**
 * Delete one Position Item in positions
 * @param {id} id from Item to delete
 */
  const deletePosition = (id) => {
    setPositions(positions.filter(position => position.id != id))
  }

  return ( 
    <div>
      { invoice && <InputsFromObject obj={invoice} change={setInvoice}/>}
      <ArrayToFields arr={positions} change={setPositions} del={deletePosition}/>
      <Button onClick={createNewPosition}>new Position</Button>
    </div> 
  )
}
 
const ArrayToFields = ({arr, change, del}) => {

  return (
    <Pane background="tint2" marginBottom="16">
      {arr.map(item => (
        <>
          <Button onClick={(e) => del(item.id)}>Delete</Button>
          <InputsFromObject obj={item} change={change}/>
        </>
      ) )}
    </Pane>
  )
}

export default InvoiceCreate;
import React, {useState} from 'react';
import { getCustomers } from '../../../database/helpers/lowDBHelpers';
import { Combobox } from 'evergreen-ui';


const CustomerComboBox = () => {
  const customersList = getCustomers()
  const [customerSelect, setCustomerSelect] = useState()
  
  const selectHandler = (selected) => {
    setCustomerSelect(selected)

  }
  
  return (
    <div className="input-wrap">
      <p>Kunde:</p>
      <Combobox
        items={ customersList.map(customer => customer.name) }
        onChange={selected => selectHandler(selected)}
      />
    </div>
  )
}
 
export default CustomerComboBox;

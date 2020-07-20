import React, {useState} from 'react';
import {TextInputField, Pane, SelectMenu, Button} from 'evergreen-ui'
import { getCustomers } from '../../database/helpers/lowDBHelpers';
/**
 * Strips an Object into Inputs
 */
const InputsFromObject = ({obj, change}) => {

  /**
   * Input change Handler
   * @param {sting} value 
   * @param {*} key name of the Object Key
   * @param {*} parent parent element for subElements
   */
  let onChangeHandler = (value,key,parent) => {
    switch (parent) {

      case 'adress':
        return change({...obj, adress: {...obj.adress, [key]: value}})
    
      default:
        change({...obj, [key]: value})
        break;
    } 
  }
  
  /**
   * Make each key off Object to a input field
   */
  let fields = Object.keys(obj).map((key,n) => {
    switch (key) {

      // Field is disabled, id musnt be changed manually
      case 'id':
        return (
          <div key={n} className="input-wrap">
            <TextInputField label={key} name={key} type="text" value={obj[key]} onChange={e => onChangeHandler(e.target.value, [key])} disabled/>
          </div>
          )
      
      // Show a dropdown with all Customers
      case 'customerId': 
        const customersList = getCustomers()
        const [customerSelect, setCustomerSelect] = useState()
        return (
          <div key={n} className="input-wrap">
            <SelectMenu title={key} 
            options={ customersList.map(customer => ({ label: customer.name, value: customer.id })) }
            selected={customerSelect}
            onSelect={item => setCustomerSelect(item)}>
              <Button>{customerSelect || 'Select name...'}</Button>
            </SelectMenu>
          </div>
        )

      // Show subfields of adress
      case 'adress':
        return (
          <Pane background="tint2" key={n}>
            <p>Adresse</p>
            {Object.keys(obj[key]).map((skey,m) => {
              const {adress} = obj
              return (
                <div key={m} className="input-wrap">
                <TextInputField label={skey} name={skey} type="text" value={adress[skey]} onChange={e => onChangeHandler(e.target.value, skey, 'adress')} />
              </div>
              )
            })}
          </Pane>
        )
      
      // Dont show
      case 'created':
      case 'positions':  break;

      // Default case
      default:
        return (
          <div key={n} className="input-wrap">
            <TextInputField label={key} name={key} type="text" value={obj[key]} onChange={e => onChangeHandler(e.target.value, [key])}/>
          </div>
        )
    }
  }
    )

  // Render 
  return ( 
    <div className="object-inputs-wrap">
      {fields}
    </div>
   );
}
 
export default InputsFromObject;
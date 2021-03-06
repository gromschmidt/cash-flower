import React, {useState} from 'react';
import {TextInputField, Text, Pane, Combobox, Button} from 'evergreen-ui'

import CustomerComboBox from './inputCombonents/CustomerComboBox';
import AdressInputs from './inputCombonents/AdressInputs';
import slugify from 'slugify';
import changeConstructor from './helpers/changeConstructor';


/**
 * Strips an Object into Inputs
 */

const InputsFromObject = ({obj, change, orderFunction}) => {
  
  const onChangeHandler = changeConstructor(change, obj)

  /**
   * Make each key off Object to a input field
   */
  let fields = Object.keys(obj).map((key,n) => {
    switch (key) {

      // Field is disabled, id musnt be changed manually
      case 'id':
        return (
          <div key={key} className="input-wrap">
            <Text>ID - {obj[key]}</Text>
          </div>
        )
      
      // Show a dropdown with all Customers
      case 'customerId': 
        return (<CustomerComboBox key={key}/>)

      // Show subfields of adress
      case 'adress': 
        return ( <AdressInputs key={key} obj={obj.adress} onChangeHandler={onChangeHandler} /> )
      
      // Dont show
      case 'created':
      case 'positions':  break;

      // Default case
      default:
        return (
          <div key={key} className="input-wrap">
            <TextInputField label={key} name={key} type="text" value={obj[key]} onChange={e => onChangeHandler(e.target.value, [key])}/>
          </div>
        )
    }
  })

  /**
   * uses orderFunction from Props OR passes unchanged Fields
   */
  const reorderedFields = orderFunction ? orderFunction(fields) : fields


  // Render 
  return ( 
    <div className="object-inputs-wrap">
      {reorderedFields}
    </div>
   );
}
 
export default InputsFromObject;
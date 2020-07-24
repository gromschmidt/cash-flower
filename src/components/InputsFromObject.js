import React, {useState} from 'react';
import {TextInputField, Text, Pane, Combobox, Button} from 'evergreen-ui'

import CustomerComboBox from './inputCombonents/CustomerComboBox';
import AdressInputs from './inputCombonents/AdressInputs';
import slugify from 'slugify';

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
      case 'name': 
        console.log(value);
        return change({...obj, name: value, slug: slugify(value)})

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
            <Text>ID - {obj[key]}</Text>
          </div>
        )
      
      // Show a dropdown with all Customers
      case 'customerId': 
        return (<CustomerComboBox key={n}/>)

      // Show subfields of adress
      case 'adress': 
        return ( <AdressInputs key={n} obj={obj.adress} onChangeHandler={onChangeHandler} /> )
      
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
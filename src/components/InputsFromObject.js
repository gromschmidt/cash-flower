import React from 'react';
import {TextInputField, Pane} from 'evergreen-ui'
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
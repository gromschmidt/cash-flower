import React from 'react';

//@TODO: Adresse ganz ausspielen 


/**
 * Strips an Object into Inputs
 */
const InputsFromObject = ({obj, change}) => {

  let onChangeHandler = (value,key) => {
    change({...obj, [key]: value})
  }

  return ( 
    <div className="object-inputs-wrap">
      {Object.keys(obj).map((key,n) => (
        <div key={n} className="input-wrap">
          <label>{key}</label>
          <input name={key} type="text" value={obj[key]} onChange={e => onChangeHandler(e.target.value, key)}/>
        </div>
      ))}
    </div>
   );
}
 
export default InputsFromObject;
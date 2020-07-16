import React from 'react';

//@TODO: Adresse ganz ausspielen 


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
        break;
    
      default:
        change({...obj, [key]: value})
        break;
    } 
  }
  console.log(obj);
  let fields = Object.keys(obj).map((key,n) => {
    switch (key) {
      case 'id':
        return (
          <div key={n} className="input-wrap">
            <label>{key}</label>
            <input name={key} type="text" value={obj[key]} onChange={e => onChangeHandler(e.target.value, [key])} disabled/>
          </div>
          )
        break
      case 'adress':
        return (
          <div>
            <p>Adresse</p>
            {Object.keys(obj[key]).map((skey,n) => {
              const {adress} = obj
              return (
                <div key={n} className="input-wrap">
                <label>{skey}</label>
                <input name={skey} type="text" value={adress[skey]} onChange={e => onChangeHandler(e.target.value, skey, 'adress')} />
              </div>
              )
            })}
          </div>
        )
        break
      default:
        return (
          <div key={n} className="input-wrap">
            <label>{key}</label>
            <input name={key} type="text" value={obj[key]} onChange={e => onChangeHandler(e.target.value, [key])}/>
          </div>
        )
    }
  }
    )

  return ( 
    <div className="object-inputs-wrap">
      {fields}
    </div>
   );
}
 
export default InputsFromObject;
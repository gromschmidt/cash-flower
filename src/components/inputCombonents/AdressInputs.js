import React from 'react';
import { Pane, TextInputField } from 'evergreen-ui';

const AdressInputs = ({obj, onChangeHandler}) => {
  console.log(obj);
  return (
    <Pane background="tint2">
      <p>Adresse</p>
      {Object.keys(obj).map((skey,m) => {
       
        return (
          <div key={m} className="input-wrap">
          <TextInputField label={skey} name={skey} type="text" value={obj[skey]} onChange={e => onChangeHandler(e.target.value, skey, 'adress')} />
        </div>
        )
      })}
    </Pane>
  )
}
 
export default AdressInputs;
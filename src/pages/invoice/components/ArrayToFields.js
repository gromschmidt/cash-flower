 import React from 'react';
 import { Button, Pane } from 'evergreen-ui';
 import InputsFromObject from '../../../components/InputsFromObject';

/**
 * Strip an Array of Positions into Inputs
 * @param arr Array to parse
 * @param change changeHandler
 * @param del deleteHandler
 */

const ArrayToFields = ({arr, change, del}) => {
  return (
    <Pane background="tint2" marginBottom="16">
      {arr.map((item, key) => (
        <div key={key}>
          <Button onClick={(e) => del(item.id)}>Delete</Button>
          <InputsFromObject obj={item} change={change}/>
        </div>
      ) )}
    </Pane>
  )
}

export default ArrayToFields;
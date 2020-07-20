import React, { useState } from 'react';
import { Pane, IconButton, TextInput} from 'evergreen-ui';


const EditableField = ({editmode, value, changeHandler, name}) => {

  const [editMode, setEditMode] = useState(editmode)


  return (
    <Pane display="flex" justifyContent="space-between" alignItems="center">
      {!editMode ? <p>{value}</p> : <TextInput value={value} width="100%" onChange={e => changeHandler(name, e.target.value)}/>}


      {/* Icon to Toggle Editmode on and off */}
      <IconButton icon={!editMode ? "edit" : "floppy-disk"} onClick={() => setEditMode(!editMode)}/>
    </Pane>
  )
}

export default EditableField;
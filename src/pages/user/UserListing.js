
import React, {useState} from 'react';

 import { getUsers } from '../../../database/helpers/lowDBHelpers';


const UserListing = () => {

  const [users, setUsers] = useState(getUsers())
  
  return ( 
    <div>
      {users.map(user => <p>{user.name}</p>)}
    </div>
  )
}
 
export default UserListing;
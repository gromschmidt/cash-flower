
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import { getUsers } from '../../../database/helpers/lowDBHelpers';


const UserListing = () => {

  const [users, setUsers] = useState(getUsers())
  
  return ( 
    <div>
      {users.map((user, key) => (
        <div key={key} className="users-wrap">
          <Link to={`/user/${user.id}`}>
            <p>{user.name}</p>
          </Link>
        </div>  
      ))}
    </div>
  )
}
 
export default UserListing
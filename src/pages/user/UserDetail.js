
import React, {useState} from 'react';
import { useParams } from 'react-router-dom'
import { Pane, majorScale, Heading, Text, Paragraph } from 'evergreen-ui'
import { getUserById } from '../../../database/helpers/lowDBHelpers';

const UserDetail = () => {

  // The User ID from Url
  let { userID } = useParams()
  const [singleUser, setSingleUser] = useState(getUserById(userID))

  return ( 
    <div>
      <h1>UserDetail {userID}</h1>
      <p>{singleUser.name}</p>
    </div> 
  );
}
 
export default UserDetail;
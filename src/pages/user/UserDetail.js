
import React from 'react';
import { useParams } from 'react-router-dom'


const UserDetail = () => {

  /**
  * The User ID from Url
  */
  let { userID } = useParams()

  return ( <h1>UserDetail {userID}</h1> );
}
 
export default UserDetail;
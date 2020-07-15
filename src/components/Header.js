import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <p>APP</p>
      <Link to="/">Invoice App</Link>
    </div>
  );
}
 
export default Header;
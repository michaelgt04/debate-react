import { Link } from 'react-router'
import React from 'react';

const Header = props => {
  return (
    <div className="header">
      <a onClick={props.signOut}>Sign Out</a>
      <Link to={'/'}>Home</Link>
      <Link to={'/debate'}>Debate Interface</Link>
    </div>
  )
}

export default Header;

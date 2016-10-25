import React from 'react';

const SignOut = props => {
  return (
    <div className="header">
      <a onClick={props.signOut}>Sign Out</a>
    </div>
  )
}

export default SignOut;

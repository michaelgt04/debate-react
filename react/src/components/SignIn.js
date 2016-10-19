import React from 'react';

const SignIn = props => {

  return (
    <div className="center">
      <form>
        <label htmlFor="username">Username:</label><br />
        <input type="text" name="username" onChange ={props.handleUsername}/><br />

        <label htmlFor="password">Password:</label><br />
        <input type="password" name="password" onChange={props.handlePassword}/><br />

        <input type="submit" value="Log In" onClick={props.handleSubmit}/>
      </form>
    </div>
  )

}

export default SignIn;

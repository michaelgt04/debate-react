import React from 'react';

const SignIn = props => {

  let centerForm = "small-12 medium-8 medium-offset-2 large-4 large-offset-4 columns"

  return (
    <div className="row auth">
      <form className={centerForm}>
        <label htmlFor="username">Username:</label><br />
        <input type="text" name="username" onChange ={props.handleUsername}/><br />

        <label htmlFor="password">Password:</label><br />
        <input type="password" name="password" onChange={props.handlePassword}/><br />
        <input type="checkbox" name="teacher" value="teacher" onChange={props.handleRole}/>I am a Teacher!<br />

        <input className="inline text-center button" type="submit" value="Log In" onClick={props.handleSubmit}/>
        <p className="inline error">{props.error}</p>
      </form>
    </div>
  )

}

export default SignIn;

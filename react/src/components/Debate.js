import React, { Component } from 'react';

class Debate extends Component {
  constructor(props){
    super(props);
    this.setState = {
      token: props.token
    }
  };

  render () {
    sessionStorage.setItem("token", this.props.token)
    debugger;
    return(
      <div>
        <a className="inline" onClick={this.props.signOut}>Sign Out</a>
        <span className="inline">Welcome to Debate!</span>
      </div>
    )
  }
}

export default Debate;

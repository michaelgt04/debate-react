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
    return(
      <h1>Welcome to Debate!</h1>
    )
  }
}

export default Debate;

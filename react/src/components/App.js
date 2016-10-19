import React, { Component } from 'react';
import SignIn from './SignIn'
import Debate from './Debate'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      token: sessionStorage.getItem("token"),
      signedIn: sessionStorage.getItem("signedIn")
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.signIn = this.signIn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleUsername(event) {
    let newUsername = event.target.value;
    this.setState({ username: newUsername });
  }

  handlePassword(event) {
    let newPassword = event.target.value;
    this.setState({ password: newPassword })
  }

  signIn() {
    $.ajax({
      method: 'POST',
      url: '/student_token',
      data: {
        auth: {
          email: this.state.username,
          password: this.state.password
        },
    }}).done(data => {
      this.setState({
        token: data.jwt,
        signedIn: true
      })
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.signIn()
    sessionStorage.setItem("signedIn", true)
  }

  render () {

    let chooseComponent = () => {
      if (this.state.signedIn) {
        return(
          <Debate
            token={this.state.token}
          />
        )
      } else {
        return(
          <SignIn
            handleUsername={this.handleUsername}
            handlePassword={this.handlePassword}
            handleSubmit={this.handleSubmit}
          />
        )
      }
    }

    return(
      <div>
        {chooseComponent()}
      </div>
    )
  };

};

export default App;

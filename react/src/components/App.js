import React, { Component } from 'react';
import SignIn from './SignIn'
import Debate from './Debate'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      role: "",
      token: sessionStorage.getItem("token"),
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRole = this.handleRole.bind(this);
    this.signIn = this.signIn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signOut = this.signOut.bind(this);
  };

  handleUsername(event) {
    let newUsername = event.target.value;
    this.setState({ username: newUsername });
  }

  handlePassword(event) {
    let newPassword = event.target.value;
    this.setState({ password: newPassword })
  }

  handleRole(event) {
    let newRole = event.target.checked;
    this.setState({ role: newRole })
  }

  signIn(url) {
    $.ajax({
      method: 'POST',
      url: url,
      data: {
        auth: {
          email: this.state.username,
          password: this.state.password
        }},
      error: function() {
          this.setState({ error: "Login Unsuccessful! Please try again!" });
        }.bind(this),
      success: function(data) {
        this.setState({
          token: data.jwt
        });
      }.bind(this)
      })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.role) {
      this.signIn('/teacher_token');
    } else {
      this.signIn('/student_token')
    }
  }

  signOut() {
    sessionStorage.clear();
    this.setState({
      token: null,
      error: "",
      role: ""
    });
  }

  render () {

    let chooseComponent = () => {
      if (this.state.token) {
        return(
          <Debate
            token={this.state.token}
            signOut={this.signOut}
          />
        )
      } else {
        return(
          <SignIn
            handleUsername={this.handleUsername}
            handlePassword={this.handlePassword}
            handleSubmit={this.handleSubmit}
            handleRole={this.handleRole}
            error={this.state.error}
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

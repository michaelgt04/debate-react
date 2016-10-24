import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddUsername, AddPassword, GetToken, SignInValid, TeacherStatus } from '../actions/AuthActions'
import SignIn from '../components/SignIn'

class Auth extends Component {
  render() {
    return (
      <SignIn
        handleUsername={this.props.handleUsername}
        handlePassword={this.props.handlePassword}
        handleSubmit={this.props.handleSubmit}
        handleRole={this.props.handleRole}
        error={this.props.error}
      />
    )
  }
}

const mapStoreToProps = store => {
  return {
    error: store.errorState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUsername: (event) => {
      let newUsername = event.target.value
      dispatch(AddUsername(newUsername))
    },
    handlePassword: (event) => {
      let newPassword = event.target.value
      dispatch(AddPassword(newPassword))
    },
    handleRole: (event) => {
      let newRole = event.target.checked
      dispatch(TeacherStatus(newRole))
    },
    handleSubmit: (event) => {
      event.preventDefault()
      dispatch(GetToken())
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Auth);

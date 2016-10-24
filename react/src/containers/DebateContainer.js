import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignOutUser } from '../actions/AuthActions'
import SignOut from '../components/SignOut'

class Debate extends Component {
  render () {
    return(
      <div>
        <SignOut signOut={this.props.signOut}/>
        <h1>WELCOME TO THE REDUX!</h1>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      dispatch(SignOutUser())
      sessionStorage.clear()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Debate);

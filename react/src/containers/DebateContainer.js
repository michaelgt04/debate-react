import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignOutUser } from '../actions/AuthActions'
import DashboardContainer from '../containers/DashboardContainer'
import SignOut from '../components/SignOut'

class Debate extends Component {
  render () {
    return(
      <div>
        <SignOut signOut={this.props.signOut}/>
        <DashboardContainer />
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

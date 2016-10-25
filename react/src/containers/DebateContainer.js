import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignOutUser } from '../actions/AuthActions'
import DashboardContainer from '../containers/DashboardContainer'
import SignOut from '../components/SignOut'

class Debate extends Component {
  render () {
    return(
      <div>
        <div className="row">
          <SignOut signOut={this.props.signOut}/>
        </div>
        <div className="row">
          <DashboardContainer
            teacher={this.props.teacher}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    teacher: store.roleState
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

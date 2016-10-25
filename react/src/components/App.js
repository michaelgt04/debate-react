import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router';
import SignOut from '../components/SignOut'
import { SignOutUser } from '../actions/AuthActions'
import DashboardContainer from '../containers/DashboardContainer'
import DebateContainer from '../containers/DebateContainer';
import AuthContainer from '../containers/AuthContainer'

class App extends Component {
  render() {
    let authGateway = () => {
      if (this.props.token) {
        return(
          <div>
            <div className="row">
              <SignOut signOut={this.props.signOut}/>
            </div>
            <Router history={hashHistory}>
              <Route path="/" component={DashboardContainer}/>
              <Route path='/debate' component={DebateContainer}/>
            </Router>
          </div>
        )
      } else {
        return (
          <AuthContainer />
        )
      }
    }

    return(
      <div>
        {authGateway()}
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    token: store.tokenState
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

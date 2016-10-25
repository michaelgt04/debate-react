import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router';
import DashboardContainer from '../containers/DashboardContainer'
import DebateContainer from '../containers/DebateContainer';
import AuthContainer from '../containers/AuthContainer'

class App extends Component {
  render() {
    let authGateway = () => {
      if (this.props.token) {
        return(
          <Router history={hashHistory}>
            <Route path="/" component={DebateContainer}/>
            <Route path='/debate' component={DebateContainer}/>
          </Router>
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

export default connect(mapStateToProps)(App);

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, Link, hashHistory } from 'react-router';

import DashboardContainer from '../containers/DashboardContainer'
import DebateContainer from '../containers/DebateContainer';
import AuthContainer from '../containers/AuthContainer'

class App extends Component {
  render() {
    let authGateway = () => {
      if (this.props.token) {
        return(
          <div>
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

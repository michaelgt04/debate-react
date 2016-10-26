import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignOutUser } from '../actions/AuthActions'
import PostingContainer from '../containers/PostingContainer'
import Header from '../components/Header'

class Debate extends Component {
  render () {
    return(
      <div>
        <div className="row">
          <Header
            signOut={this.props.signOut}
          />
        </div>
        <div className="row">
          <div className="columns small-6 scrollable full-panel">
            <h3>Debate</h3>
          </div>
          <div className="columns small-6 scrollable half-panel">
            <h3>Sources</h3>
          </div>
          <div className="columns small-6 scrollable half-panel">
            <h3>New Post</h3>
            <PostingContainer />
          </div>
        </div>
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

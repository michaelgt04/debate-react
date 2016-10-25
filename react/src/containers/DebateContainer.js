import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignOutUser } from '../actions/AuthActions'
import PostingContainer from '../containers/PostingContainer'

class Debate extends Component {
  render () {
    return(
      <div className="row">
        <PostingContainer />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {

  }
}



export default connect(mapStateToProps)(Debate);

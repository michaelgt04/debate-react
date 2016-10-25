import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostingContainer extends Component {
  render() {
    return(
      <div className="columns small-6 scrollable full-panel">
        <h1>DEBATE TIME!!!!</h1>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {

  }
}

export default connect(mapStateToProps)(PostingContainer)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewPost from '../components/NewPost'
import { CreatePost } from '../actions/PostActions'
import { HandleNewPost } from '../actions/PostActions'

class PostingContainer extends Component {
  render() {
    return(
      <div>
        <NewPost
          handlePostSubmit={this.props.handlePostSubmit}
          handleNewPost={this.props.handleNewPost}
        />
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
    handlePostSubmit: (event) => {
      event.preventDefault()
      dispatch(CreatePost())
    },
    handleNewPost: (event) => {
      let newPost = event.target.value
      dispatch(HandleNewPost(newPost))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostingContainer)

import React from 'react'

const NewPost = props => {
  return(
    <form>
      <input type='text' onChange={props.handleNewPost}/>
      <input type='submit' className='button' onClick={props.handlePostSubmit}/>
    </form>
  )
}

export default NewPost;

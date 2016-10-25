import React from 'react'

const PostInfo = props => {
  return(
    <div>
      <p>{props.body}</p>
      <p className="list">{props.time}</p>
    </div>
  )
}

export default PostInfo;

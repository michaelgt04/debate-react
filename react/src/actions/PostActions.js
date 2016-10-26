export const CreatePost = () => {
  return (dispatch, getState) => {
    debugger;
    let token = getState().tokenState
    let newPost = getState().newPostState
    $.ajax({
      method: 'POST',
      url: 'posts',
      data: {
        post: newPost
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', token)
      },
      error: function () {

      },
      success: function(data) {

      }
    })
  }
}

export const HandleNewPost = (newPost) => {
  return {
    type: "NEW_POST",
    newPost
  }
}

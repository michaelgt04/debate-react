export const AddUsername = (username) => {
  return {
    type: "USERNAME_CHANGE",
    username
  }
}

export const AddPassword = (password) => {
  return {
    type: "PASSWORD_CHANGE",
    password
  }
}

export const TeacherStatus = (status) => {
  return {
    type: "TEACHER",
    status
  }
}

export const GetToken = () => {
  return (dispatch, getState) => {
    let state = getState()
    let password = state.passwordState
    let username = state.usernameState
    let url = '/student_token'
    if (state.roleState) {
      url = '/teacher_token'
    }
    $.ajax({
    method: 'POST',
    url: url,
    data: {
      auth: {
        email: username,
        password: password
      }},
    error: function () {
      dispatch(SignInError())
    },
    success: function(data) {
      dispatch(SignInValid(data.jwt));
      sessionStorage.setItem("token", data.jwt);
    }
  })

  }
}

export const SignInValid = (token) => {
  return {
    type: "TOKEN",
    token
  }
}

export const SignInError = () => {
  return {
    type: "ERROR"
  }
}

export const SignOutUser = () => {
  return {
    type: "LOGOUT"
  }
}

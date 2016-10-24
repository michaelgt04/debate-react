export const usernameReducer = (state="", action) => {
  switch (action.type) {
    case "USERNAME_CHANGE":
      return action.username
    case "LOGOUT":
      return ""
    default:
      return state
  }
}

export const passwordReducer = (state="", action) => {
  switch (action.type) {
    case "PASSWORD_CHANGE":
      return action.password
    case "LOGOUT":
      return ""
    default:
      return state
  }
}

export const roleReducer = (state=false, action) => {
  switch (action.type) {
    case "TEACHER":
      return action.status
    case "LOGOUT":
      return false
    default:
      return state
  }
}

export const tokenReducer = (state=sessionStorage.getItem("token"), action) => {
  switch (action.type) {
    case "TOKEN":
      return action.token
    case "LOGOUT":
      return ""
    default:
      return state
  }
}

export const errorReducer = (state="", action) => {
  switch (action.type) {
    case "ERROR":
      return "Invalid Sign In, Please Try Again!"
    case "LOGOUT":
      return ""
    default:
      return state
  }
}

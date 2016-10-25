export const studentInfoReducer = (state=[], action) => {
  switch (action.type) {
    case "STUDENT_INFO":
      return action.students
    case "LOGOUT":
      return []
    default:
      return state
  }
}

export const debateInfoReducer = (state=[], action) => {
  switch (action.type) {
    case "DEBATE_INFO":
      return action.debates
    case "LOGOUT":
      return []
    default:
      return state
  }
}

export const courseInfoReducer = (state=[], action) => {
  switch (action.type) {
    case "COURSE_INFO":
      return action.courses
    case "LOGOUT":
      return []
    default:
      return state
  }
}

export const postInfoReducer = (state=[], action) => {
  switch (action.type) {
    case "POST_INFO":
      return action.posts
    case "LOGOUT":
      return []
    default:
      return state
  }
}

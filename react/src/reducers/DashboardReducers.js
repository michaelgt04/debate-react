export const studentInfoReducer = (state=[], action) => {
  switch (action.type) {
    case "STUDENT_INFO":
      return action.students
    default:
      return state
  }
}

export const debateInfoReducer = (state=[], action) => {
  switch (action.type) {
    case "DEBATE_INFO":
      return action.debates
    default:
      return state
  }
}

export const courseInfoReducer = (state=[], action) => {
  switch (action.type) {
    case "COURSE_INFO":
      return action.courses
    default:
      return state
  }
}

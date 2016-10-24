export const studentInfoReducer = (state="", action) => {
  switch (action.type) {
    case "STUDENT_INFO":
      return action.students
    default:
      return state
  }
}

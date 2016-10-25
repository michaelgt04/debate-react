export const GetTeacherInfo = () => {
  return (dispatch, getState) => {
    let token = getState().tokenState
    $.ajax({
    method: 'GET',
    url: '/teachers',
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', token)
    },
    error: function () {

    },
    success: function(data) {
      dispatch(StudentInfo(data.students));
      dispatch(DebateInfo(data.debates));
      dispatch(CourseInfo(data.courses))
    }
  })
  }
}

export const StudentInfo = (students) => {
  return {
    type: "STUDENT_INFO",
    students
  }
}

export const DebateInfo = (debates) => {
  return {
    type: "DEBATE_INFO",
    debates
  }
}

export const CourseInfo = (courses) => {
  return {
    type: "COURSE_INFO",
    courses
  }
}

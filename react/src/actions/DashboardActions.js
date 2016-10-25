export const GetInfo = () => {
  return (dispatch, getState) => {
    let teacher = getState().roleState
    let token = getState().tokenState
    let url = '/students'
    if (teacher) {
      url = '/teachers'
    }
    $.ajax({
    method: 'GET',
    url: url,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', token)
    },
    error: function () {

    },
    success: function(data) {
      if (teacher) {
        dispatch(StudentInfo(data.students))
      } else {
        dispatch(PostInfo(data.posts))
      }
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

export const PostInfo = (posts) => {
  return {
    type: "POST_INFO",
    posts
  }
}

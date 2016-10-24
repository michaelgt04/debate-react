export const GetStudents = () => {
  return dispatch => {
    let token = sessionStorage.getItem("token")
    $.ajax({
    method: 'GET',
    url: '/teachers',
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', token)
    },
    error: function () {
      dispatch(SignInError())
    },
    success: function(data) {
      dispatch(StudentInfo(data.students));
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

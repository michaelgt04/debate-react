import React, { Component } from 'react'
import { dispatch, connect } from 'react-redux'
import StudentInfo from '../components/StudentInfo'
import DebateInfo from '../components/DebateInfo'
import CourseInfo from '../components/CourseInfo'
import { GetTeacherInfo } from '../actions/DashboardActions'

class DashboardContainer extends Component {
  componentWillMount() {
    this.props.getInfo()
  }

  render () {
    let studentKeyNumber = 0
    let students = this.props.students.map(student => {
      studentKeyNumber ++
      return(
        <StudentInfo
          key={studentKeyNumber}
          firstName={student.studentFirst}
          lastName={student.studentLast}
          username={student.studentUsername}
        />
      )
    })

    let debateKeyNumber = 0
    let debates = this.props.debates.map(debate => {
      debateKeyNumber ++
      return(
        <DebateInfo
          key={debateKeyNumber}
          topic={debate.debateTopic}
          course={debate.debateClass}
        />
      )
    })

    let courseKeyNumber = 0
    let courses = this.props.courses.map(course => {
      courseKeyNumber ++
      return(
        <CourseInfo
          key={courseKeyNumber}
          grade={course.courseGrade}
          subject={course.courseSubject}
          year={course.courseYear}
        />
      )
    })

    return (
      <div className="row">
        <div className="columns small-6 scrollable full-panel">
          <h3>Students:</h3>
          {students}
        </div>
        <div className="columns small-6 scrollable half-panel">
          <h3>Debates</h3>
          {debates}
        </div>
        <div className="columns small-6 scrollable half-panel">
          <h3>Classes</h3>
          {courses}
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    students: store.studentState,
    debates: store.debateState,
    courses: store.courseState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInfo: () => {
      dispatch(GetTeacherInfo())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

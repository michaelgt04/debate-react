import React, { Component } from 'react'
import { dispatch, connect } from 'react-redux'
import StudentInfo from '../components/StudentInfo'
import { GetStudents } from '../actions/DashboardActions'

class DashboardContainer extends Component {
  componentDidMount() {
    this.props.getStudents()
  }

  render () {
    let keyNumber = 0
    let students = this.props.students.map(student => {
      keyNumber ++
      return(
        <StudentInfo
          key={keyNumber}
          firstName={student.studentFirst}
          lastName={student.studentLast}
          username={student.studentUsername}
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
        </div>
        <div className="columns small-6 scrollable half-panel">
          <h3>Classes</h3>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    students: store.studentState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStudents: () => {
      dispatch(GetStudents())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

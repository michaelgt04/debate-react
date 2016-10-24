import React, { Component } from 'react'
import { dispatch, connect } from 'react-redux'
import StudentInfo from '../components/StudentInfo'
import { GetStudents } from '../actions/DashboardActions'

class DashboardContainer extends Component {
  componentDidMount() {
    this.props.getStudents()
  }

  render () {
    return (
      <StudentInfo students={this.props.students}/>
    )
  }
}

const mapStateToProps = store => {
  debugger;
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

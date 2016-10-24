import React, { Component } from 'react'
import { dispatch, connect } from 'react-redux'
import StudentInfo from '../components/StudentInfo'
import { GetStudents } from '../actions/DashboardActions'

class DashboardContainer extends Component {
  componentDidMount() {
    debugger;
    this.props.getStudents()
  }

  render () {
    return (
      <StudentInfo />
    )
  }
}

const mapStateToProps = store => {
  return {
    students: store.studentInfoState
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

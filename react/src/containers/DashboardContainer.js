import React, { Component } from 'react'
import { dispatch, connect } from 'react-redux'
import StudentInfo from '../components/StudentInfo'
import DebateInfo from '../components/DebateInfo'
import CourseInfo from '../components/CourseInfo'
import PostInfo from '../components/PostInfo'
import { GetInfo } from '../actions/DashboardActions'
import { SignOutUser } from '../actions/AuthActions'
import Header from '../components/Header'

class DashboardContainer extends Component {
  componentWillMount() {
    this.props.getNewInfo()
  }

  render () {
    let leftSide = (props) => {
      if (props.teacher) {
        let studentKeyNumber = 0
        let students = props.students.map(student => {
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
        return students
      } else {
        let postKeyNumber = 0
        let posts = props.posts.map(post => {
          postKeyNumber ++
          return(
            <PostInfo
              key={postKeyNumber}
              body={post.postBody}
              time={post.postTime}
            />
          )
        })
        return posts
      }
    }

    let leftHeader = props => {
      if (props.teacher) {
        return "Students"
      } else {
        return "Posts"
      }
    }

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
      <div>
        <div className="row">
          <Header
            signOut={this.props.signOut}
          />
        </div>
        <div className="row">
          <div className="columns small-6 scrollable full-panel">
            <h3>{leftHeader(this.props)}</h3>
            {leftSide(this.props)}
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
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    students: store.studentState,
    debates: store.debateState,
    courses: store.courseState,
    teacher: store.roleState,
    posts: store.postState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNewInfo: () => {
      dispatch(GetInfo())
    },
    signOut: () => {
      dispatch(SignOutUser())
      sessionStorage.clear()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

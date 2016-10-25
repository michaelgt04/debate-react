import React from 'react'

const CourseInfo = props => {
  return(
    <p className="list">{props.grade} {props.subject} {props.year}</p>
  )
}

export default CourseInfo;

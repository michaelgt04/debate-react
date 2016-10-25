import React from 'react'

const StudentInfo = props => {
  return(
    <p className="list">{props.firstName} {props.lastName} {props.username}</p>
  )
}

export default StudentInfo;

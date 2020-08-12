import React from 'react'

// importing from same directory
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Courses = (props) => {
  const { courses } = props

  return (
    <React.Fragment>
      {courses.map((course) => {
        return (
          <React.Fragment>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}

export default Courses;
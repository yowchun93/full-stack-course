import React from 'react'

import Part from './Part';

const Content = (props) => {
  return (
    <React.Fragment>
      <Part
        part={props.part1}
        exercises={props.exercises1}
      />
      <Part
        part={props.part1}
        exercises={props.exercises1}
      />
      <Part
        part={props.part1}
        exercises={props.exercises1}
      />
    </React.Fragment>
  )
}

export default Content;
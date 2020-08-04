import React from 'react'

import Part from './Part';

const Content = (props) => {
  return (
    <React.Fragment>
      {
        props.parts.map((part) => {
          return (
            <Part
              part={part.name}
              exercises={part.exercises}
            />
          )
        })
      }
    </React.Fragment>
  )
}

export default Content;
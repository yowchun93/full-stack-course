import React from 'react'

const Header = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

export default Header;
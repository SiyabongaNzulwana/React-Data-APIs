
import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map((beer,i) => (
    <li key={i}>
      {beer.name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions
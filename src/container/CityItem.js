import React from 'react'

export default props => {
  const index = props.index
  const items = props.items

  return (
    <div>
      <div>{ index }</div>
      <ul>
      {
        items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))
      }
      </ul>
    </div>
  )
}

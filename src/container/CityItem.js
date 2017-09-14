import React from 'react'

export default props => {
  const index = props.index
  const items = props.items

  return (
    <div>
      <div className="city-head">{ index }</div>
      <ul className="city-ul">
      {
        items.map((item, index) => (
          <li className="city-item" key={index}>{item.name}</li>
        ))
      }
      </ul>
    </div>
  )
}

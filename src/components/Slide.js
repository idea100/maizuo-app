import React from 'react'

export default props => {
  const items = props.items

  return (
    <div className="top-images">
      <ul>
        {
          items.map((item, index) =>(
            <li className={'silder silder' + index} key={index}>
              <img src={item.imageUrl} alt={item.name}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

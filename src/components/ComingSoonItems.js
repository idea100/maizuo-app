import React from 'react'

const formatterMothAndDate = time => {
  const date = new Date(time)
  return `${date.getMonth() + 1}月${date.getDate()}日`
}

export default props => {
  const items = props.items

  return (
    <div>
      {
        items.map((item, index) => (
          <div className="coming-soon" key={index}>
            <img src={item.cover.origin} alt={item.name}/>
            <div className="coming-movice-msg">
              <span className="msg-left">{item.name}</span>
              <span className="msg-right">{formatterMothAndDate(item.premiereAt)}上映</span>
            </div>
          </div>
        ))
      }
      <div className="show-more">
        <div className="more-button">更多即将上映电影</div>
      </div>
    </div>
  )
}

import React from 'react'

const Title = (props) => {
  return (
    <div className='title'>
    <h2>{props.title || 'Default Title'}</h2>
    <div className="title-underline"></div>
    </div>
  )
}

export default Title

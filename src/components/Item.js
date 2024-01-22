import React from 'react'
import './Item.css' 
const Item = (props) => {
    const ItemName=props.name;
  return (
    <div className='item'>{ItemName}</div>
  )
}

export default Item
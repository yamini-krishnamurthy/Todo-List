import React from 'react'

const ListItem = (props) => {
  return (
    <li className={`${props.styleName}`} onClick={props.handleItem}>
      <span class="item-name font">
        {props.value}
      </span>
      <button id="trash-button" onClick={props.handleTrash}>
        <i className="fa fa-trash"></i>
      </button>
    </li>
  )
}

export default ListItem

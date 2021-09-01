import React from 'react'
import "./styles.css"
import { ReactComponent as AddUserIcon } from "../../../assets/icons/add_user.svg";

function Button({content}) {
  return (
    <div className="add-user">
      <button>
          <AddUserIcon />
          <p>{content}</p>
      </button>
    </div>
  )
}

export default Button
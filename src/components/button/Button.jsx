import React from 'react'
import '../button/button.scss'

function Button(props){ 
  let classButton = "button-slide"

  if(props.active){
    classButton = classButton + ' button-is-active'
  }

  return(
    <>
      <button className={classButton} onClick={props.onClick}></button>
    </>
  )
}

export default Button;
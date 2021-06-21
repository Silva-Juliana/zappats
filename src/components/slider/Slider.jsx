import React from 'react'
import '../slider/slider.scss'

function Slider(props) {
  return (
    <div className={props.className}>
      <span className="title-how-to">
        {props.title}
      </span>
      <p className="informations">
        {props.informations}
      </p>
    </div>
  )
}

export default Slider;
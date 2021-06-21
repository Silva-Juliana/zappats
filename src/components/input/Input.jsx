import React from 'react'
import '../input/input.scss'

function Input(props){ 
  let classDiv = 'container-input'

  if(props.error){
    classDiv = classDiv + ' error-div'
  }

  return (
    <>
      <div className={classDiv}>
        <label>{props.label}</label>
        <input 
          onChange={props.onChange}
          className='new-input' 
          type={props.type} 
          name={props.name}
        />

        <span className='span'>{props.errMsg}</span>
      </div>
    </>
  )
}

export default Input;
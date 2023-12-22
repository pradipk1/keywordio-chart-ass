import React from 'react'
import './InputContainer.css'

function InputContainer({label, placeholder}) {
  return (
    <div className='inputContainer'>
        <label>{label}</label>
        <input type="text" placeholder={placeholder} />
    </div>
  )
}

export default InputContainer;
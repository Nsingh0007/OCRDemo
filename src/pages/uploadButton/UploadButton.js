import React from 'react'
import "./uploadButton.css"
const UploadButton = ({onClick}) => {
  return (
    <div className='uploadBtn' onClick={onClick}  >
      <button className='uploadBtnMain'>Submit</button>
    </div>
  )
}

export default UploadButton

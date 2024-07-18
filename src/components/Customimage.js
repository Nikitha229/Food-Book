import React from 'react'

const Customimage = ({imgsrc,pt}) => {
  return (
    <div className='custom-image' style={{paddingTop: pt}}>
      <img src={imgsrc} alt=""/>
    </div>
  )
}

export default Customimage

import React from 'react'

function Footer() {
  const date=new Date();
  
  return (
    <div className='footer'>Copyright @ {date.getFullYear()}</div>
  )
}

export default Footer
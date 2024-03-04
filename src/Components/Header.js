import React from 'react'
import {FaLaptop,FaTabletAlt,FaMobileAlt} from 'react-icons/fa'; 


function Header({title,width}) {
  return (
        <div className='header'>
            <h1>{title}</h1>
            <div className='logo'>
              {width <768 ? <FaMobileAlt id='logo' />
              : width < 992 ? <FaTabletAlt id='logo' />
              : <FaLaptop id='logo'/>
              }
            </div>
        </div>
  )
 
}
const defaultProps={
  title:"Sample Social Media"
}

export default Header
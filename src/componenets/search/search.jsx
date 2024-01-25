import React from 'react'
import './search.css'
export default function Search() {
  return (
    <div className='navbar_search'>
    <div className='container'>
      <div className="row">
         <div className="search">
         <button className="menu-button">☰ Каталог</button>
          <input  className='search_input' placeholder='search' type="text" />  
         </div>
      </div>
    </div>
  </div>

  )
}

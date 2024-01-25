import React from 'react'
import './navbar.css'
export default function Navbar() {
    const navbarItems = [
        {
            title: 'Главная',
            path: '/home',
        },
        {
            title: 'Каталог ',
            path: '/home',
        },
        {
            title: 'О нас ',
            path: '/home',
        },
        {
            title: 'Новости',
            path: '/home',
        },
        {
            title: 'Блог ',
            path: '/home',
        },
        {
            title: ' Контакты ',
            path: '/home',
        },
      ]
  return (
   
    <div >
        <section className='section_navbar'>
        <div className='container navbar_section'>
      <div className='row align-items-center'>
          <div className='logo'>
              <img src='Grouplogo.png'alt='Trevland logo'/>
              <p className='navbar_text'>Hi-tech <br/>Orient <br/> Medical</p>
          </div>
         
          <ul className='navbar'>
              {
                  navbarItems.map(item => {
                      return (
                          <li className='navbar_item'>
                              <a href={item.path} className='navbar_item_link'>{item.title}</a>
                          </li>
                      )
                  })
              }
          </ul>
          <div className='russian_now'>
        <img src="Group 2136russianfull.png" alt="icon-right"  />
          </div>
      </div>
  </div>
        </section>
    </div>
  )
}

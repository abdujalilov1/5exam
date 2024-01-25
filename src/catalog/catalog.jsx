import React from 'react'
import './catalog.css'
export default function Catalog() {
  return (
    <div className='hero_section'>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <p className='hero_title'>Медицинское <br /> оборудование от <br /> лучших производителей</p>
          <p className='hero_text'>EТ400 – многофункциональный универсальный акушерский стол с <br /> механико- гидравлическим приводом, специально предназначенный для <br /> безопасного позиционирования пациента при выполнении <br /> гинекологически - акушерских операций, осмотров и родов в <br /> гинекологических отделениях, женских консультациях, роддомах.</p>
          <button className='hero_button'>Подробнее</button>
        </div>
        <div className="col-6">
          <div className="hero_image">
          <img src="image 22hospita.png" alt="hospital" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


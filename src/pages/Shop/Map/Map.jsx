import React, { Component } from 'react'
import Img from '../Map/img/image.png'
import './Map.scss'

export default class Map extends Component {
  render() {
    return (
      <div className='container'>
        <div className="regions">
         <h1>  Наши магазины</h1>
         <h2>Выберите район:</h2>
         <ul>
            <li>Все районы</li><li>Алмазарский район</li>
            <li>Бектемирский район</li><li>Зангиотинский район</li>
            <li>Мирабадский район</li><li>Мирзо-Улугбекский район</li>
            <li>Сергелийский район</li><li>Учтепинский район</li>
            <li>Шайхантахурский район</li><li>Чиланзарский район</li>
            <li>Юнусабадский район</li><li>Яккасарайский район</li>
            <li>Яшнабадский район</li>
         </ul>

        </div>
        <div className="map">
       <img src={Img}alt="" />
       <h3>Не удалось найти близжайший магазин? Попробуйте проложить маршрут:  
         <a href="">ПРОЛОЖИТЬ МАРШРУТ</a></h3>
      
       
   </div>
      </div>
      
    )
  }
}





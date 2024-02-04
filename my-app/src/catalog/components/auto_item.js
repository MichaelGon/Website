import React from 'react'
import './auto_items.css'
import { Link } from 'react-router-dom'

const AutoItem = props => {
    return (
        <li className='elem'>
            <div className='product_photo'>
                <Link to={`/order/${(props.ind <=2) ? (props.ind) : (props.ind - 1)}`}><img className='product' src={props.url} alt='' /></Link>
                <div className='content'>
                    <p className='title'>{props.title}</p>
                    <p><img src='https://cdn-icons-png.flaticon.com/128/2051/2051339.png' className='fuel' /> Бензиновый &nbsp; &nbsp; <img src='https://cdn-icons-png.flaticon.com/128/1723/1723692.png' className='fuel'/> Механика</p>
                    <p><img src='https://cdn-icons-png.flaticon.com/128/2520/2520422.png' className='fuel' /> Полный &nbsp; &nbsp; <img src='https://cdn-icons-png.flaticon.com/128/5858/5858931.png' className='fuel' /> 2023</p>
                    <p>Стоимость: {props.cost}₽</p>
                </div>
            </div>
        </li>
    )
}

export default AutoItem
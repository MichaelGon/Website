import React, { useState, useEffect } from 'react'
import './auto_page.css'
import { ApiService } from '../../services/ApiService'
import { Link } from 'react-router-dom'

const AutoPage = props => {
    const isAuth = Boolean(window.localStorage.getItem("access"))
    const [baseusers, setBaseusers] = useState([])
    const [current, setCurrent] = useState([])

    useEffect(() => {
      (async () => {
      const us = await ApiService('clients/');
      setBaseusers(us);
      const curr = await ApiService('clients/current')
      setCurrent(curr)
      })();
      }, []);

    const onOrder = async () => {
      console.log(current.id)
      const formData = new FormData()
      formData.append("client", current.id)
      formData.append("car", props.id)
      formData.append("supply_date", "2023-11-22")
      formData.append("purch_date", "2023-11-22")


      await ApiService("orders/", {
        method: "post",
        headers: {

        },
        body: formData,
      });

      window.location.reload();
    }

    return (
        <section className="about-us">
            <div className="about">
                <img src={props.photo} alt='' className="pic"/>
                    <div className="text">
                        <h2>{props.title}</h2>
                    <div className='content'>
                        <p><img src='https://cdn-icons-png.flaticon.com/128/2051/2051339.png' className='fuel' /> Бензиновый &nbsp; &nbsp; <img src='https://cdn-icons-png.flaticon.com/128/1723/1723692.png' className='fuel' /> Механика</p>
                        <p><img src='https://cdn-icons-png.flaticon.com/128/2520/2520422.png' className='fuel' /> Полный &nbsp; &nbsp; <img src='https://cdn-icons-png.flaticon.com/128/5858/5858931.png' className='fuel' /> 2023</p>
                        <p>Двигатель: {props.engine}</p>
                        <p>Модификация: {props.modification}</p>
                        <p>Комплектация: {props.configuration}</p>
                        <p>Стоимость: {props.cost}₽</p>
                    </div>
                    <div className="data">
                        {isAuth ? (<button className="hire" onClick={onOrder}>Заказать</button>) : (<Link to='/account' className="hire">Заказать</Link>)}
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default AutoPage
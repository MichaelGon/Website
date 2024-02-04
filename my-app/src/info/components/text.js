import React from 'react'
import './text.css'
import { Link } from 'react-router-dom'

const Text = () => {
    const isAuth = Boolean(window.localStorage.getItem("access"))

    return (
        <section className="about-us">
            <div className="about">
                <img src="https://sportishka.com/uploads/posts/2022-04/thumbs/1651348950_13-sportishka-com-p-mashina-osen-mashini-krasivo-foto-15.jpg" className="pic"/>
                    <div className="text">
                        <h2>Про Нас</h2>
                    <h5>Продажа автомобилей & <span>{isAuth ? (<Link to='/service' className='link_service'>Сервис</Link>) : (<Link to='/account' className='link_service'>Сервис</Link>)}</span></h5>
                    <p>Автомобильная группа DEALERlead — лидирующая, динамично развивающаяся автомобильная компания в России. На сегодня DEALERlead имеет в своем портфеле 44 автомобильных бренда: Rolls-Royce, Aurus, Bentley, Aston Martin, Ferrari, Bugatti, Maserati, Mercedes-Benz, Mercedes-АMG, BMW, BMW i, MINI, Motorrad, Audi, Cadillac, Jaguar, Land Rover, Genesis, Volvo, Сhevrolet, Volkswagen, Ford, Jeep, Hyundai, Fiat, Peugeot, Citroën, Mitsubishi, KIA, Faw, Exeed, Chery, Changan, Haval, Geely, Evolute.</p>
                        <div className="data">
                        <Link to='/catalog' className="hire">Ознакомиться с каталогом</Link>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Text
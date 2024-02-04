import './components/Header.css'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ApiService } from '../services/ApiService'

const Header = () => {
  const [client, setClient] = useState(null)
  const onLogout = () => {
    window.localStorage.removeItem("access");
    window.localStorage.removeItem("refresh");

    window.location.reload();

    window.location.href = "/";
  }

  const isAuth = Boolean(window.localStorage.getItem("access"))

  useEffect(() => {
    (async () => {
      if (isAuth) {
        const client = await ApiService("clients/current")
        
        setClient(client)
      }
    })();
  }, []);

    return (
      <div className='header'>
        <div className='logo-name'>
          <img id="logo-photo"
            src="https://avatars.mds.yandex.net/get-images-cbir/2408252/6r97q4JU3OY1575WyEIukg5098/ocr"
            alt="Logo"
          />
          
          <a href='/'><h1>DEALERlead</h1></a>
        </div>
        <div id='number-links'>
          <div id='number-div'>
            <p className='telephone-number'>+7 (xxx) xxx-xx-xx</p>
            {isAuth ? (<Link to='/service' className='service-header'><button className='service-button'><h2>Запись на сервис</h2></button></Link>) : (<Link to='/account' className='service-header'> <button className='service-button'><h2>Запись на сервис</h2></button> </Link>)}
          </div>
          <div>
            <ul className='links'>
              <li><Link to='/catalog'><button className='catalog'><h2>Каталог</h2></button></Link></li>
              <li><Link to='/info'><button className='catalog'><h2>О компании</h2></button></Link></li>
              <li><Link to='/contact_us'><button className='catalog'><h2>Контакты</h2></button></Link></li>
              <li>{isAuth ? (<button className='catalog' onClick={onLogout}><h2>{client ? 'Выйти, ' + client.username : 'Выйти'}</h2></button>) : (<Link to='/account'> <button className='catalog'><h2>Личный кабинет</h2></button> </Link>)}</li>
            </ul>
          </div>
        </div>
      </div>       
    )
}

export default Header
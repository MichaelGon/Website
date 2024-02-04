import './components/Header.css'
import React from 'react'

const Footer = () => {
    return (
      <div className='footer'>
        <img id="logo-photo"
          src="https://avatars.mds.yandex.net/get-images-cbir/2408252/6r97q4JU3OY1575WyEIukg5098/ocr"
              alt="Logo"
            />
            
        <a href='/' className='footer-name'><h1>DEALERlead</h1></a>
        <div className='comments'>
          <h2>Оставьте комментарий</h2>
          <input type='text' placeholder='Ваш комментарй...'/>
          <button className='comment-button' onClick={() => console.log("Комментарий отправлен.")}>
            Отправить
          </button>
          
          <div className='hidden'>
            Сайт автосалона &copy; 2023, Все права защищены
          </div>
        </div>
      </div>
    )
}

export default Footer
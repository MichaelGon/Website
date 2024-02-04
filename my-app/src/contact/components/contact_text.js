import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'

const Contact_us = () => {
    return (
        <section className="about-us">
            <div className="about">
                <div className="text">
                    <h2>Свяжись с нами</h2>
                    <p>Наша команда всегда готова помочь, мы проконсультируем Вас по любому возникшему вопросу: автомобильные новинки, поставки от производителей, тест-драйв, специальные предложения для постоянных клиентов...</p>
                </div>
                <div class="colmun-30 get_say_form">
                    <h5>Будь на связи!</h5>
                    <ul class="get_say_info_sec">
                        <li>
                            <span className='mail'>✉️</span>
                            <span className='mail_text'>xxx.com</span>
                        </li>
                        <li>
                            <span className='tel'>✆</span>
                            <span className='tel_text'>+7 (xxx) xxx-xx-xx</span>
                        </li>
                        <li>
                            <span className='skype_sym'><img src='https://cdn-icons-png.flaticon.com/128/2111/2111609.png'></img></span>
                            <span className='skype'>xxx</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact_us
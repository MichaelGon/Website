import React, { useState } from 'react'
import './forms.css'
import { ApiService } from '../../services/ApiService'

const Forms = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onAuth = async (event) => {
        event.preventDefault()

        const {access, refresh} = await ApiService("token/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({username: login, password}),
        })

        window.localStorage.setItem('access', access)
        window.localStorage.setItem('refresh', refresh)

        window.location.href = "/"
    }

    const onRegister = async (event) => {
        await ApiService("clients/", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },      

            body: JSON.stringify({username: login, password, email, first_name: firstName, last_name: lastName}),
        });

        await onAuth(event);
    }

    return (
        <div className='main1'>
            <input type="checkbox" id="chk" aria-hidden="true"/>
                <div className="signup">
                    <form>
                    <label for="chk" aria-hidden="true">Регистрация</label>
                    <input className="input2" type="text" name="txt" placeholder="Логин" required="" value={login} onChange={(event) => setLogin(event.target.value)}/>
                    <input className="input2" type="text" name="name" placeholder="Имя" required="" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                    <input className="input2" type="text" name="surname" placeholder="Фамилия" required="" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                    <input className="input2" type="email" name="email" placeholder="Email" required="" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <input className="input2" type="password" name="pswd" placeholder="Пароль" required="" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    <button className='button1' type={"submit"} onClick={onRegister}>Зарегистрироваться</button>
                    </form>
                </div>

                <div class="login">
                <form>
                    <label for="chk" aria-hidden="true">Авторизация</label>
                    <input className="input1" type="text" name="text" placeholder="Логин" required="" value={login} onChange={(event) => setLogin(event.target.value)}/>
                    <input className="input1" type="password" name="pswd" placeholder="Пароль" required="" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    <button className='button1' onClick={onAuth}>Войти</button>
                </form>
                </div>
        </div>
    )
}

export default Forms
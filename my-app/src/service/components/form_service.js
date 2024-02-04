import React, { useState, useEffect } from 'react'
import { ApiService } from '../../services/ApiService';
import './form_service.css'

const Form_service = () => {
    const [login, setLogin] = useState('');
    const [car_num, setCarNum] = useState('');
    const [date, setDate] = useState('');
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

    const onService = async () => {
      const formData = new FormData()
      formData.append("client", current.id)
      formData.append("date", date)
      formData.append("car_num", car_num)

      await ApiService("service_orders/", {
        method: "post",
        headers: {

        },
        body: formData,
      });

      window.location.reload();
    }
    
    return (
        <div className='main1'>
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="signup">
                <form>
                    <label for="chk" aria-hidden="true">Запись</label>
                    <input className="input1" type="text" name="txt" placeholder="Логин" required="" value={login} onChange={(event) => setLogin(event.target.value)}/>
                    <input className="input1" type="text" name="number" placeholder="Номер автомобиля" required="" value={car_num} onChange={(event) => setCarNum(event.target.value)}/>
                    <input className="input1" type="date" name="date" required="" value={date} onChange={(event) => setDate(event.target.value)}/>
                    <button className='button1' onClick={onService}>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Form_service
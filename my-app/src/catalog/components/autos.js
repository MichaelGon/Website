import React, { useEffect, useState } from 'react'
import AutoItem from './auto_item'
import './autos.css'
import { ApiService } from '../../services/ApiService'

const Autos = () => {
    const [autos_list, setAutosList] = useState([])

    useEffect(() => {
        ; (async () => {
            const data = await fetch('http://127.0.0.1:8000/api/autos/')
            const autos = await data.json()
            setAutosList(autos)
        })()
    }, [])

    return (
        <ul className='container'>
            {autos_list.map(item => (
                <AutoItem url={item.image} title={item.brand} cost={item.cost} ind={item.id}/>
            ))}
        </ul>
    )
}

export default Autos
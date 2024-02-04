import Header from '../header'
import Footer from '../footer'
import React from 'react'
import Autos from './components/autos'
import '../footer/components/Header.css'

const Catalog = () => {
    return (
        <>
            <div className='page'>
                <Header/>
                <Autos/>
            </div>
            <Footer/>
        </>
    )
}

export default Catalog
import Header from '../header'
import Footer from '../footer'
import React from 'react'
import Form_service from './components/form_service'
import '../footer/components/Header.css'

const Service = () => {
    return (
        <>
            <div className='page'>
                <Header />
                <Form_service />
            </div>
            <Footer />
        </>
    )
}

export default Service
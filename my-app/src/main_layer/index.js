import React from 'react'
import Header from '../header'
import Footer from '../footer'
import { Scroller } from './components/scroller'
import './components/Header.css'

const MainLayer = () => {
    return (
        <>
          <div className='page'>
            <Header />
            <Scroller />
          </div>
          <Footer />
        </>
    )
}

export default MainLayer
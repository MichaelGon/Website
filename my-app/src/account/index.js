import Header from '../header'
import Footer from '../footer'
import React from 'react'
import Forms from './components/forms'
import '../footer/components/Header.css'

const Account = () => {
    return (
      <>
        <div className='page'>
          <Header />
          <Forms />
        </div>
        <Footer />
      </>
    )
}

export default Account
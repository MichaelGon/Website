import React from 'react'
import MainLayer from './main_layer'
import { Route, Routes } from 'react-router-dom'
import Account from './account'
import Service from './service'
import Info from './info'
import Contact from './contact'
import Catalog from './catalog'
import Order from './order'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayer/>}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/info" element={<Info />}/>
        <Route path="/contact_us" element={<Contact />}/>
        <Route path="/catalog" element={<Catalog />}/>
        <Route path='/order/:ind' element={<Order />}/>
      </Routes>
    </div>
  )
}

export default App;
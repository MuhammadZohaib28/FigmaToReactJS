import React from 'react'
import './app.css'
import Header from './components/header/Header'
import MainSection from './components/mainSection/MainSection'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './pages/menu/Menu'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Location from '../src/pages/location/Location'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/main' element = {<MainSection />}/>
          <Route path='/menu' element = {<Menu />}/>
          <Route path='/about' element = {<About />}/>
          <Route path='/contact' element = {<Contact />}/>
          <Route path='/location' element = {<Location />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Works'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Work/>
    <Footer/>
    

    {/* <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<About/>} />

        <Route path='/' element={<Skills/>} />

        <Route path='/' element={<Work/>} />

        <Route path='/' element={<Footer/>} />

        
      </Routes> */}
    </>
  )
}

export default App

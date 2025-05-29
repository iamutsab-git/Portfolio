import React from 'react'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Technologies from './components/Technologies/Technologies'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div  className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 my-0" >
    <Nav/>
      <Routes>
           <Route path='/' element= {<Home/>}/>
        <Route path='/home' element= {<Home/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/technologies' element= {<Technologies/>}/>
        <Route path='/portfolio' element= {<Portfolio/>}/>
        <Route path='/contact' element= {<Contact/>}/>
      </Routes>
      <About/>
      <Technologies/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App

import React from 'react'
import Contact from './components/Contact'
import Home from './components/Home'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Education from './components/Education'



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Intro></Intro>
      <Education></Education>
      <Contact></Contact>
      
    </div>
  )
}

export default App
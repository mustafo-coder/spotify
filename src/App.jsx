import React from 'react'
import {Home, Navbar} from './components'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route element={<Home/>} path='/'/>
      </Routes>
    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'

import Add from './components/Add'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Mcard from './components/Mcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    {/* <h1>this is from app.jsx</h1> */}
      {/* <View/>
      <Add/> */}
      <Routes>
        <Route path='/' element={<View/>}></Route>
        <Route path='/add' element={<Add person={{Name:'maya',Email:'my@gmail.com',Password:'abcd',Address:'grac29'}}/>}></Route>
        <Route path='/Mcard' element={<Mcard/>}></Route>
      </Routes>
    </>
  )
}

export default App
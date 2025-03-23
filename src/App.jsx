import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Watchlist from './components/Watchlist'
import { Route, Routes } from 'react-router-dom'
import { MovieContextProvider } from '../src/components/Moviecontext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MovieContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/watchlist' element={<Watchlist/>}></Route>
    </Routes>
    </MovieContextProvider>
    </>
  )
}

export default App

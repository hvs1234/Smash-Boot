import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Home'
import Mens from './Mens'
import Womens from './Womens'
import Buy from './Buy'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Mens' element={<Mens />}></Route>
          <Route path='/Womens' element={<Womens />}></Route>
          <Route path='/Buy' element={<Buy />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
import './App.scss'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Main from './components/Main'
import TentPage from './components/TentPage'
import TablePage from './components/TablePage'
import ChairPage from './components/ChairPage'
import JumperPage from './components/JumperPage'
import BalloonPage from './components/BalloonPage'
import OtherPage from './components/OtherPage'

const App = () => {

  const [cart, setCart] = React.useState([])
  const [badgeCount, setBadge] = React.useState(0)

  const addToCart = (item) => {    
    setCart([...cart, item])
    setBadge(badgeCount + 1)
    console.log(cart)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
          <Route path='tentsPage' element={<TentPage/>} />
          <Route path='tablesPage' element={<TablePage addToCart={addToCart} badgeCount={badgeCount}/>} cart={cart}/>
          <Route path='chairsPage' element={<ChairPage/>} />
          <Route path='jumpersPage' element={< JumperPage />} />
          <Route path='balloonsPage' element={<BalloonPage/>} />
          <Route path='otherPage' element={<OtherPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
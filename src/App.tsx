import React from 'react'
import './App.css'
import SpaceNews from './components/SpaceNews'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleNews from './components/SingleNews'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SpaceNews />} />
          <Route path={'/detail/:newsId'} element={<SingleNews />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

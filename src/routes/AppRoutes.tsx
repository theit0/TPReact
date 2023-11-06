import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Administracion from '../pages/Administracion'
import Componentes from '../pages/Componentes'

const AppRoutes : React.FC = () => {
  return (
    
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/componentes' element={<Componentes/>}/>
        <Route path='/administracion' element={<Administracion/>}/>
    </Routes>
  )
}

export default AppRoutes
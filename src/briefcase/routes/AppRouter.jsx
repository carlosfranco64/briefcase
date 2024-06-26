import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage,About, Projets, Tecnology, Contact } from '../pages/'
import { NavBar } from '../../ui/components/NavBar'


export const AppRouter = () => {
  return (
    <div className='flex'>
<NavBar/>


<Routes>

    <Route path="/" element={<HomePage/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/project" element={<Projets/>} />
    <Route path="/skills" element={<Tecnology/>} />
    <Route path="/contact" element={<Contact/>} />

</Routes>


    </div>
  )
}

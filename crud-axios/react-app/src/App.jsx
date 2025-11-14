import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import Home from '../pages/Home'
import CRUDaxios from '../pages/CRUDaxios'


function App() {


  return (
    <>
      <CRUDaxios></CRUDaxios>
    </>
    )
}

export default App
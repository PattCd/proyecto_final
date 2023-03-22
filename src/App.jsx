import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() { 

  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting= "Bienvenidos a mi e-commerce"/>

    </div>
  )
}

export default App

import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx'

const App = () => {

  return (
    <>
     <NavBar/>
     <ItemListContainer texto="Bienvenidos"/>
    </>
  )
}

export default App
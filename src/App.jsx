import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router> 
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer texto="Bienvenidos" />} />
        <Route
          path="/categoria/:id"
          element={<ItemListContainer texto="Productos filtrados" />}
        />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
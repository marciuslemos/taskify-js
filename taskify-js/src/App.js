import './App.scss'
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Login } from './paginas/Login';
import Home from './paginas/Home';
import AddTarefa from './paginas/AddTarefa';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>} />
          <Route path='/addTarefa' element={<AddTarefa/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
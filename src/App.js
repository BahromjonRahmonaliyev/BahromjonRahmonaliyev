
import './App.scss';
import Home from './pages/home/home';
import Add from './component/add card/Add';
import Login from './component/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Prooducts from './component/all-product/Prooducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Get_Product from './component/get_product/Get_Product';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/add' element={<Add  />}></Route>
          <Route path='/product' element={<Prooducts />}></Route>
          <Route path='/products' element={<Get_Product />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

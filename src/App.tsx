import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import Home from './Modules/home/Home';
import DashboardIndex from './Modules/dashboard';

function App() {
  const dispatch=useDispatch()
  const {states}=useSelector((state:any)=>state.application)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<DashboardIndex/>}/>
      </Routes>

    </div>
  );
}

export default App;

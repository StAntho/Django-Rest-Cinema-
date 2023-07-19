import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './components/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
//    <AuthProvider>
//      <div>
//        <Home />
//        <Login />
//        <Register />
//      </div>
//    </AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

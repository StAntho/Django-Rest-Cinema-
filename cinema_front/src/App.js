import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider } from "./components/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Special from "./components/Special";
import Header from "./components/Header";
import Film from "./components/Film";
import DetailSpecial from "./components/DetailSpecial";
import DeleteSpecial from "./components/DeleteSpecial";

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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Film />} />
        <Route path="/special" element={<Special />} />
        <Route path="/special/:id" element={<DetailSpecial />} />
        <Route path="/special/delete/:id" element={<DeleteSpecial />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

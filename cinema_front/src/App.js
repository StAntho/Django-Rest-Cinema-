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
import DeleteFilm from "./components/DeleteFilm";
import DeleteSpecial from "./components/DeleteSpecial";
import DetailFilm from "./components/DetailFilm";
import Logout from "./components/Logout";
import BookSeance from "./components/BookSeance";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Film />} />
        <Route path="/film/:id" element={<DetailFilm />} />
        <Route path="/film/delete/:id" element={<DeleteFilm />} />
        <Route path="/special" element={<Special />} />
        <Route path="/special/:id" element={<DetailSpecial />} />
        <Route path="/special/delete/:id" element={<DeleteSpecial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/reservation/seance/:id" element={<BookSeance />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

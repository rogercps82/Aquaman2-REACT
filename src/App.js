import "./App.css";
import React from "react";
import Home from "./pages/Home/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./pages/contato/contato.js";
import Fotos from "./pages/fotos/fotos.js";
import Comentarios from "./pages/comentarios/comentarios.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contato.js" element={<Contato />}></Route>
        <Route path="/fotos.js" element={<Fotos />}></Route>
        <Route path="/comentarios.js" element={<Comentarios />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

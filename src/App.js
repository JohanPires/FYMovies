import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// https://api.themoviedb.org/3/search/movie?api_key=448976a292510ff0d9dc52b4c68216d4&query=code&language=fr-FR

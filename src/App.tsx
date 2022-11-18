import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import About from './Pages/About';
import Jokes from './Pages/Jokes';
import MyJokes from './Pages/MyJokes';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Jokes />} />
        <Route path="/jokes" element={<MyJokes />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './utils/style/_index.scss'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home'
import Error from './pages/Error'
import Lodging from './pages/Lodging'
import About from './pages/About'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
        <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/lodging/:id" element={<Lodging />} />
            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />    
        </Router>
    </React.StrictMode>
);



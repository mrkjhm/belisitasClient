import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';
import './App.css'

import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProductList from './pages/ProductList'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import BackForwardButton from "./components/BackForwardButton";


function App() {

  return (
    <>
    <ToastContainer />
      <Router>
        <BackForwardButton />
        <ScrollToTop />
        <Navbar />
        <AnimatePresence>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/product' element={ <ProductList />}/>
          <Route path='/contact-us' element={ <Contact />}/>
          <Route path='/about-us' element={ <About />}/>
          <Route path='/product/:id' element={ <ProductDetail />}/>
          <Route
              path="/category/:categoryName"
              element={ <ProductList />}/>
        </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </>
  )
}

export default App

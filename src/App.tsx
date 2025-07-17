import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import InteriorDesign from './pages/InteriorDesign'
import Products from './pages/Products'
import Contact from './pages/Contact'
import BlogDetails from './components/BlogDetails'
import BlogPage from './pages/Blog'
import ScrollToTop from './components/ScrollToTop'

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/interior-design" element={<InteriorDesign />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AnimatePresence } from 'framer-motion';

import Index from "./pages/index"
import Footer from "./assets/components/footer"
import Header from "./assets/components/header";
import Versions from "./pages/versions";
import About from "./pages/about"

import "./assets/css/main.css"
import "./assets/css/buttons.css"


function App() {


  return (
    <BrowserRouter>
      <Header />
      {/* <AnimatePresence mode="wait"> */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/versions" element={<Versions />} />
          <Route path="/about" element={<About />} />
        </Routes>
      {/* </AnimatePresence> */}
      <Footer />
    </BrowserRouter>
  )
}

export default App

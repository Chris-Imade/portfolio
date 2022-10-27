import React from 'react';
import './App.scss';
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work
} from "./container/index";
import { Navbar } from "./components/index";


const App = () => {

  return (
    <div className="app">
     <Navbar />
     <Header />
     <About />
     <Skills />
     <Testimonials />
     <Work />
     <Footer />
    </div>
  )
}

export default App

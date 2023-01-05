import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from './pages/Services'
import { Contact } from "./pages/Contact";


import '../src/App.css'



function App() {

  return (
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } /> 
        <Route path="services" element={ <Services/> } />
      </Routes>
  );
}

export default App;

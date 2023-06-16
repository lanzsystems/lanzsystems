import "./App.css";
import Home from "./pages/Inicio/inicio";
import { Fonts } from "./fonts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nosotros from "./pages/nosotros/nosotros";
import Videojuegos from "./pages/videojuegos/videojuegos";
import Contacto from "./pages/contacto/contacto";
function App() {
  return (
    <div className="App">
      <Fonts />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/videojuegos" element={<Videojuegos />} />
          <Route exact path="/contacto" element={<Contacto />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

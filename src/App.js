import "./App.css";
import Test from "./components/test";
import Home from "./pages/Inicio/inicio";
import { Fonts } from "./fonts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Fonts />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

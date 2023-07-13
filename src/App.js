import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Servicios from "./components/Servicios";
import Conocenos from "./components/Conocenos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import "./styles/Body.css";

function App() {
  return (
    <div className="App">
      <div className="Body">
        <Navbar />
        <Inicio />
        <Servicios />
        <Conocenos />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}

export default App;

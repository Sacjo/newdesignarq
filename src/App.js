import './App.css';
import Clientes from './Components/Clientes';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NavHeader from './Components/NavHeader';
import Nosotros from './Components/Nosotros';
import Servicios from './Components/Servicios';

function App() {
  return (
    <div>
      <NavHeader />
      <Header />
      <Nosotros />
      <Clientes />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
// import './index.css';  // Asegúrate de que este es el nombre correcto de tu archivo CSS
import Header from './Components/Header/Header';

function App() {

  return (
    <div className='min-h-screen'> 
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;

// Add the following type definition for the 'Home' component props
export type HomeProps = {
  fechas: {
    Fecha: string;
    Precio: string;
    Moneda: string;
    Lugar: string;
  }[];
};
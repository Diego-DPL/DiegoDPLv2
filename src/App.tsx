import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
// import './index.css';  // Asegúrate de que este es el nombre correcto de tu archivo CSS
import Header from './Components/Header/Header';

function App() {

  const fechas = [{
    "Fecha":"2024-08-10",
    "Precio":"FREE",
    "Moneda": "€",
    "Lugar":"Pub Principal (Tijola)",
  },
  {
    "Fecha":"2024-08-10",
    "Precio":"FREE",
    "Moneda": "€",
    "Lugar":"One Living (Murcia)",
  }
  ,
  {
    "Fecha":"2024-08-10",
    "Precio":"FREE",
    "Moneda": "€",
    "Lugar":"Clandestino (Orihuela)",
  },
  {
    "Fecha":"2024-08-10",
    "Precio":"FREE",
    "Moneda": "€",
    "Lugar":"Pan y Agua (Caceres)",
  },
  {
    "Fecha":"2024-08-10",
    "Precio":"FREE",
    "Moneda": "€",
    "Lugar":"San Juan (Caceres)",
  },
  ];

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
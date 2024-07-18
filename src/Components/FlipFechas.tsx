import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface FlipFechasProps {
  fechas: {
    Lugar: string;
  }[];
  inicio: number;  // porcentaje de inicio
  izquierdaADerecha: boolean;  // dirección de desplazamiento
}

const FlipFechas = ({ fechas, inicio, izquierdaADerecha }: FlipFechasProps) => {
  const lugarArray = fechas.map(fecha => fecha.Lugar + ' • ');
  const lugar = lugarArray.join('');
  const lugaresMultiplicados = Array(6).fill(lugar).join(''); // Repetimos los lugares 6 veces
  const controls = useAnimation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    controls.start({
      x: [`${inicio}%`, izquierdaADerecha ? "0%" : "-600%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 180, // Duración de la animación para que sea continua
          ease: "linear",
        },
      },
    });
  }, [controls, inicio, izquierdaADerecha]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    controls.set({
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 360, // Ajusta la duración de la animación cuando se hace hover
          ease: "linear",
        },
      },
    });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    controls.set({
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 180, // Ajusta la duración de la animación normal
          ease: "linear",
        },
      },
    });
  };

  return (
    <div className="relative overflow-hidden whitespace-nowrap text-6xl text-color6 font-bold uppercase sm:text-5xl md:text-6xl lg:text-7xl mb-10 w-full" style={{ lineHeight: '1.2em' }}>
      <motion.div
        className="flex"
        animate={controls}
        initial={{ x: `${inicio}%` }}
        style={{ lineHeight: '1em' }}
      >
        {lugaresMultiplicados.split(' • ').map((word, i) => (
          <motion.span
            className="hover:text-color3"
            key={i}
            style={{ whiteSpace: 'pre', padding: '0 5px' }}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            animate={hoveredIndex === i ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {word} • 
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default FlipFechas;
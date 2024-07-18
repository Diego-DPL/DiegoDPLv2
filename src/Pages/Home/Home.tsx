import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import FlipLink from '../../Components/FlipLink';
import FlipFechas from '../../Components/FlipFechas';

function Home() {
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
      },
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

    const scrollRef = useRef(null);
    const { scrollY } = useScroll({ container: scrollRef });

    const createTransform = (scrollY: any, factor: number) => {
        return useTransform(scrollY, [0, window.innerHeight], [0, -window.innerHeight * factor]);
    };

    const createScale = (scrollY: any, factor: number) => {
        return useTransform(scrollY, [0, window.innerHeight], [1, 1 + factor]);
    };

    const layers = [
        { src: "/assets/Fondo1/Farola.png", z: -2, yFactor: -0.05, scaleFactor: 0.05 },
        { src: "/assets/Fondo1/Pino.png", z: -2, yFactor: -0.04, scaleFactor: 0.04 },
        { src: "/assets/Fondo1/arbol3.png", z: -3, yFactor: -0.06, scaleFactor: 0.03 },
        { src: "/assets/Fondo1/arbol2.png", z: -3, yFactor: -0.04, scaleFactor: 0.02 },
        { src: "/assets/Fondo1/arbol1.png", z: -3, yFactor: -0.03, scaleFactor: 0.01 },
        { src: "/assets/Fondo1/suelo.png", z: -4, yFactor: 0.005, scaleFactor: 0.005 },
        { src: "/assets/Fondo1/sol.png", z: -5, yFactor: -0.3, scaleFactor: 0.02 }, // Mueve hacia abajo
        { src: "/assets/Fondo1/cielo.png", z: -6, yFactor: -0.04, scaleFactor: 0.001 }
    ];

    return (
        <div ref={scrollRef} className="overflow-auto h-screen">
            <section className='head h-[100vh] flex flex-col items-center relative overflow-hidden'>
                {layers.map((layer, index) => (
                    <motion.div
                        key={index}
                        className={`h-full w-full absolute top-0 left-0`}
                        style={{ 
                            zIndex: layer.z, 
                            y: createTransform(scrollY, layer.yFactor), 
                            scale: createScale(scrollY, layer.scaleFactor) 
                        }}
                    >
                        <img src={layer.src} alt="Background" className="w-full h-full object-cover" />
                    </motion.div>
                ))}
                <motion.h1 
                    className='mt-10 text-7xl z-[-5] text-color6 font-bold uppercase sm:text-7xl md:text-8xl lg:text-9xl'
                    style={{ y: createTransform(scrollY, -0.7), scale: createScale(scrollY, 0.2) }}
                >
                    DIEGO DPL
                </motion.h1>
                <motion.h2 
                    className='mt-2 text-2xl z-[-5] text-color6 font-bold uppercase sm:text-2xl md:text-6xl lg:text-7xl'
                    style={{ y: createTransform(scrollY, -0.7), scale: createScale(scrollY, 0.2) }}
                >
                    The Last Dance Tour 2024
                </motion.h2>
            </section>

            <section className='ProximosEventos h-[100vh] flex flex-col items-center bg-bg1 relative'>
                <h1 className='text-7xl text-color6 font-bold uppercase text-center mt-20 mb-40'>Próximos Eventos</h1>
                <FlipFechas fechas={fechas} inicio={0} izquierdaADerecha={false} />
                <FlipFechas fechas={fechas} inicio={-600} izquierdaADerecha={true} />
                <FlipFechas fechas={fechas} inicio={-75} izquierdaADerecha={false} />
            </section>

            <section className='gridRRSS grid grid-cols-2 bg-bg1 h-screen'>
                <section className="grid place-content-center gap-1 px-8 text-color6 mt-[15%]">
                    <h1 className='mb-10 text-color6 text-7xl font-bold uppercase underline sm:text-7xl md:text-8xl lg:text-9xl'>RRSS:</h1>
                    <FlipLink href="https://www.instagram.com/diegodpl">Instagram</FlipLink>
                    <FlipLink href="https://www.youtube.com/channel/UCwLgECSOkIXlSfW2YvS7X8w">Youtube</FlipLink>
                    <FlipLink href="/https://www.tiktok.com/@diegodpl_">Tiktok</FlipLink>
                </section>
                <section className="flex items-center justify-center mt-20">
                    <img className='w-[50%] h-auto ' src="/assets/DSC06390.jpg" alt="DJ"/>
                </section>
            </section>
        </div>
    );
}

export default Home;
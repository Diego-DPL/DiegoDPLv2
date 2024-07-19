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

            <section className='ProximosEventos h-[100vh] flex flex-col items-center bg-color2 relative'>
                <h1 className='text-7xl text-color6 font-bold uppercase underline text-center mt-20 mb-60'>Próximos Eventos</h1>
                <FlipFechas fechas={fechas} inicio={0} izquierdaADerecha={false} />
                <FlipFechas fechas={fechas} inicio={-600} izquierdaADerecha={true} />
                <FlipFechas fechas={fechas} inicio={-75} izquierdaADerecha={false} />
            </section>

            <section className='Canciones flex flex-col items-center bg-color2 relative'>
                <h1 className='text-7xl text-color6 font-bold uppercase underline text-center mt-20 mb-60'>Canciones</h1>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 w-[80%] md:w-[70%] lg:w-[60%]'>
                    <motion.div 
                        className="cancion relative"
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href="https://open.spotify.com/track/00ezmLeUiLssWmBNTwcDC4?si=5f57f55e440749d4" target="_blank">
                            <motion.img whileHover={{ scale: 1.1 }} src="assets/Portadas/laHistoriaLorenaPortada.jpeg" alt="Portada de la canción" />
                            <motion.div 
                                className="titulo absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                                style={{ width: '100%', height: '100%' }}
                            >
                                La Historia
                            </motion.div>
                        </a>
                    </motion.div>
                    <motion.div 
                        className="cancion relative"
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href="https://open.spotify.com/track/5w4BIj5ZrhJw5REaKlIUCF?si=ba17136b2cda4157" target="_blank">
                            <motion.img whileHover={{ scale: 1.1 }} src="assets/Portadas/brokenJapPortada.jpeg" alt="Portada de la canción" />
                            <motion.div 
                                className="titulo absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                                style={{ width: '100%', height: '100%' }}
                            >
                                Broken
                            </motion.div>
                        </a>
                    </motion.div>
                    <motion.div 
                        className="cancion relative"
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href="https://open.spotify.com/track/0uvbFSO0zi5YR9tXxYOtXq?si=6f184b5a343a4095" target="_blank">
                            <motion.img whileHover={{ scale: 1.1 }} src="assets/Portadas/seQueJussoPortada.jpeg" alt="Portada de la canción" />
                            <motion.div 
                                className="titulo absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                                style={{ width: '100%', height: '100%' }}
                            >
                                Se Que
                            </motion.div>
                        </a>
                    </motion.div>
                    <motion.div 
                        className="cancion relative"
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href="https://open.spotify.com/track/0WQ1Q1O1Zpqv4Hr8EMA2cW?si=b0b866b6ccd842ec" target="_blank">
                            <motion.img whileHover={{ scale: 1.1 }} src="assets/Portadas/intentoOlvidarteSergioPortada.jpeg" alt="Portada de la canción" />
                            <motion.div 
                                className="titulo absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                                style={{ width: '100%', height: '100%' }}
                            >
                                Intento Olvidarte
                            </motion.div>
                        </a>
                    </motion.div>
                    <motion.div 
                        className="cancion relative"
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href="https://open.spotify.com/track/2QY2jHI8yCLCRrWrU70Q6Q?si=7d7aaf869fe14d4d" target="_blank">
                            <motion.img whileHover={{ scale: 1.1 }} src="assets/Portadas/legacyJapPortada.jpeg" alt="Portada de la canción" />
                            <motion.div 
                                className="titulo absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                                style={{ width: '100%', height: '100%' }}
                            >
                                Legacy
                            </motion.div>
                        </a>
                    </motion.div>
                    <motion.div 
                        className="cancion relative"
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href="https://open.spotify.com/intl-es/track/2cDvX0gvoWY4D0YxzMiezR?si=f69ad1675ee7457c" target="_blank">
                            <motion.img whileHover={{ scale: 1.1 }} src="assets/Portadas/SabadoDePasionAlbaFernandez.jpeg" alt="Portada de la canción"/>
                            <motion.div 
                                className="titulo absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                                style={{ width: '100%', height: '100%' }}
                            >
                                Sabado de Pasion
                            </motion.div>
                        </a>
                    </motion.div>
                    <motion.div 
                        className="cancion relative"
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href="https://open.spotify.com/track/5i5JnGhfJTbcPAZZmdFwm8?si=4a9d57ba320b4f74" target="_blank">
                            <motion.img whileHover={{ scale: 1.1 }} src="assets/Portadas/noSeJapPortada.jpeg" alt="Portada de la canción"/>
                            <motion.div 
                                className="titulo absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white text-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                                style={{ width: '100%', height: '100%' }}
                            >
                                No Se
                            </motion.div>
                        </a>
                    </motion.div>
                </div>
                <a 
                    href="https://open.spotify.com/intl-es/artist/3e2ozZFni4aM4tX9xFWFs5" 
                    target="_blank"
                    className="mt-20 px-6 py-3 w-[50%] text-center rounded-full bg-color6 text-color2 text-xl font-bold uppercase transition duration-300 transform hover:scale-105"
                >
                    Abrir Spotify
                </a>
            </section>

            <section className='gridRRSS grid grid-cols-3 bg-color2 h-[100vh]'>
                <section className="grid col-span-2 place-content-center gap-1 text-color6 ml-5 ">
                    <h1 className='mb-10 text-color6 text-7xl font-bold uppercase underline sm:text-7xl md:text-7xl lg:text-8xl'>RRSS:</h1>
                    <FlipLink href="https://www.instagram.com/diegodpl" icon="/assets/rrssSVG/instagram.svg">Instagram</FlipLink>
                    <FlipLink href="https://www.youtube.com/channel/UCwLgECSOkIXlSfW2YvS7X8w" icon="/assets/rrssSVG/youtube.svg">Youtube</FlipLink>
                    <FlipLink href="https://www.tiktok.com/@diegodpl_" icon="/assets/rrssSVG/tik-tok.svg">Tiktok</FlipLink>
                </section>
                <section className="flex items-center justify-center mt-20">
                    <motion.img whileHover={{ scale: 1.1 }} className='ml-5 mr-5 w-[90%] h-auto ' src="/assets/DSC06390.jpg" alt="DJ"/>
                </section>
            </section>
        </div>
    );
}

export default Home;
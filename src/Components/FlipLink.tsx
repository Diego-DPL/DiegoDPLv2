import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, icon }: { children: string; href: string; icon: string }) => {
  return (
    <>
        <div className="grid grid-cols-6">
            <img src={icon} alt="" className="fill-current mr-2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            <motion.a 
            initial="initial"
            whileHover="hovered"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-5 relative block overflow-hidden whitespace-nowrap text-2xl font-bold uppercase sm:text-6xl md:text-7xl lg:text-8xl"
            >
                <div>
                    {children.split('').map((l, i) => (
                    <motion.span
                        key={i}
                        variants={{
                        initial: { y: 0 },
                        hovered: { y: "100%" }
                        }}
                        transition={{ 
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * i
                        }}
                        className="inline-block"
                    >
                        {l}
                    </motion.span>
                    ))}
                </div>
                <div className='absolute inset-0'>
                    {children.split('').map((l, i) => (
                    <motion.span
                        key={i}
                        variants={{
                        initial: { y: "-100%" },
                        hovered: { y: 0 }
                        }}
                        transition={{ 
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * i
                        }}
                        className="inline-block"
                    >
                        {l}
                    </motion.span>
                    ))}
                </div>
            </motion.a>
        </div>
    </>
  );
};

export default FlipLink;
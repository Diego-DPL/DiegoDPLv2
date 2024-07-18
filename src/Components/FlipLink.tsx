  import { motion } from "framer-motion";

  const DURATION = 0.25;
  const STAGGER = 0.025;

  const FlipLink = ({ children, href }: { children: string; href: string }) => {

    return <motion.a 
    initial="initial"
    whileHover="hovered"
    href={href}
    target="_blank"
    className="relative block overflow-hidden whithe-space-nowrap text-4xl font-bold uppercase sm:text-7xl md:text-8xl lg:text-9xl">
        <div>
            {children.split('').map((l, i) => {
                return (
                <motion.span
                    variants={{
                        initial: { y: 0, },
                        hovered: { y: "100%", }
                    }}
                    transition={{ 
                        duration: DURATION,
                        ease: "easeInOut",
                        delay: STAGGER * i,
                    }}
                    className="inline-block"
                    key={i}
                >
                        {l}
                </motion.span>
                );
            })}
            
        </div>
        <div className='absolute inset-0'>
            {children.split('').map((l, i) => {
                return (
                    <motion.span

                        variants={{
                            initial: { y: "-100%", },
                            hovered: { y: 0, }
                        }}
                        transition={{ 
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                );
            })}
        </div>
    </motion.a>
  };

  export default FlipLink;
"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion, variants } from "framer-motion";

export default function ParallaxHome() {
  const textTransition = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const roles = ["PHOTOGRAPHER", "CINEMATOGRAPHER", "EDITOR", "COLORIST"];

  return (
    <Parallax pages={4}>
      <ParallaxLayer offset={0} speed={1}>
        <motion.div
          initial={{
            y: -100,
          }}
          animate={{
            y: 0,
          }}
          transition={{ type: "spring", bounce: 0.2, duration: 1 }}
        >
          <p className="pl-0 md:pl-6 text-lg md:text-4xl tracking-tight font-thin">
            Welcome to the works of
          </p>
        </motion.div>
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ type: "spring", bounce: 0.2, duration: 1, delay: 1 }}
        >
          <p className="text-7xl md:text-[16rem] leading-none font-black tracking-wider">
            FELICIA
          </p>
        </motion.div>
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 1.5,
            delay: 1.75,
          }}
        >
          <p className="text-7xl md:text-[16rem] leading-none font-black tracking-wider">
            TIARA
          </p>
        </motion.div>
        <div className="flex flex-row gap-36 md:gap-80 pt-40 md:pt-0">
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              bounce: 0.5,
              duration: 3,
              delay: 2,
            }}
          >
            <motion.p
              whileHover={{
                scale: 1.1,
                rotation: 200,
                transition: {
                  duration: 0.5,
                },
              }}
              className="text-8xl md:text-[16rem] leading-none font-black tracking-wider"
            >
              F
            </motion.p>
          </motion.div>
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotate: 30,
            }}
            transition={{
              type: "spring",
              bounce: 0.5,
              duration: 3,
              delay: 2.25,
            }}
          >
            <motion.p
              whileHover={{
                scale: 0.9,
                rotation: 200,
                transition: {
                  duration: 0.5,
                },
              }}
              className="text-8xl md:text-[16rem] leading-none font-black tracking-wider"
            >
              T
            </motion.p>
          </motion.div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.02} sticky={{ start: 1.15, end: 3 }}>
        <p className="pl-0 md:pl-6 text-2xl md:text-6xl tracking-tight font-thin">
          Who is F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T?
        </p>
      </ParallaxLayer>
      <ParallaxLayer
        className="pt-24"
        offset={1.25}
        speed={0.3}
        sticky={{ start: 1.5, end: 2 }}
      >
        {roles.map((item, index) => (
          <motion.div
            initial={textTransition.offscreen}
            whileInView={textTransition.onscreen}
            viewport={{ once: true, amount: 0.8 }}
            key={index}
          >
            <p className="pl-0 md:pl-6 pb-6 md:pb-24 text-3xl md:text-[7rem] tracking-widest font-black">
              {item}
            </p>
          </motion.div>
        ))}
      </ParallaxLayer>
      <ParallaxLayer offset={3.25} speed={1}>
        <div className="-mb-40 md:mb-0">
          <p className="text-6xl md:text-[12rem] leading-none font-black tracking-wider">
            FELICIA <br /> TIARA <br />{" "}
          </p>
          <p className="pl-0 md:pl-6 text-2xl md:text-6xl tracking-tight font-thin">
            feliciatiara00@gmail.com
          </p>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

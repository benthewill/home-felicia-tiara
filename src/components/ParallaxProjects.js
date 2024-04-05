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

  return <Parallax></Parallax>;
}

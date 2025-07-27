"use client";

import { motion } from "framer-motion";

export function BackgroundBubbles() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden blur-3xl">
      {/* Burbuja 1 - Más grande y más opaca */}
      <motion.div
        animate={{ y: ["0%", "20%", "0%"], x: ["0%", "-10%", "0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[5%] w-[50rem] h-[50rem] bg-primary/30 rounded-full"
      />
      {/* Burbuja 2 - Más grande y más opaca */}
      <motion.div
        animate={{ y: ["0%", "-15%", "0%"], x: ["0%", "15%", "0%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[5%] w-[50rem] h-[50rem] bg-secondary/20 rounded-full"
      />
      {/* Burbuja 3 (Nueva) - Para añadir más color */}
       <motion.div
        animate={{ y: ["0%", "10%", "0%"], x: ["0%", "20%", "0%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[15%] w-[40rem] h-[40rem] bg-accent/20 rounded-full"
      />
    </div>
  );
}
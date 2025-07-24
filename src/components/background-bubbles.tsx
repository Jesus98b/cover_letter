"use client";

import { motion } from "framer-motion";

export function BackgroundBubbles() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden blur-3xl">
      <motion.div
        animate={{ y: ["0%", "20%", "0%"], x: ["0%", "-10%", "0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] left-[5%] w-96 h-96 bg-primary/10 rounded-full"
      />
      <motion.div
        animate={{ y: ["0%", "-15%", "0%"], x: ["0%", "15%", "0%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-80 h-80 bg-secondary/10 rounded-full"
      />
       <motion.div
        animate={{ y: ["0%", "10%", "0%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[15%] w-72 h-72 bg-primary/5 rounded-full"
      />
    </div>
  );
}
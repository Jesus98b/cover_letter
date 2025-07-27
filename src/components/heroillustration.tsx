"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroIllustration() {
  return (
    <motion.div
      // This creates a subtle, looping "float" animation
      animate={{
        y: [0, -15, 0], // Moves up 15px and back down
      }}
      transition={{
        duration: 5,      // The animation takes 5 seconds
        repeat: Infinity, // It will repeat forever
        ease: "easeInOut",// Makes the movement smooth
      }}
    >
      <Image
        // This now points to your renamed SVG file in the 'public' folder
        src="/developer-activity-amico.svg"
        alt="Ilustración de un desarrollador trabajando en su laptop"
        width={500}
        height={500}
        priority // Helps load the image faster
      />
    </motion.div>
  );
}
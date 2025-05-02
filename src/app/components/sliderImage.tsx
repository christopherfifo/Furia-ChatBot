"use client";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "motion/react";
import React from "react";

export function ImagesSliderDemo() {
  const images = [
    "/csHero.jpg",
    "/torcida.webp",
    "/campeonato.jpg",
  ];
  return (
    <ImagesSlider className="h-full" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
      </motion.div>
    </ImagesSlider>
  );
}

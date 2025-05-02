"use client";

import Image from "next/image";

import { ImagesSliderDemo } from "../sliderImage";
import { FloatingNavDemo } from "../navbar";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden px-8 ">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <ImagesSliderDemo />
      </div>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/30 z-1" />
      
        <FloatingNavDemo />

      {/* Conteúdo principal */}
      <div className="relative z-2 container mx-auto md:px-6 md:py-24 sm:p-0 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)]">

        <div className="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="block text-gray-300">BEM-VINDO À</span>
            <span className="block text-yellow-500">FURIA ACADEMY</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md">
            Torne-se um jogador profissional com a metodologia do time FURIA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-md transition-transform hover:scale-105">
              Inscreva-se
            </button>
            <button className="bg-transparent border-2 border-yellow-600 text-yellow-500 hover:bg-yellow-600 hover:text-white font-bold py-3 px-6 rounded-md transition-transform hover:scale-105">
              Conheça o Time
            </button>
          </div>
        </div>

        {/* Imagem do personagem */}
        <div className="w-full md:w-1/2 h-full">
          <div className="relative w-full h-[calc(100vh-80px)] max-h-[600px]">
            <div className="absolute inset-0 rounded-xl z-1" />
            <Image
              src="/time.jpg"
              alt="Time da FURIA Academy"
              fill
              className="rounded-xl object-cover shadow-[15px_15px_30px_-15px_rgba(215,30,40,0.5)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

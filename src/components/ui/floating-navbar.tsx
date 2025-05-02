"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex fixed top-4 mx-auto border border-transparent dark:border-white/[0.2] rounded-full",
          "dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          "z-[5000] px-4 py-3 items-center",
          "w-[90%] max-w-6xl",
          className
        )}
      >
        {/* Logo - alinhada à esquerda */}
        <div className="flex-shrink-0 ">
          <a href="#" className="flex items-center space-x-3">
            <img src="/furia.png" alt="logo" width={32} height={32} />
            <span className="font-medium text-lg text-black dark:text-white hidden sm:block">
              FURIA Academy
            </span>
          </a>
        </div>

        {/* Área central - itens distribuídos uniformemente */}
        <div className="flex flex-1 justify-evenly mx-2 ml-5">
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex flex-col items-center px-2 py-1 group",
                "text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white",
                "transition-all duration-200 flex-grow",
                "max-w-[100px] sm:max-w-none" // Limite de largura para mobile
              )}
            >
              <span className="text-xl">{navItem.icon}</span>
              <span className="text-xs font-medium mt-1 sm:hidden">
                {navItem.name.split(' ')[0]}
              </span>
              <span className="hidden sm:block text-sm font-medium whitespace-nowrap mt-1">
                {navItem.name}
              </span>
            </a>
          ))}
        </div>
 
      </motion.div>
    </AnimatePresence>
  );
};
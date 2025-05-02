"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconUsers, IconInfoCircle, IconMessages } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Time",
      link: "/team",
      icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Sobre",
      link: "/about",
      icon: <IconInfoCircle className="h-4 w-4 text-neutral-500" />,
    },
    {
      name: "Chat",
      link: "/chat",
      icon: <IconMessages className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <div className="relative w-full flex justify-center">
      <FloatingNav navItems={navItems} className="w-[90%]" />
    </div>
  );
};
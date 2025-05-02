"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const NavbarDemo = () => {
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mb-5"> 
      <Navbar className="w-full bg-slate-50 rounded-lg flex items-center justify-between overflow-hidden">
        <NavBody className="px-4"> 
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>
      </Navbar>
    </div>
  );
};

export default NavbarDemo;
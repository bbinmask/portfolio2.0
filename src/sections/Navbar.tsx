import { useState } from "react";
import { motion } from "motion/react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/resizable-navbar";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
//       <div className="mx-auto c-space max-w-7xl">
//         <div className="flex items-center justify-between py-2 sm:py-0">
//           <a
//             href="/"
//             className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
//           >
//             Ali
//           </a>
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
//           >
//             <img
//               src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
//               className="w-6 h-6"
//               alt="toggle"
//             />
//           </button>
//           <nav className="hidden sm:flex">
//             <Navigation />
//           </nav>
//         </div>
//       </div>
//       {isOpen && (
//         <motion.div
//           className="block overflow-hidden text-center sm:hidden"
//           initial={{ opacity: 0, x: -10 }}
//           animate={{ opacity: 1, x: 0 }}
//           style={{ maxHeight: "100vh" }}
//           transition={{ duration: 1 }}
//         >
//           <nav className="pb-5">
//             <Navigation />
//           </nav>
//         </motion.div>
//       )}
//     </div>
//   );
// };

export function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4"></div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <button>Click</button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}

export default NavbarDemo;

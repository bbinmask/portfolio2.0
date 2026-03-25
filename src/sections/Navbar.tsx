import { useEffect, useState } from "react";
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

export function NavbarDemo() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Journey",
      link: "#journey",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="z-[9999]">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4"></div>
        </NavBody>

        {/* Mobile Navigation */}
        <nav
          className={`fixed top-0 right-0 left-0  flex w-full flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden z-[1000] transition-all duration-500 ${
            isScrolled ? "px-2 py-2" : "py-0"
          }`}
        >
          <div
            className={`mx-auto rounded-lg border shadow-2xl w-full transition-all duration-500 ${
              isScrolled
                ? "border-slate-200 backdrop-blur-2xl dark:border-white/10 bg-white/80 dark:bg-slate-900/80"
                : "border-transparent bg-transparent shadow-none"
            }`}
          >
            <div
              className={`flex items-center justify-between transition-all duration-500 p-2`}
            >
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
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
              </MobileNavMenu>
            </div>
          </div>
        </nav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}

export default NavbarDemo;

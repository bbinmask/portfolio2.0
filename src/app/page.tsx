"use client";

import About from "@/sections/About";
import Experiences from "@/sections/Experiences";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Journey from "@/components/Journey";
import { Separator } from "@/components/ui/separator";
import { ArrowBigUp, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Projects />
      <Separator />
      <Journey />
      <Separator />
      <Experiences />
      <Separator />
      <Contact />
      <Separator />
      <Footer />

      {showScroll && (
        <Button className="fixed bottom-20 right-10 w-12 h-12">
          <Link href={"#home"}>
            <ArrowUp />
          </Link>
        </Button>
      )}
    </div>
  );
}

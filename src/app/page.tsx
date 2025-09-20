"use client";

import About from "@/sections/About";
import Experiences from "@/sections/Experiences";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Journey from "@/components/Journey";

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}

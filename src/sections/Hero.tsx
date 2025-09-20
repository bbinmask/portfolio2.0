import { Spotlight } from "../components/ui/spotlight";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import HeroText from "@/components/HeroText";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="pt-36 px-4" id="home">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="w-full grid justify-center">
        <div className="relative z-10 flex flex-col sm:flex-row items-start justify-center max-w-5xl mx-auto sm:space-x-12">
          <div className="mb-8 sm:mb-0 sm:w-1/3 flex justify-center">
            <Card />
          </div>

          <div className="text-center sm:text-left sm:w-2/3">
            <HeroText />

            <div className="flex flex-col sm:flex-row sm:justify-start justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="inline-block  bg-indigo-600 hover:bg-indigo-700 text-white font-black tracking-wide py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-block  bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 "
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

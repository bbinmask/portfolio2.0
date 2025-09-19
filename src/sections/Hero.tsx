import ProfileCard from "@/components/ui/profile-card";
import MagicButton from "../components/ui/magic-button";
import { Spotlight } from "../components/ui/spotlight";
import { LocationEdit } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="pb-10 pt-36 px-4">
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
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center max-w-5xl mx-auto sm:space-x-12">
          <div className="mb-8 sm:mb-0 sm:w-1/3 flex justify-center">
            {/* <img
              src="/profile.png"
              alt="Banner"
              className="shadow-lg w-32 h-32 sm:w-48 sm:h-48 object-cover"
            /> */}
            <ProfileCard
              name="Irfanul Madar"
              title="Software Engineer"
              handle="bbinmask"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/profile.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => router.push("#contact")}
            />
          </div>

          <div className="text-center sm:text-left sm:w-2/3">
            <span className="text-xl lg:text-2xl">I'm</span>
            <h1 className=" animate-fade-in-up text-indigo-600 font-[cal_sans] sm:text-3xl md:text-4xl text-2xl font-semibold">
              Irfanul Madar
            </h1>
            <span className="text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
              MERN Stack Developer
            </span>

            <p className="text-lg sm:text-xl md:text-2xl font-[urbanist] mb-8">
              A passionate Web Developer crafting engaging digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-start justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#portfolio"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 animate-fade-in-up delay-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-block bg-gray-700 hover:bg-gray-600 text-gray-200 font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 animate-fade-in-up delay-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <a href="#about" className="mx-auto pt-4">
          <MagicButton
            icon={<LocationEdit />}
            title="Show my work"
            position="right"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 text-center  md:text-left rounded-3xl bg-clip-text pb-8 sm:pb-20">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex">
        <motion.h1
          className="text-3xl text-left lg:text-4xl font-[urbanist] font-bold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          I'm
        </motion.h1>
        <motion.h1
          className="text-lavender font-[cal_sans] sm:text-4xl md:text-5xl lg:text-6xl text-3xl font-semibold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Irfanul Madar
        </motion.h1>
        <div className="flex flex-col items-start pt-4">
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl font-semibold font-[urbanist]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A passionate Web Developer crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="flex mt-2 gap-2 items-center"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-semibold font-[cal_sans] text-white text-5xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl text-nowrap font-[cal_sans] font-black text-lavender"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex-col flex pl-12 justify-start items-start space-y-2 md:hidden">
        <motion.h1
          className="text-3xl text-left lg:text-4xl font-[urbanist] font-bold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          I'm
        </motion.h1>
        <motion.h1
          className="text-lavender font-[cal_sans] font-semibold text-5xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Irfanul Madar
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl font-semibold font-[urbanist]"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          A passionate Web Developer crafting
        </motion.p>
        <div>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="text-left"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-semibold font-[cal_sans] text-white text-5xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl text-nowrap font-[cal_sans] font-black text-lavender"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;

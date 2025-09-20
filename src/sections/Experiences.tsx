import { workExperience } from "@/constants";
import { Button } from "@/components/ui/moving-border";
import React from "react";

const Experience = () => {
  return (
    <div className="c-space section-spacing" id="experience">
      <h1 className="text-heading">My work experience</h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map(({ id, title, desc, className, thumbnail }) => (
          <Button
            key={id}
            borderRadius="3.75rem"
            duration={Math.floor(Math.random() * 10000 * id) + 10000}
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={thumbnail}
                alt={thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start font-[cal_sans] text-xl md:text-2xl">
                  {title}
                </h1>
                <p className="text-start font-[urbanist] text-white-100 mt-3 font-semibold">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;

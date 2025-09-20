import { ProjectProps } from "@/types";
import { Ban, ExternalLink, X } from "lucide-react";
import { motion } from "motion/react";

interface ProjectDetailsProps extends ProjectProps {
  closeModal?: () => void;
}

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}: ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 py-4  z-[99999] flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <X />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full aspect-video rounded-t-2xl"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-2 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, i) => (
            <p key={i} className="mb-2 font-normal text-sm text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-1">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-full size-6 hover-animation"
                />
              ))}
            </div>
            {href ? (
              <a
                href={href}
                className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
              >
                View Project <ExternalLink className="size-4" />
              </a>
            ) : (
              <button className="inline-flex items-center gap-1 font-medium cursor-not-allowed hover-animation">
                Not Available
                <Ban className="size-4" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;

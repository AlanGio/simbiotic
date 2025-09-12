"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { SectionProps } from "../types";

export default function Section({
  id,
  title,
  titleBelow,
  subtitle,
  content,
  image,
  isActive,
  showButton,
  buttonText,
  buttonLink,
}: SectionProps) {
  // Special layout for way section with centered image
  if ((id === "way" || id === "profiles" || id === "tools") && image) {
    return (
      <section
        id={id}
        className="relative h-screen w-full snap-start flex items-center justify-center p-8 px-10 md:p-16 lg:p-24"
      >
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {image}
        </motion.div>
      </section>
    );
  }

  // Special layout for features section with image and content side by side
  if (id === "features" && image) {
    return (
      <section
        id={id}
        className="relative h-screen w-full snap-start flex items-center p-8 px-10 md:p-16 lg:p-24"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {image}
          </motion.div>

          {/* Content on the right */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-[#D0C13B]">
                {title}
              </h2>
            )}
            {content && (
              <div
                className="text-lg md:text-xl text-neutral-100 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  // Default layout for other sections
  return (
    <section
      id={id}
      className="text-3xl relative h-screen w-full snap-start flex flex-col justify-center p-8 px-10 md:p-16 lg:p-24 gap-4"
    >
      {subtitle && (
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.h3>
      )}
      {title && (
        <motion.h2
          className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}
      {content && (
        <motion.div
          className="text-lg md:text-lg lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.div>
      )}
      {titleBelow && (
        <motion.h2
          className="text-4xl md:text-4xl lg:text-[3rem] xl:text-[4rem] font-bold leading-[1.1] tracking-tight max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {titleBelow}
        </motion.h2>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-[#FF4D00]/15 backdrop-blur-lg rounded-xl shadow-lg ring-1 ring-black/5 px-4 py-2 text-[#D0C13B]"
            onClick={() => window.open(buttonLink)}
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  );
}

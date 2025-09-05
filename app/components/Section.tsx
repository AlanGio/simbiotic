"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "../types"

export default function Section({ id, title, titleBelow, subtitle, content, isActive, showButton, buttonText, buttonLink }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 px-10 md:p-16 lg:p-24 gap-4">
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
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
            className="bg-[#FF4D00]/15 backdrop-blur-lg rounded-xl shadow-lg ring-1 ring-black/5 px-4 py-2 text-[#FF4D00]"
            onClick={() => window.open(buttonLink)}
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className={cn(
        "relative z-10 group cursor-pointer transform-gpu",
        containerClassName
      )}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl transition duration-500 bg-[#13162D] hover:shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />

        <div className={cn("p-6", className)}>{children}</div>
      </div>

      {title && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-white bg-black/60 px-4 py-1 rounded-full backdrop-blur-md"
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

"use client";

import { cn } from "@/utils/utils";
import { motion } from "motion/react";
import { useState } from "react";

export default function Button({
  children,
  className,
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "icon" | "outline";
}) {
  const [isHovered, setIsHovered] = useState(false);
  const variants = {
    primary: "bg-blue-950 text-white",
    icon: "text-white",
    outline: "bg-transparent border border-white text-white",
  };

  //   const childrenString = String(children);
  //   const text = childrenString.split("").map((char, index) => (
  //     <motion.span
  //       key={index}
  //       className="inline-block"
  //       initial={{ y: 0, opacity: 1 }}
  //       animate={{ y: isHovered ? -15 : 0 }}
  //       transition={{
  //         type: "tween",
  //         duration: 0.5,
  //         ease: [0.87, 0, 0.13, 1],
  //         delay: index * 0.03,
  //       }}>
  //       {char}
  //     </motion.span>
  //   ));

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "cursor-pointer py-s rounded-full px-m font-semibold overflow-hidden",
        variants[variant],
        className,
      )}>
      <div className="relative flex justify-between items-center gap-s">
        <div className="relative">
          <motion.div
            style={{ originX: 1 }}
            animate={{
              y: isHovered ? -30 : 0,
              rotateZ: isHovered ? 30 : 0,
              opacity: isHovered ? 0 : 1,
            }}
            transition={{
              type: "spring",
              bounce: 0.35,
              stiffness: 700,
              damping: 30,
              duration: 0.1,
              ease: "easeInOut",
            }}>
            {children}
          </motion.div>
          <motion.div
            style={{ originX: 1 }}
            className={cn(
              "absolute inset-0 z-5",
              variant === "primary" ? "text-blue-950" : "text-white",
            )}
            animate={{
              y: isHovered ? 0 : 30,
              rotateZ: isHovered ? 0 : -30,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              type: "spring",
              bounce: 0.35,
              stiffness: 700,
              damping: 30,
              duration: 0.1,
              ease: "easeInOut",
            }}>
            {children}
          </motion.div>
        </div>
        {variant === "primary" && (
          <div className="relative">
            <motion.div
              animate={{ scale: isHovered ? 50 : 1.2 }}
              transition={{
                type: "spring",
                bounce: 0.25,
                stiffness: 500,
                damping: 36,
                duration: 0.1,
                ease: "easeInOut",
              }}
              className="w-xs h-xs bg-white rounded-full"
            />
            <motion.div
              animate={{ scale: isHovered ? 1.3 : 0 }}
              transition={{
                type: "spring",
                bounce: 0.25,
                stiffness: 500,
                damping: 36,
                duration: 0.1,
                ease: "easeInOut",
              }}
              className="w-xs h-xs bg-blue-950 rounded-full absolute inset-0"
            />
          </div>
        )}
        {variant === "icon" && (
          <motion.div
            animate={{
              backgroundColor: isHovered ? "#162456" : "transparent",
              x: isHovered ? 0 : -8,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{
              type: "spring",
              bounce: 0.35,
              stiffness: 700,
              damping: 30,
              duration: 0.1,
              ease: "easeInOut",
            }}
            className="relative h-2s w-2s flex items-center justify-center rounded-full">
            <svg
              className="w-full h-full"
              width="100%"
              height="auto"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                fill="#fff"
              />
            </svg>
          </motion.div>
        )}
      </div>
    </motion.button>
  );
}

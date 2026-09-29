"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/utils/utils";
import { motion } from "motion/react";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn(
        "w-full h-(--spacings--main) fixed top-m z-50 text-white px-ml flex justify-between items-center",
      )}>
      <div
        className={cn(
          "flex items-center gap-l px-2s h-full w-fit rounded-m transition-all duration-300 ease-in-out",
          scrolled ? "backdrop-blur-sm bg-black/50" : "bg-transparent",
        )}>
        <Link href="/" className="relative h-full w-[14vw]">
          <Image src="/logo.svg" alt="logo" fill objectFit="contain" />
        </Link>
        <ul className="flex items-center gap-m">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center cursor-pointer">
        <div className="cursor-pointer py-s rounded-full px-m w-[9.5vw] h-2m font-semibold overflow-hidden bg-blue-950 relative">
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
              Book a call
            </motion.div>
            <motion.div
              style={{ originX: 1 }}
              className="absolute inset-0 z-5 text-blue-950"
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
              Book a call
            </motion.div>
          </div>
          <motion.div
            animate={{ scale: isHovered ? 50 : 0 }}
            transition={{
              type: "spring",
              bounce: 0.25,
              stiffness: 500,
              damping: 36,
              duration: 0.1,
              ease: "easeInOut",
            }}
            className="w-xs h-xs bg-green-400 rounded-full absolute -bottom-xs left-1/2 translate-x-[-50%]"
          />
          <div className="absolute right-s w-m h-m bg-white top-[50%] translate-y-[-50%] rounded-full z-6">
            <div className="relative w-full h-full">
              {/* Vertical bar (fades in and rotates to 90 deg) */}
              <motion.div
                animate={{
                  rotate: isHovered ? 90 : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  bounce: 0.35,
                  stiffness: 700,
                  damping: 30,
                  duration: 0.1,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 m-auto w-s h-[0.1vw] rounded-full bg-blue-950"
              />

              {/* Horizontal bar (spins 360 deg) */}
              <motion.div
                animate={{ rotate: isHovered ? 180 : 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.35,
                  stiffness: 700,
                  damping: 30,
                  duration: 0.1,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 m-auto w-s h-[0.1vw] rounded-full bg-blue-950"
              />
            </div>
          </div>
        </div>
        <div className="rounded-full h-main w-main outline-[0.16vw] outline-white overflow-hidden -ml-m relative">
          <motion.div
            style={{ originX: 0 }}
            animate={{
              y: isHovered ? 30 : 0,
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
            }}
            className="relative rounded-full h-main w-main overflow-hidden">
            <Image
              src={"/avatars/ahmed.png"}
              fill
              alt="ahmed"
              className="object-cover object-top"
            />
          </motion.div>
          <motion.div
            style={{ originX: 0 }}
            animate={{
              y: isHovered ? 0 : -30,
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
            }}
            className="absolute inset-0 z-5 rounded-full h-main w-main overflow-hidden flex items-center justify-center leading-none font-semibold bg-blue-950">
            You
          </motion.div>
        </div>
      </div>
    </header>
  );
}

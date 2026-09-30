"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type Variants,
} from "motion/react";
import { cn } from "@/utils/utils";
import WordAnimation from "./WordAnimation";
import { useRef, useState } from "react";

const avatars = [
  {
    src: "/avatars/ahmed.png",
    alt: "ahmed",
  },
  {
    src: "/avatars/lahik.webp",
    alt: "lahik",
  },
  {
    src: "/avatars/maya.png",
    alt: "maya",
  },
  {
    src: "/avatars/rabab.webp",
    alt: "rabab",
  },
  {
    src: "/avatars/sara.png",
    alt: "sara",
  },
  {
    src: "/avatars/google.svg",
    alt: "google",
  },
];

const companies = [
  {
    src: "/clients/augustYasin.webp",
    alt: "augustYasin",
  },
  {
    src: "/clients/flyingexpress.webp",
    alt: "flyingexpress",
  },
  {
    src: "/clients/fortine.webp",
    alt: "fortine",
  },
  {
    src: "/clients/honeywell.webp",
    alt: "honeywell",
  },
  {
    src: "/clients/huawei.webp",
    alt: "huawei",
  },
  {
    src: "/clients/justprobiz.webp",
    alt: "justprobiz",
  },
  {
    src: "/clients/lenovo.webp",
    alt: "lenovo",
  },
  {
    src: "/clients/safeHeights.webp",
    alt: "safeHeights",
  },
  {
    src: "/clients/zkteco.webp",
    alt: "zkteco",
  },
];

const steps = [
  {
    title: "Keep the Documents Ready",
    description:
      "Documentation is an integral part of business registration in the UAE. The process can be complicated if you are trying to start a business in Dubai from abroad. Our experts make the process hassle-free by handling all the complicated paperwork.",
  },
  {
    title: "Get Your Trade License",
    description:
      "The next step is to get your trade license, where the probability of making costly mistakes increases. Our Dubai business consultants handle the licensing process on your behalf. We handle all the paperwork, so you can focus on your business goals.",
  },
  {
    title: "Process the Visa",
    description:
      "Employers must apply for work permits within 30 days of their staff arriving in the UAE. As your trusted business setup partner in Dubai, we efficiently handle the visa process, ensuring compliance, while you focus on growing your business.",
  },
  {
    title: "Open a Corporate Bank Account",
    description:
      "A corporate bank account is a prerequisite for smooth financial transactions. Opening a bank account can be a daunting task. Our experts will help you keep a file of all the necessary documents ready before visiting the bank to open your corporate account.",
  },
];

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["-1.3 1", "0 0.7"],
  });

  const { scrollYProgress: targetScrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.7", "end start"],
  });

  const heroInitialScale = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0.975, 1.1],
  );

  const heroExitScale = useTransform(
    targetScrollYProgress,
    [0.05, 0.17],
    [1.1, 1],
  );

  const scale = useTransform(
    [heroInitialScale, heroExitScale, targetScrollYProgress],
    ([init, exit, targetProgress]) => {
      return (targetProgress as number) > 0 ? exit : init;
    },
  );
  const imageBlur = useTransform(
    scrollYProgress,
    [0.19, 0.29],
    ["blur(0px)", "blur(10px)"],
  );

  // 1. Shared Entrance (Y & Opacity)
  const y = useTransform(targetScrollYProgress, [0, 0.08], ["-30vh", "0vh"]);
  const opacity = useTransform(
    targetScrollYProgress,
    [0, 0.1, 0.2, 0.5],
    [0, 1, 1, 0],
  );

  // 2. First Line: Moves Left + 3D Rotate
  const line1X = useTransform(
    targetScrollYProgress,
    [0, 0.13, 0.3],
    ["0%", "0%", "-100vw"],
  );
  const line1RotateY = useTransform(
    targetScrollYProgress,
    [0, 0.14, 0.3],
    [0, 0, -60],
  );
  const line1Z = useTransform(
    targetScrollYProgress,
    [0, 0.14, 0.3],
    [0, 0, 500],
  );

  // 3. Second Line: Moves Right + 3D Rotate (opposite direction)
  const line2X = useTransform(
    targetScrollYProgress,
    [0, 0.13, 0.3],
    ["0%", "0%", "100vw"],
  );
  const line2RotateY = useTransform(
    targetScrollYProgress,
    [0, 0.14, 0.3],
    [0, 0, 60],
  );
  const line2Z = useTransform(
    targetScrollYProgress,
    [0, 0.14, 0.3],
    [0, 0, 500],
  );

  // Split into lines first by \n
  const lines =
    " Business Setup & \n Company Formation \n Services in Dubai, UAE".split(
      "\n",
    );

  const desc =
    "We provide end-to-end assistance for company formation in the UAE, \nincluding license guidance, visa support, office space options, bank \naccount opening assistance, and post-setup business support.";

  let globalIndex = 0;

  // Steps section

  const stepsSectionScale = useTransform(
    targetScrollYProgress,
    [0.15, 0.35],
    [0.7, 1],
  );
  const stepsSectionOpacity = useTransform(
    targetScrollYProgress,
    [0.15, 0.35],
    [0, 1],
  );

  useMotionValueEvent(targetScrollYProgress, "change", (latest) => {
    if (latest < 0.38) {
      setActiveStep(0);
    } else if (latest < 0.52) {
      setActiveStep(1);
    } else if (latest < 0.66) {
      setActiveStep(2);
    } else {
      setActiveStep(3);
    }
  });

  const trackOffsets = ["-15vw", "-31vw", "-63vw", "-95vw"];

  const cardVariants: Variants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index === 0 ? "0%" : "-105%", // tucked directly behind the previous card
      scale: 0.88,
      z: -120,
      rotateY: -12,
      y: 0,
    }),
    visible: {
      opacity: 1,
      x: "0%", // slides out from left to right into place
      scale: 1,
      z: 0,
      rotateY: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        bounce: 0.35,
      },
    },
  };

  return (
    <section className="h-full w-full flex flex-col items-center justify-center">
      <div className="relative flex-1 w-full">
        <motion.div
          initial={{
            clipPath: "inset(32% 38% 32% 38% round var(--radius-m))",
          }}
          animate={{
            clipPath: "inset(0% 0% 0% 0% round var(--radius-m))",
          }}
          transition={{
            duration: 0.8,
            ease: [0.87, 0, 0.13, 1],
            delay: 0.5,
          }}
          style={{ scale }}
          className="h-screen w-full mx-auto sticky top-0 rounded-m overflow-hidden flex items-center justify-center">
          <motion.div
            style={{ filter: imageBlur }}
            className="absolute inset-0">
            <Image
              src="/hero.webp"
              alt="hero"
              fill
              objectFit="cover"
              priority
            />
          </motion.div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between bg-blue-950/50" />
        </motion.div>
        <div className="absolute top-0 pt-l left-0 w-full h-screen flex flex-col">
          <div className="flex flex-col gap-m p-main items-start">
            <h1 className="sr-only">
              Business Setup & Company Formation Services in Dubai, UAE
            </h1>
            <h1 className="text-[4vw] leading-none tracking-tight font-medium text-white">
              {lines.map((line, lineIndex) => {
                const wordsInLine = line.trim().split(/\s+/).filter(Boolean);

                return (
                  <motion.div
                    key={lineIndex}
                    className="flex flex-wrap justify-start">
                    {wordsInLine.map((word) => {
                      const index = globalIndex++;
                      return (
                        <Word
                          key={index}
                          word={word}
                          delay={0.9 + index * 0.03}
                        />
                      );
                    })}
                  </motion.div>
                );
              })}
            </h1>
            <p className="sr-only">
              We provide end-to-end assistance for company formation in the UAE,{" "}
              including license guidance, visa support, office space options,{" "}
              bank account opening assistance, and post-setup business support.
            </p>
            <div className="text-white font-medium">
              {desc.split("\n").map((line, lineIndex) => {
                const wordsInLine = line.trim().split(/\s+/).filter(Boolean);

                return (
                  <motion.p
                    key={lineIndex}
                    className="flex flex-wrap justify-start">
                    {wordsInLine.map((word) => {
                      const index = globalIndex++;
                      return (
                        <Word
                          key={index}
                          word={word}
                          delay={1.15 + index * 0.005}
                        />
                      );
                    })}
                  </motion.p>
                );
              })}
            </div>
            <div className="flex gap-s items-start">
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.9 }}>
                <Button>Get Started</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.95 }}>
                <Button variant="icon">Pricing</Button>
              </motion.div>
            </div>
          </div>
          <div className="absolute left-0 px-main bottom-main w-full">
            <motion.div
              style={{ transformOrigin: "center left" }}
              initial={{ opacity: 0, y: 5, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.15 }}
              className="flex items-center gap-2s">
              <div className="flex items-center">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative rounded-full overflow-hidden w-ml h-ml bg-white",
                      {
                        "-ml-2s": index > 0,
                      },
                    )}>
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      objectFit="cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <svg
                      key={item}
                      className="w-s h-s"
                      width="100%"
                      height="auto"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ))}
                  <span className="ml-s text-white">4.5</span>
                </div>
                <p className="text-white text-[0.9em]">
                  Trusted by 1000+ clients
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-ml w-1/2 overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <motion.div
                className="flex shrink-0"
                animate={{ x: "-50%" }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}>
                {/* Track 1 (Original items + trailing gap padding) */}
                <div className="flex shrink-0 gap-m pr-m items-center">
                  {companies.map((company, index) => (
                    <div
                      key={`company-1-${index}`}
                      className="relative w-[4.7vw] h-main shrink-0 flex items-center justify-center bg-white">
                      <Image
                        src={company.src}
                        alt={company.alt}
                        fill
                        objectFit="contain"
                      />
                    </div>
                  ))}
                </div>

                {/* Track 2 (Exact duplicate + trailing gap padding) */}
                <div className="flex shrink-0 gap-m pr-m items-center">
                  {companies.map((company, index) => (
                    <div
                      key={`company-2-${index}`}
                      className="relative w-[4.7vw] h-main shrink-0 flex items-center justify-center bg-white">
                      <Image
                        src={company.src}
                        alt={company.alt}
                        fill
                        objectFit="contain"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="h-[50vh] w-full" />
        <div className="h-screen w-full flex justify-center items-center sticky top-0">
          <h2 className="text-center text-[4.5vw] leading-none font-semibold tracking-tighter text-white">
            <WordAnimation progress={scrollYProgress}>
              {`The strategies that built\n
              your company won't scale it`}
            </WordAnimation>
          </h2>
        </div>
        <div ref={scrollRef} className="h-[50vh] w-full"></div>
        <section
          ref={targetRef}
          className="h-[350vh] w-full bg-white relative z-5">
          <div className="sticky top-0 h-screen items-center overflow-hidden">
            <div
              className="h-screen w-full flex flex-col justify-center items-center"
              style={{ perspective: 1000 }} // Enables 3D depth
            >
              <motion.h2
                style={{
                  y,
                  opacity,
                  x: line1X,
                  rotateY: line1RotateY,
                  z: line1Z,
                }}
                className="text-center text-[4.5vw] leading-none font-semibold origin-right">
                How to start
              </motion.h2>

              <motion.h2
                style={{
                  y,
                  opacity,
                  x: line2X,
                  rotateY: line2RotateY,
                  z: line2Z,
                }}
                className="text-center text-[4.5vw] leading-none font-semibold origin-left">
                a business in Dubai?
              </motion.h2>
            </div>
            <motion.div
              style={{
                opacity: stepsSectionOpacity,
                scale: stepsSectionScale,
                perspective: 1200,
              }}
              className="w-full h-screen flex items-center absolute top-0 left-0 overflow-hidden">
              <motion.div
                animate={{ x: trackOffsets[activeStep] }}
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute left-1/2 flex items-center gap-[2vw] shrink-0">
                {steps.map((step, index) => {
                  const isRevealed = activeStep >= index;

                  return (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate={isRevealed ? "visible" : "hidden"}
                      style={{ zIndex: steps.length - index }}
                      className={`w-[30vw] h-[40vh]  rounded-m shrink-0 shadow-2xl flex flex-col justify-between ${index % 2 == 0 ? "bg-blue-950" : "bg-green-500"}`}>
                      <div className="p-2m gap-m flex flex-col">
                        <span
                          className={`text-[0.9vw] tracking-[0.02em] ${index % 2 == 0 ? "text-blue-950 bg-white" : "text-white bg-blue-950"} px-2s py-xs w-fit rounded-full`}>
                          Step {index + 1}
                        </span>
                        <h2
                          className={`text-white text-[2.5vw] leading-none mt-s ${index % 2 == 0 ? "text-white" : "text-blue-950"}`}>
                          {step.title}
                        </h2>
                        <p className="text-white font-light leading-relaxed text-[1.1vw]">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}

function Word({ word, delay }: { word: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, filter: "blur(6px)", scale: 0.9 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={{
        duration: 0.45,
        delay,
        ease: "easeOut",
      }}
      className="inline-block mr-[0.15em]">
      {word}
    </motion.span>
  );
}

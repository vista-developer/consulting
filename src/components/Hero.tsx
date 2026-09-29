"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/utils/utils";
import WordAnimation from "./WordAnimation";
import { useRef } from "react";

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

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["-0.5 1", "0 0.5"],
  });

  const { scrollYProgress: targetScrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.7", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [0.975, 1.1]);

  // 1. Shared Entrance (Y & Opacity)
  const y = useTransform(targetScrollYProgress, [0, 0.15], ["-20vh", "0vh"]);
  const opacity = useTransform(
    targetScrollYProgress,
    [0, 0.2, 0.3, 0.6],
    [0, 1, 1, 0],
  );

  // 2. First Line: Moves Left + 3D Rotate
  const line1X = useTransform(
    targetScrollYProgress,
    [0, 0.25, 0.6],
    ["0%", "0%", "-100vw"],
  );
  const line1RotateY = useTransform(
    targetScrollYProgress,
    [0, 0.26, 0.6],
    [0, 0, -60],
  );
  const line1Z = useTransform(
    targetScrollYProgress,
    [0, 0.26, 0.6],
    [0, 0, 500],
  );

  // 3. Second Line: Moves Right + 3D Rotate (opposite direction)
  const line2X = useTransform(
    targetScrollYProgress,
    [0, 0.25, 0.6],
    ["0%", "0%", "100vw"],
  );
  const line2RotateY = useTransform(
    targetScrollYProgress,
    [0, 0.26, 0.6],
    [0, 0, 60],
  );
  const line2Z = useTransform(
    targetScrollYProgress,
    [0, 0.26, 0.6],
    [0, 0, 500],
  );

  return (
    <section className="h-full w-full flex flex-col items-center justify-center">
      <div className="relative flex-1 w-full">
        <motion.div
          style={{ scale }}
          className="h-screen w-full mx-auto sticky top-0 rounded-m overflow-hidden flex items-center justify-center">
          <Image
            src="/hero.webp"
            alt="hero"
            fill
            objectFit="cover"
            className="absolute top-0 left-0"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between bg-blue-950/50" />
        </motion.div>
        <div className="absolute top-0 pt-l left-0 w-full h-screen flex flex-col">
          <div className="flex flex-col gap-m p-main items-start">
            <h1 className="text-[4vw] leading-none tracking-tight font-medium text-white">
              Business Setup & <br /> Company Formation <br /> Services in
              Dubai, UAE
            </h1>
            <p className="text-white font-medium">
              We provide end-to-end assistance for company formation in the UAE,{" "}
              <br />
              including license guidance, visa support, office space options,{" "}
              bank <br /> account opening assistance, and post-setup business
              support.
            </p>
            <div className="flex gap-s items-start">
              <Button>Get Started</Button>
              <Button variant="icon">Pricing</Button>
            </div>
          </div>
          <div className="absolute left-0 px-main bottom-main w-full">
            <div className="flex items-center gap-2s">
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
            </div>
            <div className="mt-ml w-1/2 overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
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
            </div>
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
        <div ref={scrollRef} className="h-screen w-full"></div>
        <section
          ref={targetRef}
          className="h-[400vh] w-full bg-white relative z-5">
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
          </div>
        </section>
      </div>
    </section>
  );
}

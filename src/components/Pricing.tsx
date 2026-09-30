"use client";

import { cn } from "@/utils/utils";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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

const plans = [
  {
    name: "Free Zone - UAE",
    price: "AED 10,800",
    features: [
      "Business License and MOA",
      "1 Visa",
      "Emirates ID & Biometrics",
      "Up to 10 Business Activities",
      "Flexi Desk & E-channel",
    ],
  },
  {
    name: "Dubai Freezone",
    price: "AED 12,520",
    features: [
      "3 Business Activities",
      "Lease Agreement",
      "Free Flexi Desk Access",
      "Business License and MOA",
    ],
  },
  {
    name: "Dubai Mainland",
    price: "AED 14,000",
    features: [
      "Multiple activities in the same group",
      "Trade license",
      "No Visa Limitations",
      "Memorandum of Association",
    ],
  },
];

export default function Pricing() {
  const [activePlan, setActivePlan] = useState(plans[0].name);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full h-full p-ml">
      <div className="p-main bg-black text-white rounded-m">
        <div className="flex justify-between items-end">
          <h2 className="text-[4.867vw] leading-[1.1] max-w-2/3 font-medium tracking-tight">
            Pricing for your <br />
            next stage
          </h2>
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
            <div className="pr-2s">
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
        </div>
        <div className="mt-main grid grid-cols-1 md:grid-cols-3 gap-2s">
          <div>
            <div className="bg-neutral-200 text-black h-fit w-full rounded-[calc(var(--radius-2s)+0.2vw)] p-[calc(var(--spacings--2s)/2)] flex flex-col gap-[calc(var(--spacings--2s)/2)]">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  onClick={() => setActivePlan(plan.name)}
                  className={cn(
                    "bg-white/80 p-2s rounded-2s cursor-pointer flex justify-between items-center",
                    {
                      "bg-white": activePlan === plan.name,
                    },
                  )}>
                  <div>
                    <p className="font-semibold text-[1.2em]">{plan.name}</p>
                    <p className="text-[0.9em]">Starts at {plan.price}</p>
                  </div>
                  <div
                    className={cn(
                      "bg-stone-300 w-2s h-2s rounded-full flex items-center justify-center transition-colors duration-300",
                      {
                        "bg-black": activePlan === plan.name,
                      },
                    )}>
                    <AnimatePresence>
                      {activePlan === plan.name && (
                        <motion.svg
                          key="check"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 450,
                            damping: 25,
                          }}
                          className="w-s h-s text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <motion.path
                            d="M5 13l4 4L19 7"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                          />
                        </motion.svg>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-main p-xs">
              <p className="font-semibold">
                All engagements start with a free 30-minute discovery call. No
                commitment required.
              </p>
            </div>
          </div>
          <div className="col-span-2 bg-neutral-800  h-full w-full rounded-m p-main">
            <div className="grid grid-cols-2 items-center gap-[calc(var(--spacings--2s)/2)]">
              <div className="flex flex-col gap-xs">
                <p className="text-[0.9em] font-semibold leading-none">
                  Starts at
                </p>
                <h3 className="text-[4.2em] leading-none font-medium tracking-tight">
                  {plans.find((plan) => plan.name === activePlan)?.price}
                </h3>
              </div>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="cursor-pointer py-s rounded-full px-m w-full h-2m font-semibold overflow-hidden bg-white text-[1.1em] relative text-center">
                <div className="relative">
                  <motion.div
                    className="text-black"
                    animate={{
                      y: isHovered ? -15 : 0,
                      scale: isHovered ? 0.9 : 1,
                      opacity: isHovered ? 0 : 1,
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.35,
                      stiffness: 700,
                      damping: 30,
                      duration: 0.1,
                      delay: isHovered ? 0 : 0.1,
                      ease: "easeInOut",
                    }}>
                    Get Started
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 z-5 text-black"
                    animate={{
                      y: isHovered ? 0 : 15,
                      scale: isHovered ? 1 : 0.9,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.35,
                      stiffness: 700,
                      damping: 30,
                      duration: 0.1,
                      delay: 0.1,
                      ease: "easeInOut",
                    }}>
                    Get Started
                  </motion.div>
                </div>
                <motion.div
                  animate={{
                    scale: isHovered ? 1.5 : 0,
                    y: isHovered ? 0 : 45,
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full bg-green-400 rounded-full absolute bottom-0 left-1/2 translate-x-[-50%]"
                />
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-2s mt-main">
              {plans
                .find((plan) => plan.name === activePlan)
                ?.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-s">
                    <div className="rounded-full bg-white w-2s h-2s p-[0.05em] flex items-center justify-center">
                      <svg
                        className="w-2s h-2s text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path
                          d="M5 13l4 4L19 7"
                          className="w-2s h-2s text-black"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

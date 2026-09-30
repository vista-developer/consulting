"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/utils/utils";

const businessSetup = [
  {
    title: "Mainland Business Setup",
    description:
      "Set up your business in the Dubai mainland and get the freedom to operate and scale anywhere without limits. Access the entire UAE market and benefit from unlimited visas, complete ownership, and secure government contracts. Get end-to-end business setup support from our experts to enjoy enhanced business control and profit retention.",
    img: "/jurisdiction/mainland.webp",
    url: "",
  },
  {
    title: "Freezone Business Setup",
    description:
      "The UAE offers investors more than 40 multidisciplinary free zones catering to different business and investment needs, from media to finance. Enjoy full profit repatriation, 100% ownership, and access to dedicated, modern infrastructure. A free zone business setup in Dubai is the best choice for entrepreneurs who wish to start lean but grow smarter.",
    img: "/jurisdiction/freezone.webp",
    url: "",
  },
  {
    title: "Offshore Business Setup",
    description:
      "An offshore business setup is ideal for investments, international operations, and intellectual property (IP) holding. The entity cannot trade within the UAE, but has global trading flexibility with no capital restrictions. Our experts handle everything for you remotely, so you operate globally with clarity & confidence.",
    img: "/jurisdiction/offshore.webp",
    url: "",
  },
];

export default function Jurisdiction() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full h-full bg-white text-black px-[calc(var(--spacings--main)*2)] pb-main">
      <h2 className="text-[6.167vw] leading-none max-w-2/3 font-medium tracking-tighter">
        Choose the Right Jurisdiction
      </h2>
      <p className="text-[1.642vw] leading-[1.1] mt-main">
        Choosing the right jurisdiction is the most critical decision when{" "}
        <br />
        starting a business in the UAE. It determines how your business is{" "}
        <br />
        regulated, the types of licenses you can obtain, and the extent of legal{" "}
        <br />
        liability you face.
      </p>
      <div className="relative flex flex-col gap-l items-center mt-main pt-main">
        {businessSetup.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-[calc(var(--spacings--2s)/2)] rounded-[calc(var(--radius-2s)+0.3vw)] bg-gray-200 sticky top-[20%]">
            <div className="grid grid-cols-2 gap-[calc(var(--spacings--2s)/2)]">
              <div className="flex flex-col justify-between gap-[calc(var(--spacings--2s)/2)]">
                <div className="bg-white rounded-2s p-main h-full">
                  <span className="text-[1.5vw] leading-none font-semibold tracking-tight">
                    0{index + 1}
                  </span>
                  <h3 className="text-[2.4vw] leading-none font-semibold tracking-tight mt-2m">
                    {item.title}
                  </h3>
                  <p className="mt-m">{item.description}</p>
                </div>
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="cursor-pointer py-2s rounded-full px-m w-full h-main font-semibold overflow-hidden bg-green-400 relative text-center">
                  <div className="relative">
                    <motion.div
                      className="text-white"
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
                      Learn More
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 z-5 text-white"
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
                      Learn More
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
                    className="w-full h-full bg-black rounded-full absolute bottom-0 left-1/2 translate-x-[-50%]"
                  />
                </div>
              </div>
              <div className="relative w-full h-[50vh] rounded-2s overflow-hidden">
                <Image
                  fill
                  className="object-cover"
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

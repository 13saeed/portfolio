"use client";
import Image from "next/image";
import { motion } from "motion/react";
import "@/app/styles/globals.css";
import Link from "next/link";
import { useState } from "react";
import { easeInOut } from "motion";
export const navbar = [
  { name: "PORTFOLIO", url: "/gallery" },
  { name: "ABOUT", url: "/about" },
  { name: "CONTACT", url: "/contact" },
  { name: "HOME", url: "./" },
];
export default function Homepage() {
  const text = "SAEED CHOUPANI".split("");
  return (
    <>
      <div className="relative">
        <motion.div
          className="h-screen w-full overflow-hidden bg-[url('../image/me7.jpg')] bg-contain bg-no-repeat bg-amber-700 bg-fixed bg-center  duration-[1.3s,15s]
          hover:scale-105 @container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
        >
          <div className="backdrop-grayscale  w-full h-full flex flex-col justify-center items-center  border border-black @container">
            <div className="flex flex-row mt-24  mb-5 sm:mb-5 ">
              {text.map((el, i) => (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 3,
                    delay: i / 10,
                  }}
                  key={i}
                  className="text-white font-extrabold text-sm ml-2 @3xs:text-lg @xs:text-xl @sm:text-2xl @md:text-3xl @lg:text-4xl @xl:text-5xl  @3xl:text-6xl @4xl:text-7xl @5xl:text-8xl"
                >
                  {el}
                  {""}
                </motion.h1>
              ))}
            </div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className="flex flex-row items-center text-white text-sm  bg-gray-500 opacity-10  py-2 px-1 rounded-3xl @xs:flex-col @sm:flex-row @lg:text-lg @xl:text-xl @3xl:text-2xl @4xl:text-3xl"
            >
              {navbar.map((item, i) => (
                <motion.li key={i}>
                  <Link
                    key={i}
                    href={item.url}
                    className="relative z-1 px-2  hover:text-black  hover:scale-105 hover:font-bold "
                  >
                    {item.name}
                  </Link>
                </motion.li>

              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}

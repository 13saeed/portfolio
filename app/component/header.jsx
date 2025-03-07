"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { navbar } from "../(home)/page";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { BiListUl } from "react-icons/bi";
import { RxExit } from "react-icons/rx";


export default function Header() {
  const pathName = usePathname();
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const activeIndex = navbar.findIndex((item) =>
      pathName.startsWith(item.url)
    );
    setActiveTab(activeIndex >= 0 ? activeIndex : 0);
  }, [pathName]);
  return (
    <>
      <div className="flex flex-col  justify-around items-center p-6 pr-0 w-full bg-linear-to-r from-gray-900 to-red-800 @3xl:flex-row">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <Link
            href={"./"}
            className=" text-lg font-bold items-baseline @3xs:text-xl @2xs:text-2xl @xs:text-3xl @sm:text-4xl @xl:text-5xl @2xl:text-6xl @3xl:text-3xl @4xl:text-4xl "
          >
            SAEED CHOUPANI
          </Link>
        </motion.div>

        <div className="flex items-center text-3xl text-center mt-5  rounded-2xl p-2 bg-black @lg:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {menuOpen ? <RxExit /> : <BiListUl />}
          </button>
        </div>

        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.75 }}
          className="hidden mt-3   relative text-sm text-center @xs:text-lg @sm:mt-5 @sm:text-xl @md:text-2xl @lg:flex-row @lg:text-lg @xl:text-xl @2xl:text-2xl @2xl:mt-8 @3xl:text-xl @3xl:mt-0 @4xl:text-2xl @lg:flex "
        >
          {navbar.map((item, index) => {
            const isActive =
              pathName.startsWith(item.url) || activeTab === item.name;
            return (
              <motion.div
                key={item.name}
                className="relative inline-block px-6 py-3 @lg:px-2"
                onClick={() => setActiveTab(index)}
              >
                <Link
                  key={item.name}
                  href={item.url}
                  className={`relative ${
                    isActive ? "text-blue-500 font-bold " : "text-white"
                  } px-2 hover:text-blue-500 bottom-0 z-50 hover:scale-105`}
                >
                  {item.name}
                </Link>
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-black border border-slate-500  rounded-3xl opacity-70 "
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 25,
                      duration: 0.6,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {menuOpen && (

            <div className=" text-center p-3 bg-linear-to-r from-gray-900 to-red-800 w-full h-60 md:hidden ">
              <div className="flex flex-col  ">
                {navbar.map((item, index) => {
                  const isActive =
                    pathName.startsWith(item.url) || activeTab === item.name;
                  return (
                    <motion.div
                      key={item.name}
                      className="relative inline-block px-6 py-3 @lg:px-2"
                      onClick={() => setActiveTab(index)}
                    >
                      <Link
                        key={item.name}
                        href={item.url}
                        className={`relative ${
                          isActive ? "text-blue-500 font-bold " : "text-white"
                        } px-2 hover:text-blue-500 bottom-0 z-1 hover:scale-105`}
                      >
                        {item.name}
                      </Link>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-black border border-slate-500  rounded-3xl opacity-70 "
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          exit={{ scaleX: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 25,
                            duration: 0.6,
                          }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

      )}
    </>
  );
}

"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const menuClick = (index) =>{
    setActiveTab(index)
    setMenuOpen(false)
  }

  useEffect(() => {
    const activeIndex = navbar.findIndex((item) =>
      pathName.startsWith(item.url)
    );
    setActiveTab(activeIndex >= 0 ? activeIndex : 0);
  }, [pathName]);
  return (
    <>
      <div className="flex flex-col  justify-around items-center p-6 pr-0 w-full bg-linear-to-r from-gray-900 to-red-800 @3xl:flex-row relative z-40  @md:justify-between  @md:flex-row @lg:p-8 @2xl:items-center @3xl:px-6 @5xl:py-5 @5xl:items-center">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <Link
            href={"./"}
            className=" text-lg font-bold  @3xs:text-xl @2xs:text-2xl @xs:text-3xl @sm:text-4xl @md:text-2xl  @xl:text-2xl @2xl:text-xl  @3xl:text-2xl @4xl:text-3xl "
          >
            SAEED CHOUPANI
          </Link>
        </motion.div>

        <div className="flex items-center justify-center text-3xl text-center mt-5  rounded-2xl w-10 h-10 bg-black @2xl:hidden @md:mt-0 @md:mr-3 ">
          <button onClick={toggleMenu} className="cursor-pointer">
            {menuOpen ? <RxExit size={25} /> : <BiListUl size={30} />}
          </button>
        </div>

        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.75 }}
          className="hidden mt-3   relative text-sm text-center @xs:text-lg @sm:mt-5 @sm:text-xl @md:text-2xl @lg:flex-row @lg:text-lg @xl:text-lg @2xl:text-sm  @2xl:mt-0 @3xl:text-lg @3xl:mt-0 @4xl:text-xl @2xl:flex @2xl:items-start"
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

<AnimatePresence>
{menuOpen && (
        <>
          <motion.div
            className="fixed  inset-0 bg-black opacity-50 z-10 md:hidden overflow-hidden"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            className=" text-center p-3 bg-linear-to-r from-gray-900 to-red-800 w-full h-60 md:hidden  z-20 absolute overflow-hidden"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            exit={{ y: -200 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col  ">
              {navbar.map((item, index) => {
                const isActive =
                  pathName.startsWith(item.url) || activeTab === item.name;
                return (
                  <motion.div
                    key={item.name}
                    className="relative inline-block px-6 py-3 @lg:px-2"
                    onClick={() => menuClick(index)}
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
          </motion.div>
        </>
      )}

</AnimatePresence>

    </>
  );
}

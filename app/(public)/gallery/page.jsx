"use client"
import * as motion from "motion/react-client";
import Card from "./card";
import { useTheme } from "@/app/component/changeTheme";


export default function Gallery() {
  const {theme} = useTheme()
  return (
    <>
      <div className={`flex flex-col max-w-screen  items-center ${theme == 'dark' ? 'bg-black' : "bg-white text-black" }`}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center text-3xl my-10 font-bold"
        >
          PORTFOLIO
        </motion.h2>
        <Card/>
      </div>
    </>
  );
}

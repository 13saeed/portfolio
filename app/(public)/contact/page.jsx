"use client"
import Image from "next/image";
import * as motion from "motion/react-client";
import { NeonText } from "@/app/component/animatedText";
import { useTheme } from "@/app/component/changeTheme";
export default function Contact() {
  const {theme} = useTheme()
  return (
    <div className={`flex flex-col items-center h-screen w-full p-4 @2xl:flex-row @2xl:justify-between  @3xl:justify-around ${theme === 'dark' ? "" : "bg-white text-black"}`}>
      <motion.div
        initial={{ x: -600 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold p-1 @sm:mt-5"
      >
        <NeonText text={"Contact"}/>
      </motion.div>
      <motion.div
        initial={{ x: +800 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className={`flex flex-col justify-center items-center  border rounded-2xl w-[290] h-[400] mt-5 @sm:w-[400] @sm:h-[400] @5xl:w-[500] @5xl:h-[500] ${theme === 'dark' ? "border-zinc-800  text-slate-200 " : "bg-[#f1f1f1] border-[#f1f1f1] text-black placeholder:text-black"}`}
      >
        <div className={`text-center m-2 w-3/4 ${theme === 'dark' ? "placeholder:text-white " : " placeholder:text-black"}`}>
          <input
            className="w-full bg-transparent mb-7   text-sm border-b border-slate-200 rounded-md px-3 py-2  focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            type="text"
            placeholder=" Name"
          />
          <input
            className="w-full mb-7 bg-transparent   text-sm border-b border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full mb-7 bg-transparent   text-sm border-b border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            type="text"
            placeholder="Your Message"
          />
          <input
            className="w-full bg-transparent   text-sm border-b border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            type="text"
            placeholder="Contact Number"
          />
          <div className="flex justify-start">
            <button className="bg-transparent py-3 px-7  border border-white cursor-pointer hover:bg-blue-800 hover:text-black  mt-10 rounded-md">
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

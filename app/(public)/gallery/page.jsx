import * as motion from "motion/react-client";
import Card from "./card";

import { navbar } from "@/app/(home)/page";



export default function Gallery() {
  return (
    <>
      <div className="flex flex-col max-w-screen  items-center ">
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

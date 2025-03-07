import * as motion from "motion/react-client";

export default function About() {
  return (
    <div className="flex items-center h-screen w-full justify-around ">
      <div className=" ">
        <motion.h1
          initial={{ x: -600 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-10"
        >
          About
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-baseline border-zinc-800 border rounded-2xl w-[700] h-[500] p-4 mt-5"
      >
        <div className="flex items-baseline m-6">
          <h1 className="text-4xl font-bold pr-2">Full Name:</h1>
          <p className="text-3xl">Saeed Choupani</p>
        </div>
        <div className="flex items-baseline">
          <h1 className="text-4xl font-bold pr-2">Age:</h1>
          <p className="text-3xl ">21</p>
        </div>
        <div className="flex items-baseline m-6">
          <h1 className="text-4xl font-bold pr-2">Education:</h1>
          <p className="text-3xl mt-2">Bachelor's degree</p>
        </div>
        <h1 className="text-3xl">Front End Developer</h1>
      </motion.div>
    </div>
  );
}

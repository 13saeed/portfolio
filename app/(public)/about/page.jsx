import * as motion from "motion/react-client";

export default function About() {
  return (
    <div className="flex flex-col items-center h-screen w-full @2xl:flex-row @2xl:justify-around">
      <div className=" ">
        <motion.h1
          initial={{ x: -600 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold  p-5"
        >
          About
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-baseline border-zinc-800 border rounded-2xl w-[330] h-[350] p-8 mt-5 @md:w-[400] @md:h-[400] @xl:w-[500] @xl:h-[500] @2xl:w-[400] @2xl:h-[400] @3xl:w-[450] @3xl:h-[450] @4xl:w-[500] @4xl:h-[500]"
      >
        <div className="flex text-xl items-baseline mx-2 my-4 @md:text-2xl @xl:text-3xl @2xl:text-2xl  @4xl:text-3xl">
          <h1 className="font-bold pr-2 ">Full Name:</h1>
          <p className="text-lg @md:text-xl @xl:text-2xl @2xl:text-lg @3xl:text-2xl ">Saeed Choupani</p>
        </div>
        <div className="flex text-xl items-baseline @md:text-2xl @xl:text-3xl @2xl:text-2xl @4xl:text-3xl">
          <h1 className="font-bold pr-2">Age:</h1>
          <p className="text-lg @md:text-xl @xl:text-2xl @2xl:text-xl @4xl:text-2xl">21</p>
        </div>
        <div className="flex text-xl items-baseline  my-4 @md:text-2xl @xl:text-3xl @2xl:text-2xl @4xl:text-3xl">
          <h1 className=" font-bold pr-2">Education:</h1>
          <p className="text-lg mt-2 @md:text-xl @xl:text-2xl @2xl:text-xl @4xl:text-2xl">Bachelor's degree</p>
        </div>
        <h1 className="text-xl @md:text-2xl @xl:text-3xl @xl:mt-6 @2xl:text-2xl @4xl:text-3xl">Front End Developer</h1>
      </motion.div>
    </div>
  );
}


import * as motion from "motion/react-client";

export const NeonText = ({ text }) => {
  return (
    <motion.h1
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="text-5xl font-bold mb-5 "
    >{text}</motion.h1>
  );
};



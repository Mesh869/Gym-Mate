import Navbar from "../Components/Navbar";
import gymvid from "../../public/videos/gym.mp4";
import { motion } from "framer-motion";

const Hero = () => {
  // Define variants for even slower staggered entrance with repeat
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8, // Further increased stagger for slower sequencing
        duration: 0.1, // Quick container transition
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={gymvid}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay (optional for readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

      {/* Navbar on top */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Hero content - Wrapped in motion.div for stagger and repeat */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{
          repeat: Infinity, // Repeats the entire staggered sequence infinitely
          repeatDelay: 3, // Pause 3s between repeats for breathing room
          duration: 2.5, // Total cycle time (stagger + child durations)
        }}
      >
        <motion.h1
          variants={childVariants}
          transition={{
            duration: 2, // Even slower fade/slide-in
            ease: "easeOut",
          }}
          className="text-4xl md:text-6xl font-bold"
        >
          Welcome to <span className="text-[#868e96]">Gym Mate</span>
        </motion.h1>

        <motion.p
          variants={childVariants}
          transition={{
            duration: 2, // Matching slow duration
            ease: "easeOut",
          }}
          className="mt-4 text-lg md:text-2xl w-full max-w-2xl text-center"
        >
          Join us in transforming your body and mind through our comprehensive
          yoga and fitness programs.
        </motion.p>

        {/* Uncomment and animate button if needed */}
        {/* <motion.button
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-red-600 rounded-lg text-lg font-semibold"
        >
          Join Now
        </motion.button> */}
      </motion.div>
    </div>
  );
};

export default Hero;

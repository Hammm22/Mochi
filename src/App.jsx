import { motion } from "motion/react";

export default function App() {
  return (
    <main
      id="home"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center px-4"
    >
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl mb-6 sm:mb-8 font-bold text-amber-900 text-center"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Japanese Mochi
      </motion.h1>

      <motion.a
        className="bg-black/50 h-14 sm:h-16 w-64 sm:w-72 text-white text-2xl sm:text-4xl font-semibold rounded-xl flex justify-center items-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          y: { duration: 1.5, delay: 0.4, ease: "easeOut" },
          opacity: { duration: 2, delay: 0.4 },
        }}
        href="#pengertian"
      >
        Ketahui Lebih
      </motion.a>
    </main>
  );
}

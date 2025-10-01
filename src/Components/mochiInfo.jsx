import { motion } from "motion/react";
import Getok from "../assets/alatGetok.png";

export default function MochiInfo() {
  return (
   <section
  id="pengertian"
  className="min-h-screen bg-amber-50 flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between px-6 md:px-20 py-24 md:py-20 gap-10"
>
  <motion.h1
    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-amber-900 w-full sm:w-11/12 md:w-1/2 text-center md:text-left"
    initial={{ x: 300, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
  >
    Apa itu Mochi?
  </motion.h1>

  <motion.p
    className="w-full sm:w-11/12 md:w-1/2 font-semibold text-xl sm:text-2xl md:text-3xl text-stone-800 text-center md:text-left"
    initial={{ y: 200, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    viewport={{ once: true }}
  >
    Mochi adalah camilan khas Jepang dengan tekstur lembut dan kenyal yang
    bikin siapa saja ketagihan. Terbuat dari beras ketan pilihan, mochi
    sudah lama menjadi simbol kebahagiaan dan keberuntungan dalam budaya
    Jepang.
    <br />
    <br />
    Kini, mochi hadir dalam berbagai varian modern dari isian kacang merah,
    stroberi segar, matcha, hingga es krim. Perpaduan tradisi dan inovasi
    inilah yang membuat mochi bukan sekadar makanan, tapi pengalaman manis
    yang tak terlupakan.
  </motion.p>

  <motion.img
    src={Getok}
    alt="Alat Getok dan Bakul Mochi"
    className="md:w-56 w-2/3 sm:w-1/2 rounded-lg"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  />
</section>
  );
}

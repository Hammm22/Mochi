import { motion } from "motion/react";

export default function SejarahMochi() {
  return (
    <section
      id="sejarah"
      className="h-screen bg-amber-50 flex flex-col items-center justify-center py-20 px-6"
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-amber-900 text-center"
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Sejarah Mochi
      </motion.h1>

      <motion.p
        className="mt-10 sm:mt-14 max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl font-semibold text-lg sm:text-2xl md:text-3xl text-stone-800 text-center"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Mochi sudah ada di Jepang sejak lebih dari seribu tahun yang lalu,
        bahkan tercatat dalam naskah kuno pada periode Heian (794–1185). Pada
        masa itu, mochi bukan hanya makanan biasa, melainkan dianggap suci dan
        digunakan dalam ritual keagamaan. Masyarakat Jepang percaya bahwa mochi
        mengandung roh padi yang melambangkan kekuatan, keberuntungan, dan umur
        panjang.<br /><br />
        Tradisi paling terkenal adalah mochitsuki, yaitu menumbuk beras ketan
        bersama-sama menjelang Tahun Baru. Mochi yang dihasilkan kemudian
        disajikan sebagai Kagami Mochi, tumpukan dua mochi bundar dengan jeruk
        di atasnya, yang menjadi simbol keharmonisan dan doa untuk tahun yang
        baik.<br /><br />
        Seiring waktu, mochi mulai dinikmati sehari-hari, bukan hanya saat
        perayaan. Inovasi pun terus berkembang, menghadirkan berbagai varian
        rasa dan isian, hingga akhirnya menjadi camilan populer di Jepang dan
        dikenal di seluruh dunia.
      </motion.p>
    </section>
  );
}

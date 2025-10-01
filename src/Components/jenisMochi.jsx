import { motion } from "motion/react";
import daifuku from "../assets/daifuku.jpg";
import ichigo from "../assets/ichigo.jpg";
import hanabira from "../assets/Hanabira.jpg";
import icecream from "../assets/IceCream.jpg";
import kashiwa from "../assets/Kashiwa.jpg";
import kiri from "../assets/Kiri.jpg";
import kusa from "../assets/Kusa.jpg";
import sakura from "../assets/Sakura.jpg";
import warabi from "../assets/Warabi.jpg";
import gohei from "../assets/Goheimochi.jpg";
import hishi from "../assets/Hishi.jpg";
import gyuhi from "../assets/Gyūhi.jpg";

const mochiList = [
  {
    img: daifuku,
    name: "Mochi Daifuku (大福)",
    description:
      "Mochi bulat lembut isi pasta kacang merah (anko) atau isian lainnya (stroberi, matcha, custard).",
  },
  {
    img: ichigo,
    name: "Mochi Ichigo (いちご大福)",
    description:
      "Varian daifuku yang di dalamnya ada stroberi utuh + lapisan anko + mochi di luar",
  },
  {
    img: hanabira,
    name: "Mochi Hanabira (花びら餅)",
    description:
      "Mochi tipis yang dilipat seperti kelopak bunga, biasanya disajikan di acara minum teh Tahun Baru (茶会, hatsugama). Dalamnya ada pasta kacang putih dan umbi teratai.",
  },
  {
    img: icecream,
    name: "Mochi Ice Cream",
    description:
      "Mochi tipis dibungkus es krim sebagai isiannya — sangat populer di versi modern mochi.",
  },
  {
    img: kashiwa,
    name: "Mochi Kashiwa (柏餅)",
    description:
      "Mochi isi kacang merah dibungkus daun ek (kashiwa) — daun tidak dimakan, cuma memberi aroma. Tradisional disajikan saat Hari Anak-anak di Jepang (Kodomo no Hi).",
  },
  {
    img: kiri,
    name: "Mochi Kiri (切り餅)",
    description:
      "Mochi yang dikeringkan / dipotong kotak atau batang, bisa disimpan lama, lalu dipanaskan (panggang / rebus) saat mau dimakan.",
  },
  {
    img: kusa,
    name: "Mochi Kusa (草餅)",
    description:
      "Mochi yang dicampur dengan daun mugwort (yomogi), berwarna hijau dan rasa agak herbal.",
  },
  {
    img: sakura,
    name: "Mochi Sakura (桜餅)",
    description:
      "Mochi warna pink dibungkus daun sakura (daun bunga sakura diasinkan), biasanya muncul di musim semi / festival hanami.",
  },
  {
    img: warabi,
    name: "Mochi Warabi (蕨餅)",
    description:
      "Terbuat dari pati warabi (bracken) bukan ketan, teksturnya lebih jelly/kenyal. Biasanya disajikan dengan taburan kinako (tepung kacang kedelai).",
  },
  {
    img: gohei,
    name: "Mochi Gohei (五平餅)",
    description:
      "Mochi khas daerah Chūbu (prefektur Nagano, Gifu, Aichi) yang disajikan mengenakan saus manis-gurih (campuran gula, kecap, mirin). Biasanya disusun di tusuk bambu dan dipanggang sebagian agar permukaannya agak kecoklatan. ",
  },
  {
    img: hishi,
    name: "Mochi Hishi (菱餅)",
    description:
      "Mochi berbentuk wajik atau berlian yang tersusun dari tiga lapisan warna: merah muda (atas), putih (tengah), dan hijau (bawah).",
  },
  {
    img: gyuhi,
    name: "Mochi Gyūhi (求肥)",
    description:
      "Varian mochi yang lebih lembut dan halus dibanding mochi biasa. Terbuat dari beras ketan atau tepung ketan (mochiko), dan sering digunakan sebagai bahan dasar untuk wagashi (kue tradisional Jepang) seperti nerikiri.",
  },
];

export default function JenisMochi() {
  return (
    <section className="h-max bg-amber-50 flex flex-col items-center justify-center py-20 px-4">
      <motion.h1
        className="text-amber-900 text-6xl sm:text-7xl md:text-8xl font-bold text-center"
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Jenis-Jenis Mochi
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-white text-lg font-semibold w-full max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {mochiList.map((mochi, i) => (
          <motion.div
            key={i}
            className="relative bg-stone-500 p-4 rounded-xl flex flex-col items-center overflow-hidden cursor-pointer"
            variants={{
              hidden: { y: 50, opacity: 0, scale: 0.9 },
              visible: { y: 0, opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              className="h-44 w-44 sm:h-48 sm:w-48 md:h-52 md:w-52 rounded-lg object-cover"
              src={mochi.img}
              alt={mochi.name}
            />
            <h4 className="mt-2 text-center">{mochi.name}</h4>

            {/* Overlay info */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center text-center p-4"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p>{mochi.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

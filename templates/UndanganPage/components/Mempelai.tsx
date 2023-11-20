import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import aset1 from "../../../public/Asset-1.webp";
import pengantin1 from "../../../public/pengantin1.jpg";
import Image from "next/image";

import { Great_Vibes, Montserrat, WindSong } from "next/font/google";

const windsong = WindSong({ subsets: ["latin"], weight: ["400", "500"] });
const gvibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const mont = Montserrat({ subsets: ["latin"] });

const Mempelai = () => {
  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      transition: { duration: 0.3, delay: 0.3 },
    },
    onscreen: {
      opacity: 1,
      transition: { duration: 0.3, delay: 0.3 },
    },
  };

  const contentVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants: Variants = {
    offscreen: {
      opacity: 0,
      x: "100%",
    },
    onscreen: {
      opacity: 1,
      x: "0",
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
      className="h-screen bg-main relative z-0 overflow-hidden"
    >
      <motion.div variants={cardVariants}>
        <Image
          src={aset1}
          alt="aset1"
          className="h-screen object-fill opacity-70"
        />
      </motion.div>

      <motion.div
        className="h-screen absolute top-0 left-0 w-full z-10 flex flex-col items-start justify-center p-3 lg:p-6"
        variants={contentVariants}
      >
        <div className="px-6 mb-3 text-center font-light italic text-sm lg:text-base">
          Assalamualaikum Wr. Wb. Segala puji bagi Allah SWT, Yang Maha Suci,
          yang telah menciptakan makhluk-Nya berpasangan. Ya Allah, dengan penuh
          kerendahan hati kami memohon izin-Mu untuk melaksanakan ikatan
          pernikahan kami:
        </div>
        <motion.div
          variants={childVariants}
          className="mx-auto w-1/3 rounded-full overflow-hidden shadow-xl border-2 border-black/10 mb-3"
        >
          <Image src={pengantin1} alt="pengantin1" />
        </motion.div>

        <motion.div variants={childVariants} className="text-center mx-auto">
          <p className={`${mont.className} underline mb-3`}>Mempelai Putri</p>
          <h1 className={`${gvibes.className} text-5xl font-semibold`}>
            Hanifiah Anin Nisa'
          </h1>
          <p className="text-lg lg:text-xl italic mt-3">
            Putri Dari Bapak Suyadi & Ibu Juwariyah
          </p>
          <p className="text-sm lg:text-base font-semibold">
            Besuki - Mojo Kediri
          </p>
        </motion.div>

        <div
          className={`text-center font-semibold text-3xl w-full my-3 ${windsong.className}`}
        >
          Dengan
        </div>

        <motion.div variants={childVariants} className="text-center mx-auto">
          <p className={`${mont.className} underline mb-3`}>Mempelai Putra</p>
          <h1 className={`${gvibes.className} text-5xl font-semibold`}>
            Makrus Anwar
          </h1>
          <p className="text-lg lg:text-xl italic mt-3">
            Putra Dari Bapak H Syamsuddin (Alm) & Ibu Hj Suma Indah (Almh)
          </p>
          <p className="text-sm lg:text-base font-semibold">
            Kebonrejo - Grati Pasuruan
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Mempelai;

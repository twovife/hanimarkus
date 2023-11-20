import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import aset1 from "../../../public/Asset-1.webp";
import pengantin1 from "../../../public/pengantin1.jpg";
import Image from "next/image";

import { Great_Vibes, Montserrat, WindSong } from "next/font/google";

const windsong = WindSong({ subsets: ["latin"], weight: ["400", "500"] });
const gvibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const mont = Montserrat({ subsets: ["latin"] });

const Resepsi = () => {
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
        className="h-screen absolute top-0 left-0 w-full z-10 flex flex-col items-start justify-center"
        variants={contentVariants}
      >
        <motion.h1
          variants={childVariants}
          className={`${windsong.className} text-6xl text-center mx-auto`}
        >
          Resepsi
        </motion.h1>

        <div className="flex mx-auto gap-6 items-center justify-evenly w-full">
          <div>
            <motion.p
              variants={childVariants}
              className={`${mont.className} text-xl lg:text-3xl font-semibold text-center mx-auto mt-6`}
            >
              JUMAT
            </motion.p>
            <div className="flex justify-center items-center mx-auto gap-3">
              <motion.div
                variants={contentVariants}
                className={`${mont.className} text-3xl lg:text-5xl font-semibold text-gray-500 text-end mx-auto`}
              >
                <motion.div variants={childVariants}>0 1</motion.div>
                <motion.div variants={childVariants}>D E S</motion.div>
                <motion.div variants={childVariants}>2 3</motion.div>
              </motion.div>
              <motion.div
                variants={contentVariants}
                className={`${mont.className} text-2xl lg:text-4xl text-start mx-auto leading-snug`}
              >
                <motion.div variants={childVariants}>14:00</motion.div>
                <motion.div variants={childVariants}>s/d</motion.div>
                <motion.div variants={childVariants}>Selesai</motion.div>
              </motion.div>
            </div>
          </div>
          <div>
            <motion.p
              variants={childVariants}
              className={`${mont.className} text-xl lg:text-3xl font-semibold text-center mx-auto mt-6`}
            >
              SABTU
            </motion.p>
            <div className="flex justify-center items-center mx-auto gap-3">
              <motion.div
                variants={contentVariants}
                className={`${mont.className} text-3xl lg:text-5xl font-semibold text-gray-500 text-end mx-auto`}
              >
                <motion.div variants={childVariants}>0 2</motion.div>
                <motion.div variants={childVariants}>D E S</motion.div>
                <motion.div variants={childVariants}>2 3</motion.div>
              </motion.div>
              <motion.div
                variants={contentVariants}
                className={`${mont.className} text-2xl lg:text-4xl text-start mx-auto leading-snug`}
              >
                <motion.div variants={childVariants}></motion.div>
                <motion.div variants={childVariants}>Relax</motion.div>
                <motion.div variants={childVariants}></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.p
          variants={childVariants}
          className={`${mont.className} text-sm lg:text-lg italic text-center mx-auto mt-6`}
        >
          Bertempat di kediaman bapak Suyadi,
          <br />
          Dsn. Besuki Ds. Jugo Kec. Mojo Kab. Kediri
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Resepsi;

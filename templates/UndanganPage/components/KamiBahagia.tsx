import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import aset1 from "../../../public/Asset-1.webp";
import bri from "../../../public/bri.png";
import Image from "next/image";

import { Great_Vibes, Montserrat, WindSong } from "next/font/google";
import ButtonCopy from "./ButtonCopy";

const windsong = WindSong({ subsets: ["latin"], weight: ["400", "500"] });
const gvibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const mont = Montserrat({ subsets: ["latin"] });

const KamiBahagia = () => {
  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      transition: { duration: 0.3, delay: 1 },
    },
    onscreen: {
      opacity: 1,
      transition: { duration: 0.3, delay: 1 },
    },
  };

  const contentVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        delay: 1.5,
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
        <Image src={aset1} alt="aset1" className="h-screen object-fill" />
      </motion.div>

      <motion.div
        className="h-screen absolute top-0 left-0 w-full z-10 flex flex-col items-start justify-center gap-3"
        variants={contentVariants}
      >
        <motion.div
          variants={childVariants}
          className={`${mont.className} max-w-sm mx-auto lg:text-lg text-center mb-10`}
        >
          Merupakan Suatu Kehormatan Dan Kebahagiaan Bagi Kami,
          <br />
          Apabila Bapak / Ibu / Saudara / i Berkenan Hadir <br />
          Untuk Memberikan Do'a Restu Kepada Kami
          <div className={`${mont.className}`}>-Waalaikum Salam Wr. Wb-</div>
        </motion.div>

        <motion.div
          variants={childVariants}
          className={`text-center text-3xl font-semibold w-full mb-3 ${mont.className}`}
        >
          Kami Yang Berbahagia
        </motion.div>

        <motion.div
          variants={childVariants}
          className={`text-center text-6xl w-full mb-6 ${gvibes.className}`}
        >
          Hani & Makrus
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default KamiBahagia;

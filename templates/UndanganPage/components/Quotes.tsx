import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import aset1 from "../../../public/Asset-1.webp";
import pengantin1 from "../../../public/pengantin1.jpg";
import Image from "next/image";

import { Great_Vibes, Montserrat, WindSong } from "next/font/google";

const windsong = WindSong({ subsets: ["latin"], weight: ["400", "500"] });
const gvibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const mont = Montserrat({ subsets: ["latin"] });

const Quotes = () => {
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
        className="h-screen absolute top-0 left-0 w-full z-10 flex flex-col items-start justify-evenly"
        variants={contentVariants}
      >
        <div
          className={`${gvibes.className} text-lg max-w-sm mx-auto lg:text-2xl text-center mb-10`}
        >
          Dan di antara tanda-tanda kekuasaan-Nya adalah <br />
          diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri <br />
          supaya kamu mendapat ketenangan hati dan dijadikan-Nya kasih sayang
          diantara kamu. Sesungguhnya yang demikian menjadi tanda - tanda
          kebesaran-Nya bagi orang - orang yang berfikir
          <div className={`${mont.className} text-sm`}>-QS Ar. Rum 21-</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Quotes;

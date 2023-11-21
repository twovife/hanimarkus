import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import aset1 from "../../../public/Asset-1.webp";
import bri from "../../../public/bri.png";
import Image from "next/image";
import { IoHome } from "react-icons/io5";

import { Great_Vibes, Montserrat, WindSong } from "next/font/google";
import ButtonCopy from "./ButtonCopy";

const windsong = WindSong({ subsets: ["latin"], weight: ["400", "500"] });
const gvibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const mont = Montserrat({ subsets: ["latin"] });

const Penutup = () => {
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
        className="h-screen absolute top-0 left-0 w-full z-10 flex flex-col items-start justify-center gap-3  p-3 lg:p-6"
        variants={contentVariants}
      >
        <div
          className={`${gvibes.className} text-2xl max-w-sm mx-auto lg:text-5xl text-center mb-6`}
        >
          Wedding Gift
        </div>
        <div className="text-center mx-auto text-lg px-12">
          <p>Doa Restu Anda adalah anugerah yang sangat berarti bagi kami. </p>
          <p>
            Jika bentuk dukungan Anda adalah melalui pemberian, Anda dapat
            memberikan hadiah melalui:
          </p>
        </div>
        <div className="flex gap-3 items-center justify-center w-full">
          <div className="text-center">
            <Image src={bri} alt="atmbri" className="w-1/2 mx-auto" />
            <p className="text-center">AN. Hanifiah Anin Nisa'</p>
            <ButtonCopy dataValue="626101024843533" />
            <p className="text-center font-semibold">6261 0102 4843 533</p>
          </div>
          <div className="text-center">
            <Image src={bri} alt="atmbri" className="w-1/2 mx-auto" />
            <p className="text-center">AN. Makrus Anwar</p>
            <ButtonCopy dataValue="724201000573509" />
            <p className="text-center font-semibold">7242 0100 0573 509</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="text-center">
            <IoHome className="text-8xl mx-auto" />
            <p className="text-center">Hanifiah Anin Nisa'</p>
            <ButtonCopy
              dataValue="Rt/Rw 01/01 Dsn. Besuki Ds. Jugo Kec. Mojo Kab. Kediri (masjid
              Abdulloh)"
            />
            <p className="text-center">
              Rt/Rw 01/01 Dsn. Besuki Ds. Jugo <br /> Kec. Mojo Kab. Kediri
              (masjid Abdulloh)
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Penutup;

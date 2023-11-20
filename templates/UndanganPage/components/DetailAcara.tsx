import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import aset1 from "../../../public/Asset-1.webp";
import pengantin1 from "../../../public/pengantin1.jpg";
import Image from "next/image";

import { Great_Vibes, Montserrat, WindSong } from "next/font/google";
import Timer from "./Timer";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import useWindowHeight from "@/hooks/useWindowHeight";

const windsong = WindSong({ subsets: ["latin"], weight: ["400", "500"] });
const gvibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const mont = Montserrat({ subsets: ["latin"] });

const DetailAcara = () => {
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

  const height = useWindowHeight();

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
      style={{ height: `${height}px` }}
      className="bg-main relative z-0 overflow-hidden"
    >
      <motion.div variants={cardVariants}>
        <Image
          src={aset1}
          alt="aset1"
          className="h-full object-fill opacity-70"
        />
      </motion.div>

      <motion.div
        className="h-full absolute top-0 left-0 w-full z-10 flex flex-col items-start justify-center"
        variants={contentVariants}
      >
        <motion.div
          variants={childVariants}
          className={`text-center text-3xl font-semibold w-full mb-6 ${mont.className}`}
        >
          The Wedding of
        </motion.div>

        <motion.div
          variants={childVariants}
          className={`text-center text-6xl w-full mb-6 ${gvibes.className}`}
        >
          Hani & Makrus
        </motion.div>

        <motion.div
          variants={childVariants}
          className={`${mont.className} mx-auto mb-3`}
        >
          <Timer />
        </motion.div>

        <motion.div
          variants={childVariants}
          className={`text-center text-2xl font-semibold w-full mb-3 ${mont.className}`}
        >
          01 Desember 2023
        </motion.div>

        <motion.div variants={childVariants} className="mb-3 w-full">
          <button
            onClick={() =>
              window.open(
                "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20231130T170000Z%2F20231130T170000Z&details=Datang%20ya%20ke%20nikahan%20kita%2C%20karna%20kedatangan%20kalian%20adalah%20yang%20paling%20kita%20nantikan.&location=-7.86301967398517%2C%20111.85545189175214&text=Pernikahan%20Hani%20%26%20Makrus",
                "_blank"
              )
            }
            className="px-2 py-1 border border-rose-500 rounded-md mx-auto flex justify-center items-center gap-3 text-white bg-rose-400 hover:bg-white hover:text-rose-500"
          >
            <BsFillCalendar2DateFill className="text-xl" />
            <p>Tambahkan Pengingat</p>
          </button>
        </motion.div>

        <motion.div></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DetailAcara;

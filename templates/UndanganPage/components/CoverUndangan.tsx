import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import bg1 from "../../../public/background1.webp";
import { BsEnvelopeHeartFill } from "react-icons/bs";
import AnimasiKiriBawah from "./AnimasiKiriBawah";
import AnimasiKananAtas from "./AnimasiKananAtas";
import { Great_Vibes, Montserrat, WindSong } from "next/font/google";
import { motion } from "framer-motion";
import useWindowHeight from "@/hooks/useWindowHeight";
import { useRouter } from "next/router";
// import "./cover.css";

const windsong = WindSong({ subsets: ["latin"], weight: ["400", "500"] });
const gvibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const mont = Montserrat({ subsets: ["latin"] });

interface CoverUndanganProps {
  isOpen: boolean;
  setIsOpen: any;
}

const CoverUndangan: FC<CoverUndanganProps> = ({ isOpen, setIsOpen }) => {
  const variants = {
    closed: { opacity: 1, y: 0 },
    open: { opacity: 0, y: "-100%" },
  };

  const height = useWindowHeight();

  const router = useRouter();
  const toParam = router.query?.to;

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ height: `${height}px` }}
      className={` bg-main flex justify-evenly items-center flex-col fixed top-0 right-0 z-10 w-full lg:w-1/3 overflow-hidden p-3 lg:p-6`} //height: calc(var(--vh, 1vh) * 100);
    >
      <Image
        src={bg1}
        alt="bgpictures"
        // style={{ height: `${height}px` }}
        className={`absolute z-0 object-cover h-full`}
      />
      <AnimasiKiriBawah />
      <AnimasiKananAtas />
      <div className="relative z-10">
        <div
          className={`${gvibes.className} text-3xl lg:text-4xl text-center mb-10`}
        >
          Undangan Pernikahan
        </div>
        <div className="text-center">
          <div className={`${windsong.className} text-6xl lg:text-8xl`}>
            Hani
          </div>
          <div className={`${windsong.className} text-6xl lg:text-8xl`}>&</div>
          <div className={`${windsong.className} text-6xl lg:text-8xl`}>
            Makrus
          </div>
        </div>
      </div>
      <div className="text-center relative z-10">
        <div className={`${mont.className} text-sm font-light lg:text-lg`}>
          Kepada Yth Bapak / Ibu / Saudara / i :
        </div>
        <div className={`${mont.className} text-lg lg:text-2xl font-semibold`}>
          {toParam ?? "My Best Friend"}
        </div>
        <div className={`${mont.className} text-xs lg:text-base`}>
          Mohon maaf jika ada kesalahan penulisan nama & gelar
        </div>
      </div>
      <div className="relative z-50 animate-bounce">
        <button
          onClick={() => setIsOpen(true)}
          className="px-2 py-1 border border-rose-500 rounded-md flex justify-center items-center gap-3 text-white bg-rose-400 hover:bg-white hover:text-rose-500"
        >
          <BsEnvelopeHeartFill className="text-xl" />
          <p>Buka Undangan</p>
        </button>
      </div>
    </motion.div>
  );
};

export default CoverUndangan;

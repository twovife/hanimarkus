import React, { useState } from "react";
import { Great_Vibes, Montserrat, WindSong } from "next/font/google";
import Image from "next/image";
import bg1 from "../../public/background1.webp";
import aset1 from "../../public/Asset-1.webp";
import { motion } from "framer-motion";
import AnimasiKiriBawah from "./components/AnimasiKiriBawah";
import AnimasiKananAtas from "./components/AnimasiKananAtas";
import CoverUndangan from "./components/CoverUndangan";
import Quotes from "./components/Quotes";
import Mempelai from "./components/Mempelai";
import Acara from "./components/Acara";
import ContentUndangan from "./ContentUndangan";

const windsong = WindSong({ subsets: ["latin"], weight: ["400", "500"] });
const gvibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const mont = Montserrat({ subsets: ["latin"] });

export const UndanganPageTemplate = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className="antialiased">
      <div className="lg:flex relative z-0">
        <div className="flex-[2] hidden lg:block">
          <div
            className={`h-screen relative lg:fixed top-0 left-0 w-full lg:w-2/3`}
          >
            <Image
              src={bg1}
              alt="bgpictures"
              className="absolute z-0 h-screen object-cover"
            />
            <div className="text-center space-y-6 absolute z-20 w-full h-full flex items-center justify-center flex-col">
              <div className={`${gvibes.className} text-2xl lg:text-4xl`}>
                The Wedding Of
              </div>
              <div className={`${windsong.className} text-4xl lg:text-7xl`}>
                Hani & Makrus
              </div>
              <div className={`${mont.className} text-md lg:text-2xl`}>
                Kediri, 01 Desember 2023
              </div>
            </div>
            <AnimasiKiriBawah />
            <AnimasiKananAtas />
          </div>
        </div>
        <div className="flex-1 relative z-0">
          <CoverUndangan isOpen={isOpen} setIsOpen={setIsOpen} />
          <ContentUndangan isOpen={isOpen} />
        </div>
      </div>
    </main>
  );
};

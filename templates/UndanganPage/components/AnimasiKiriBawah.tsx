import React from "react";
import asset11 from "../../../public/Asset-11.png";
import asset12 from "../../../public/Asset-12.png";
import asset13 from "../../../public/Asset-13.png";
import asset14 from "../../../public/Asset-14.png";
import { motion } from "framer-motion";
import Image from "next/image";

const AnimasiKiriBawah = () => {
  return (
    <div className="absolute w-1/2 lg:w-2/5 h-2/5 bottom-0 left-0 z-20">
      <div className="absolute bottom-1/4 -left-10 z-[9]">
        <motion.div
          initial={{ rotate: 0, y: 0 }}
          animate={{
            y: [-2, 0, -2],
            rotate: [10, 0, 10],
            transition: { duration: 3, repeat: Infinity },
          }}
        >
          <Image src={asset12} alt="12" />
        </motion.div>
      </div>
      <div className="absolute bottom-0 -left-5 -rotate-12 z-10">
        <motion.div
          initial={{ rotate: 0, y: 0 }}
          animate={{
            y: [-2, 0, -2],
            rotate: [5, 0, 5],
            transition: { duration: 3, repeat: Infinity },
          }}
        >
          <Image src={asset14} alt="14" className="w-2/3" />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 z-[11]">
        <Image src={asset11} alt="11" className="w-4/5" />
      </div>
      <div className="absolute -bottom-5 translate-x-3/4 rotate-12 z-10">
        <motion.div
          animate={{
            rotate: [3, 0, 3],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          <Image src={asset13} alt="13" className="w-4/5" />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimasiKiriBawah;

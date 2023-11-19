import React from "react";
import asset16 from "../../../public/Asset-16.png";
import asset12 from "../../../public/Asset-12.png";
import asset17 from "../../../public/Asset-17.png";
import asset15 from "../../../public/Asset-15.png";
import { motion } from "framer-motion";
import Image from "next/image";

const AnimasiKananAtas = () => {
  return (
    <div className="absolute w-1/2 lg:w-2/5 h-full top-0 right-0 z-20 overflow-hidden">
      <div className="absolute top-16 -right-16 z-[9]">
        <motion.div
          initial={{ rotate: 0, y: 0 }}
          animate={{
            y: [-2, 0, -2],
            rotate: [5, 0, 5],
            transition: { duration: 3, repeat: Infinity },
          }}
        >
          <Image src={asset15} alt="15" className="w-1/2 mx-auto" />
        </motion.div>
      </div>
      <div className="absolute top-0 right-0 z-[11]">
        <Image src={asset16} alt="11" className="w-2/3 ml-auto" />
      </div>
      <div className="absolute -top-5 right-1/2 translate-x-1/2 rotate-12 z-10">
        <motion.div
          animate={{
            rotate: [1, 0, 1],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          <Image src={asset17} alt="17" className="w-4/5" />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimasiKananAtas;

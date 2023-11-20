import React, { useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";

const Timer = () => {
  const targetTime: any = new Date("December 1, 2023 09:00:00");
  const [duration, setDuration] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      updateDate();
    }, 1000);
  }, []);

  function updateDate() {
    const now = new Date().getTime();
    const timeleft = targetTime - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    setDuration({
      days,
      hours,
      minutes,
      seconds,
    });
  }

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
      className="flex gap-3"
      initial="offscreen"
      whileInView="onscreen"
      variants={contentVariants}
      viewport={{ once: false, amount: 0.8 }}
    >
      <motion.div
        variants={childVariants}
        className="p-3 border rounded shadow-lg bg-main text-2xl text-center"
      >
        <p className="text-xl lg:text-4xl font-medium">{`${
          duration.days < 0 ? 0 : duration.days
        }`}</p>
        Hari
      </motion.div>
      <motion.div
        variants={childVariants}
        className="p-3 border rounded shadow-lg bg-main text-2xl text-center"
      >
        <p className="text-xl lg:text-4xl font-medium">{`${
          duration.hours < 0 ? 0 : duration.hours
        }`}</p>
        Jam
      </motion.div>
      <motion.div
        variants={childVariants}
        className="p-3 border rounded shadow-lg bg-main text-2xl text-center"
      >
        <p className="text-xl lg:text-4xl font-medium">{`${
          duration.minutes < 0 ? 0 : duration.minutes
        }`}</p>
        Menit
      </motion.div>
      <motion.div
        variants={childVariants}
        className="p-3 border-2 border-main rounded shadow-lg bg-transparent text-2xl text-center"
      >
        <p className="text-xl lg:text-4xl font-light">{`${
          duration.seconds < 0 ? 0 : duration.seconds
        }`}</p>
        Detik
      </motion.div>
    </motion.div>
  );
};

export default Timer;

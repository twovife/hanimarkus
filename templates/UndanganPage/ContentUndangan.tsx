import React, { FC, useEffect, useState } from "react";
import Quotes from "./components/Quotes";
import Mempelai from "./components/Mempelai";
import Acara from "./components/Acara";
import Resepsi from "./components/Resepsi";
import Timer from "./components/Timer";
import DetailAcara from "./components/DetailAcara";
import Penutup from "./components/Penutup";
import KamiBahagia from "./components/KamiBahagia";

interface CoverUndanganProps {
  isOpen: boolean;
}

const ContentUndangan: FC<CoverUndanganProps> = ({ isOpen, ...props }) => {
  const [activeComponent, setActiveComponent] = useState(1);
  const [isScrollEnabled, setScrollEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = (event: any) => {
      if (isScrollEnabled) {
        let newActiveComponent: any;

        if (event.deltaY > 0) {
          // Scroll ke bawah
          newActiveComponent = Math.min(activeComponent + 1, 7);
        } else if (event.deltaY < 0) {
          // Scroll ke atas
          newActiveComponent = Math.max(activeComponent - 1, 1);
        }

        // Update nilai activeComponent hanya jika nilainya valid
        setActiveComponent(newActiveComponent);

        // Menonaktifkan fungsi scroll untuk sementara
        setScrollEnabled(false);

        // Mengaktifkan kembali fungsi scroll setelah 3 detik
        setTimeout(() => {
          setScrollEnabled(true);
        }, 2000);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isScrollEnabled]);

  return (
    <>
      {isOpen == true && activeComponent === 1 && <DetailAcara />}
      {activeComponent === 2 && <Mempelai />}
      {activeComponent === 3 && <Acara />}
      {activeComponent === 4 && <Resepsi />}
      {activeComponent === 5 && <Quotes />}
      {activeComponent === 6 && <Penutup />}
      {activeComponent === 7 && <KamiBahagia />}
    </>
  );
};

export default ContentUndangan;
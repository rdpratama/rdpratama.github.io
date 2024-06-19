"use client";

import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";
import Biodata from "@/components/Biodata";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center md:item-start px-2 md:px-[15%] py-2 md:py-10">
      <div className="w-full flex flex-col md:flex-row gap-4 md:justify-center items-center md:items-start">
        <motion.div
          animate={{ opacity: [0, 1], scale: 1, y: [-100, 0] }}
          transition={{ duration: 1 }}
        >
          <Biodata />
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1], scale: 1, y: [100, 0] }}
          transition={{ duration: 1 }}
        >
          <MainContent />
        </motion.div>

        <div className="hidden md:block">
          <motion.div
            animate={{ opacity: [0, 1], scale: 1, x: [100, 0] }}
            transition={{ duration: 1 }}
          >
            <Navbar />
          </motion.div>
        </div>
      </div>
    </main>
  );
}

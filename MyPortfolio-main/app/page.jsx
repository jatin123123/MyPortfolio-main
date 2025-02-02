"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingDockDemo } from "./Floating";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";

import { AuroraBackground } from "@/components/ui/aurora-background";
import Navbar from "@/components/Navbar";
import { HeroParallaxDemo } from "@/components/skils";

function Home() {
  const word = [
    {
      text: "Full",
    },
    {
      text: "-",
      className: "text-gray-500 text-md",
    },
    {
      text: "Stack",
    },
    {
      text: "_",
      className: "text-gray-500",
    },
    {
      text: "AI",
    },
    {
      text: "_",
      className: "text-gray-500",
    },

    {
      text: "Engineer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const words = [
    "Mongoose",
    "Express Js",
    "React Js",
    "Node Js",
    "Next Js",
    "Tenserflow",
    "Pytorch",
  ];

  return (
    // Main Div
    <div className="w-full h-screen ">
      <div className="w-full fixed hidden md:flex z-50">
        <FloatingDockDemo />
      </div>
      <div
        className="w-full h-[60vh] md:h-screen flex items-center justify-center"
        id="main"
      >
        <Navbar />
        <BackgroundLines className="flex items-center mt-24 md:mt-12  justify-center  w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent  text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Jatin Jangid, <br /> <TypewriterEffectSmooth words={word} />
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg opacity-75 -mt-5 dark:text-neutral-400 text-center">
            I am a modern full-stack AI engineer, skilled in Next.js,
            Express.js, and AI-driven solutions. Passionate about innovation, I
            build scalable, efficient, and secure systems.
          </p>
          <h2 className="dark:opacity-60 opacity-60">
            Proficient in
            <FlipWords
              className={
                "text-blue-600 font-bold font-mono opacity-100 dark:text-blue-500"
              }
              words={words}
            />
          </h2>

          <div className="h-[5%] w-full md:hidden bg-black translate-y-[30%] pt-4 flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-7xl text-xl lg:text-9xl font-bold text-center text-white relative z-20">
              <img className="w-20 h-20" src="/hire.png" alt="" />
            </h1>
            <div className="w-[40rem] h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </BackgroundLines>
      </div>
      <div className="w-full bg-gray-100 h-screen">
        <HeroParallaxDemo />
      </div>
      {/* -------------------------------------------------------------------------------------------- */}
      {/* 2 divs For upper error */}
      <div className="w-ful h-screen"></div>
      <div className="w-ful h-screen"></div>
      {/* ---------------------------------------------------------------------------------------------- */}
      <div className="w-ful h-screen">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0 md:space-x-12 text-black dark:text-white">
              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-emerald-400 hover:border-blue-400 transition-all duration-300">
                <Image
                  src="/me.jpg"
                  alt="Jatin Jangid"
                  fill
                  priority
                  className="hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content Section */}
              <div className="text-center md:text-left max-w-2xl space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-zinc-700 dark:text-white">
                  Jatin Jangid
                </h1>

                <p className="text-xl md:text-2xl bg-gradient-to-r from-blue-600 font-mono to-emerald-400 bg-clip-text text-transparent">
                  Full Stack Developer
                </p>

                <p className="text-zinc-700 dark:text-white text-lg md:text-xl">
                  Building digital experiences with modern technologies. Let's
                  create something amazing together!
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:jangidjatin438@gmail.com"
                      className="text-zinc-700 dark:text-white hover:text-white transition-colors"
                    >
                      jangidjatin438@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <svg
                      className="w-6 h-6 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="tel:6396065410"
                      className="text-zinc-700 dark:text-white hover:text-white transition-colors"
                    >
                      +91 6396065410
                    </a>
                    
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                  <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                    <a
                      href="tel:6396065410"
                      className="text-zinc-700 dark:text-white hover:text-white transition-colors"
                    >
                      Meerut,UttarPradesh,India
                    </a>
                    
                  </div>
                </div>

                {/* Social Links */}
               
              </div>
            </div>
          </motion.div>
        </AuroraBackground>
      </div>
    </div>
  );
}

export default Home;

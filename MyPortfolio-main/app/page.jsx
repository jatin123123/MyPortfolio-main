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
import MobileFloatingButton from "@/components/MobileFloatingButton";
import LoadingScreen from "@/components/LoadingScreen";

function Home() {
  const word = [
    {
      text: "AI",
    },
    {
      text: "/",
      className: "text-md",
    },
    {
      text: "ML",
    },
    {
      text: "_",
      
    },
    {
      text: "Engineer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const words = [
    "Transformer",
    "GEN AI",
    "AGENTIC AI",
    "FAST API",
    "Next Js",
    "Tensorflow",
    "Pytorch",
    "LLM",
    "BERT",
    "Fine Tuning",
    "Hugging Face",
    "Langchain",
    "LANGGRAPH"
  ];

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* Main Container */}
      <div className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-300">
        {/* Floating Dock - Hidden on mobile for better UX */}
        <div className="w-full fixed hidden lg:flex z-50">
          <FloatingDockDemo />
        </div>
        
        {/* Hero Section */}
        <section
          className="w-full min-h-screen flex items-center justify-center relative bg-white dark:bg-black transition-colors duration-300"
          id="main"
        >
          <Navbar />
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center space-y-6 mt-16 md:mt-12">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-sans py-2 md:py-6 relative z-20 font-bold tracking-tight leading-tight">
                Jatin Jangid,
                <br className="sm:hidden" />
                <span className="block sm:inline center"> </span>
                <TypewriterEffectSmooth className="flex justify-center " words={word} />
              </h1>
              
              <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl opacity-80 dark:text-neutral-300 text-neutral-600 leading-relaxed px-4">
                I am an AI & Generative AI Engineer with a strong foundation in machine learning, deep learning, and transformer-based architectures, focused on building intelligent and scalable solutions that solve real-world problems.
              </p>
              
              <div className="pt-4">
                <h2 className="text-lg sm:text-xl dark:text-white text-black dark:opacity-70 opacity-70 font-medium">
                  Proficient in{" "}
                  <FlipWords
                    className="text-blue-600 font-bold font-mono opacity-100 dark:text-blue-400 text-xl sm:text-2xl"
                    words={words}
                  />
                </h2>
              </div>
            </div>
          </BackgroundLines>
        </section>
        
        {/* Skills/Projects Section */}
        <section id="projects" className="w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-black dark:to-black transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-black transition-colors duration-300">
            <HeroParallaxDemo />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full min-h-screen bg-white dark:bg-black transition-colors duration-300">
          <AuroraBackground>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex flex-col gap-4 items-center justify-center px-4 sm:px-6 lg:px-8"
            >
              <div className="min-h-screen w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center py-12 space-y-12 lg:space-y-0 lg:space-x-16 text-black dark:text-white">
                {/* Profile Image */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-emerald-400 hover:border-blue-400 transition-all duration-300 shadow-2xl hover:shadow-emerald-400/20">
                  <Image
                    src="/me.jpg"
                    alt="Jatin Jangid - AI/ML Engineer"
                    fill
                    priority
                    className="hover:scale-105 transition-transform duration-300"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                </div>

                {/* Content Section */}
                <div className="text-center lg:text-left max-w-2xl space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-700 dark:text-white leading-tight">
                      Jatin Jangid
                    </h1>

                    <p className="text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-blue-600 to-emerald-400 bg-clip-text text-transparent font-mono font-semibold">
                      AI/ML Engineer | Generative AI
                    </p>

                    <p className="text-zinc-600 dark:text-zinc-300 text-lg sm:text-xl leading-relaxed">
                      Building digital experiences with modern technologies. Let's
                      create something amazing together!
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-zinc-700 dark:text-white">Get in touch</h3>
                    
                    <div className="grid gap-4 sm:gap-6">
                      <div className="flex items-center justify-center lg:justify-start space-x-3 group">
                        <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                          <svg
                            className="w-5 h-5 text-blue-600 dark:text-blue-400"
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
                        </div>
                        <a
                          href="mailto:jatinjangid947@gmail.com"
                          className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base font-medium"
                        >
                          jatinjangid947@gmail.com
                        </a>
                      </div>

                      <div className="flex items-center justify-center lg:justify-start space-x-3 group">
                        <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                          <svg
                            className="w-5 h-5 text-green-600 dark:text-green-400"
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
                        </div>
                        <a
                          href="tel:+916396065410"
                          className="text-zinc-700 dark:text-zinc-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm sm:text-base font-medium"
                        >
                          +91 6396065410
                        </a>
                      </div>
                      
                      <div className="flex items-center justify-center lg:justify-start space-x-3 group">
                        <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                          <svg
                            className="w-5 h-5 text-purple-600 dark:text-purple-400"
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
                        </div>
                        <span className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base font-medium">
                          New Delhi, India
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AuroraBackground>
        </section>

        {/* Mobile Floating Action Button */}
        <MobileFloatingButton />
      </div>
    </>
  );
}

export default Home;

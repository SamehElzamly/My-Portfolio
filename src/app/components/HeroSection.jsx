"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 place-self-center text-center lg:text-left justify-self-start"
        >
          <h1 className="text-[#0a1128] mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1282a2] to-[#034078]">
              Hello, I&apos;m{" "}
            </span>
          </h1>
          <h2 className="text-[#034078] mb-4 whitespace-nowrap text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold">
            <TypeAnimation
              sequence={[
                "Sameh Elzamly",
                1000,
                "MERN-Stack Developer",
                1000,
                ".NET Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#034078]"
            />
          </h2>
          <p className="text-[#0a1128]/70 text-base sm:text-lg mb-6 lg:text-xl">
            Full-Stack Developer passionate about building modern, scalable, and high-performance web applications using React, .NET, Node.js, SQL Server, and MongoDB.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#1282a2] to-[#034078] hover:opacity-90 transition-opacity text-white"
            >
              Hire Me
            </Link>
            <Link
              target="_blank"
              href="/Sameh_Ashraf_FullStack.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#1282a2] to-[#034078] text-white mt-3"
            >
              <span className="block bg-[#fefcfb] text-[#0a1128] hover:bg-[#1282a2]/10 rounded-full px-5 py-2 transition-colors">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#1282a2]/10 border border-[#1282a2]/20 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
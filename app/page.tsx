// app/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../public/logo.png";
import image1 from "../public/image1.jpg";
import image2 from "../public/image2.jpg";

const roles = [
  "CTO",
  "ML Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Account Executive",
  "Webflow Developer",
  "Growth Marketer",
  "Growth Marketer"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-sans px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <Image src={logo} alt="Jumbo Consulting Logo" width={150} height={150} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-white">We Hire.</span>{" "}
            <span className="text-blue-400">You Build.</span>
          </motion.h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Quietly building bold teams for Seed to Series B startups.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:yogesh@jumbo.consulting"
              className="px-6 py-2 rounded-md bg-white text-blue-800 font-medium shadow hover:shadow-xl transition"
            >
              Email Us
            </a>
            <a
              href="#"
              className="px-6 py-2 rounded-md border border-white text-white hover:bg-white hover:text-blue-800 transition"
            >
              Book a Call
            </a>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={image1}
            alt="Jumbo Ghibli 1"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-8">Specialized In Hiring For Startups</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg cursor-pointer text-sm font-medium"
            >
              {role}
            </motion.div>
          ))}
        </div>
      </section>

      <div className="mt-20 flex justify-center">
        <Image
          src={image2}
          alt="Jumbo Ghibli 2"
          width={600}
          height={400}
          className="rounded-2xl shadow-xl"
        />
      </div>

      <footer className="mt-16 text-center text-sm text-gray-400">
        © 2025 Jumbo Consulting. All rights reserved.
      </footer>
    </main>
  );
}
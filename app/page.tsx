"use client";

import Image from "next/image";
import logo from "./public/logo.png";
import image1 from "./public/image1.jpg";
import image2 from "./public/image2.jpg";

const roles = [
  "CTO", "ML Engineer", "Frontend Developer", "Backend Developer",
  "SDR", "Account Executive", "Webflow Developer", "Growth Marketer"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Image src={logo} alt="Jumbo Consulting" width={120} height={120} />
        <h1 className="text-5xl font-bold mt-8">We Hire. You Build.</h1>
        <p className="mt-4 text-xl">Quietly building bold teams for Seed to Series B startups.</p>
        <div className="mt-6 flex gap-4">
          <a href="mailto:yogesh@jumbo.consulting" className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition">Email Us</a>
          <a href="https://calendly.com/yogeshsp/intro-call" className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition">Book a Call</a>
        </div>
        <h2 className="text-2xl font-semibold mt-12">Specialized In Hiring For Startups</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {roles.map((role, idx) => (
            <div key={idx} className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-xl text-center hover:scale-105 transition transform duration-300">
              {role}
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Image src={image1} alt="Ghibli Style 1" className="rounded-xl" />
        </div>
        <div className="mt-6">
          <Image src={image2} alt="Ghibli Style 2" className="rounded-xl" />
        </div>
        <footer className="mt-12 text-center text-sm">
          © 2025 Jumbo Consulting. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

"use client";
import Image from "next/image";
import logo from "../public/logo.png";
import image1 from "../public/image1.jpg";
import image2 from "../public/image2.jpg";

const roles = [
  "CTO", "ML Engineer", "Frontend Developer", "Backend Developer",
  "SDR", "Account Executive", "Webflow Developer", "Growth Marketer"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-100 px-4 py-8 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <Image src={logo} alt="Jumbo Consulting" width={100} height={100} />
        <h1 className="text-4xl font-bold mt-6 animate-pulse">We Hire. You Build.</h1>
        <p className="mt-2 text-xl">Quietly building bold teams for Seed to Series B startups.</p>
        <div className="flex gap-4 mt-4">
          <a href="mailto:yogesh@jumbo.consulting" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Email Us</a>
          <a href="https://calendly.com/yogesh-jumbo/30min" className="bg-white border px-4 py-2 rounded hover:bg-gray-100">Book a Call</a>
        </div>
        <h2 className="mt-10 text-2xl font-semibold">Specialized In Hiring For Startups</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {roles.map((role, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center p-4 rounded shadow hover:scale-105 transition-transform">
              {role}
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Image src={image1} alt="Ghibli style 1" className="rounded shadow-lg" />
        </div>
        <div className="mt-10">
          <Image src={image2} alt="Ghibli style 2" className="rounded shadow-lg" />
        </div>
        <footer className="mt-16 text-center text-sm text-gray-500">
          © 2025 Jumbo Consulting. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

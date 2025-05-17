"use client";

import Image from "next/image";

const roles = [
  "CTO",
  "ML Engineer",
  "Frontend Developer",
  "Backend Developer",
  "SDR",
  "Account Executive",
  "Webflow Developer",
  "Growth Marketer",
];

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 text-white px-4 relative">
      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>

      <div className="z-10 flex flex-col items-center justify-between h-full py-8">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Jumbo Logo"
          width={64}
          height={64}
          className="mb-4 animate-fade-in"
        />

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">We Hire. You Build.</h1>
          <p className="text-base md:text-lg text-gray-300 max-w-md mx-auto">
            Quietly building bold teams for Seed to Series B startups.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="mailto:support@jumbo.consulting"
            className="bg-white text-black px-5 py-2 rounded-md shadow hover:scale-105 transition font-medium"
          >
            Email Us
          </a>
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-2 rounded-md shadow hover:scale-105 transition font-medium"
          >
            Book a Call
          </a>
        </div>

        {/* Roles Section */}
        <div className="mt-10 text-xl font-semibold">Specialized In Hiring For Startups</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
          {roles.map((role) => (
            <div
              key={role}
              className="bg-gray-800 rounded-lg px-4 py-2 text-center border border-gray-700 shadow-md transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-blue-500/20 hover:border-blue-400 animate-fade-in hover:bg-gradient-to-r from-[#66CCFF]/20 to-transparent"
            >
              {role}
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/startup1.jpg"
              alt="Startup Workspace 1"
              width={360}
              height={280}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/startup2.jpg"
              alt="Startup Workspace 2"
              width={360}
              height={280}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-6">&copy; 2025 Jumbo Consulting. All rights reserved.</p>
      </div>
    </main>
  );
}

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
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>

      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Jumbo Logo"
        width={64}
        height={64}
        className="mb-6 animate-fade-in"
      />

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        We Hire. You Build.
      </h1>
      <p className="text-lg md:text-xl text-center max-w-xl mb-6 text-gray-300">
        Quietly building bold teams for Seed to Series B startups.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <a
          href="mailto:support@jumbo.consulting"
          className="bg-white text-black px-6 py-2 rounded-md shadow hover:scale-105 transition"
        >
          Email Us
        </a>
        <a
          href="https://cal.com"
          target="_blank"
          className="bg-white text-black px-6 py-2 rounded-md shadow hover:scale-105 transition"
        >
          Book a Call
        </a>
      </div>

      {/* Roles Grid */}
      <div className="text-xl font-semibold mb-6">Specialized In Hiring For Startups</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
        {roles.map((role) => (
          <div
            key={role}
            className="bg-gray-800 rounded-lg px-4 py-2 text-center text-white hover:bg-gray-700 shadow-md transition animate-fade-in"
          >
            {role}
          </div>
        ))}
      </div>

      {/* Images side by side */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/startup1.jpg"
            alt="Startup Workspace 1"
            width={400}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/startup2.jpg"
            alt="Startup Workspace 2"
            width={400}
            height={300}
            className="object-cover"
          />
        </div>
      </div>

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-10">&copy; 2025 Jumbo Consulting. All rights reserved.</p>
    </main>
  );
}
import Image from "next/image";
import { motion } from "framer-motion";

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
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center gap-8 text-center">
        <Image src="/logo.png" alt="Jumbo Consulting Logo" width={200} height={200} />
        <h1 className="text-4xl md:text-5xl font-bold">We Hire. You Build.</h1>
        <p className="text-lg md:text-xl max-w-xl">
          Quietly building bold teams for Seed to Series B startups.
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:yogesh@jumbo.consulting"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow"
          >
            Email Us
          </a>
          <a
            href="https://calendly.com/yogesh-jumbo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded shadow"
          >
            Book a Call
          </a>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mt-12">
          Specialized In Hiring For Startups
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {roles.map((role, index) => (
            <motion.div
              key={role}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-gray-300 text-sm md:text-base font-medium py-2 px-4 rounded-xl shadow hover:shadow-md"
            >
              {role}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 w-full items-center">
          <Image
            src="/image1.jpg"
            alt="Team Illustration 1"
            width={400}
            height={300}
            className="rounded-xl shadow"
          />
          <Image
            src="/image2.jpg"
            alt="Team Illustration 2"
            width={400}
            height={300}
            className="rounded-xl shadow"
          />
        </div>

        <footer className="mt-20 text-sm text-gray-500">
          © 2025 Jumbo Consulting. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const roles = [
  "CTO", "ML Engineer", "Backend Developer", "Frontend Developer",
  "DevOps Engineer", "UI/UX Designer", "Product Manager", "QA Engineer"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 md:px-24 py-8 text-gray-900">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <Image src="/logo.png" alt="Jumbo Consulting Logo" width={140} height={40} />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text Section */}
        <div className="max-w-xl space-y-6">
          <motion.h1 
            className="text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We Hire. <span className="text-blue-500">You Build.</span>
          </motion.h1>
          <p className="text-lg text-gray-600">
            Jumbo Consulting helps startups hire the right people to build faster, better, and bolder.
          </p>
          <div className="space-x-4">
            <a href="mailto:hello@jumboconsulting.com" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-3 rounded-xl shadow-md transition">
              Email Us
            </a>
            <a href="#" className="inline-block border border-blue-500 hover:bg-blue-50 text-blue-500 font-semibold px-5 py-3 rounded-xl transition">
              Book a Call
            </a>
          </div>
        </div>

        {/* Image 1 */}
        <div>
          <Image src="/image1.jpg" alt="Teamwork Illustration" width={400} height={300} className="rounded-xl shadow-xl" />
        </div>
      </div>

      {/* Roles Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">We hire for roles like:</h2>
        <div className="flex flex-wrap gap-4">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="px-5 py-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold shadow-md transition"
            >
              {role}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image 2 */}
      <div className="mt-20">
        <Image src="/image2.jpg" alt="Workflow Illustration" width={800} height={400} className="rounded-xl shadow-xl mx-auto" />
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        © 2025 Jumbo Consulting. All rights reserved.
      </footer>
    </main>
  );
}
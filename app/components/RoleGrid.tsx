"use client";

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

export default function RoleGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
      {roles.map((role, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1f2937] text-white px-4 py-2 rounded-xl text-center shadow-md border border-gray-700 hover:border-white transition"
        >
          <span className="font-semibold text-sm md:text-base">{role}</span>
        </motion.div>
      ))}
    </div>
  );
}

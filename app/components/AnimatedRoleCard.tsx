
'use client';
import { motion } from 'framer-motion';

const AnimatedRoleCard = ({ role }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-xl shadow-md m-2 cursor-pointer transition"
    >
      {role}
    </motion.div>
  );
};

export default AnimatedRoleCard;

'use client';

import { motion } from 'framer-motion';

export default function Consultation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full text-center space-y-8">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Free Business Consultation by TJS Solutions
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          At <span className="font-semibold text-blue-600">TJS Solutions</span>, we offer complimentary 30 minutes free consultations to help startups, entrepreneurs, and growing businesses unlock their digital potential. Whether you're building your first website, need a custom software solution, or are exploring automation and AI tools—we’re here to guide you with personalized strategies tailored to your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="/contact"
            className="inline-block bg-[#18AE69] hover:bg-white text-white hover:text-[#18AE69] px-8 py-3 rounded-full text-lg font-medium shadow-lg transition duration-300"
          >
            Book Your Free Consultation
          </a>
        </motion.div>
      </div>
    </div>
  );
}

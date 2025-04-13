'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Server,
  LayoutDashboard,
  PenTool,
  TrendingUp, // New icon for SEO
} from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description:
        'We build responsive and SEO-optimized websites that offer fast performance, scalability, and a seamless user experience tailored to your business needs.',
      icon: <Code className="w-10 h-10 text-indigo-600 mb-4" />,
    },
    {
      title: 'App Development',
      description:
        'From idea to launch, we craft mobile apps for iOS and Android using modern frameworks to ensure high performance, sleek design, and intuitive functionality.',
      icon: <Smartphone className="w-10 h-10 text-blue-600 mb-4" />,
    },
    {
      title: 'Software Solutions',
      description:
        'Whether it\'s a custom CRM, ERP, or internal tools, we create scalable and secure software solutions to optimize your business operations.',
      icon: <Server className="w-10 h-10 text-green-600 mb-4" />,
    },
    {
      title: 'UI/UX Designing',
      description:
        'We design user interfaces that are not just visually appealing but also intuitive, ensuring smooth user journeys and high engagement.',
      icon: <LayoutDashboard className="w-10 h-10 text-purple-600 mb-4" />,
    },
    {
      title: 'Logo Designing',
      description:
        'Our creative team delivers memorable and brand-aligned logos that establish identity and make a lasting impression.',
      icon: <PenTool className="w-10 h-10 text-pink-600 mb-4" />,
    },
    {
      title: 'SEO Optimization',
      description:
        'Boost your online presence with our proven SEO strategies that drive traffic, increase visibility, and improve search engine rankings.',
      icon: <TrendingUp className="w-10 h-10 text-yellow-600 mb-4" />,
    },
  ];

  return (
    <section className="pt-20 pb-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

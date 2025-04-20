import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-blue-950 text-white flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/mockup.jpg"
          alt="TJS Solutions Background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4 fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">
          Powering Ideas, <br className="hidden sm:inline" />
          Building the Future
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto drop-shadow-md">
          At <strong className="text-teal-300">TJS Solutions</strong>, we craft scalable software, websites, and mobile apps tailored to elevate your brand and streamline your business.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300"
        >
          Let’s Build Something Great
        </Link>
      </div>
    </section>
  );
}

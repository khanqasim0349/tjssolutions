import { Users, ThumbsUp, Clock } from "lucide-react";
export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 pt-24  bg-gray-100 text-gray-800">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 fade-in">
            Welcome to TJS Solutions
          </h1>
          <p className="text-sm sm:text-lg max-w-xl sm:max-w-3xl mx-auto fade-in mb-8">
            At TJS Solutions, we turn bold ideas into reliable digital
            experiences. Whether you're a startup or an enterprise, our
            passionate team is here to build custom software that not only
            works—but makes an impact. Let's bring your vision to life with
            innovation, precision, and care.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-800">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              In 2025, a spark of ambition lit the path for something
              extraordinary. That spark was{" "}
              <span className="font-semibold text-gray-900">
                Muhammad Qasim, the founder of TJS Solutions
              </span>
              . With just a laptop, a vision, and an unwavering passion for
              technology, I set out to build software that truly solves problems
              — not just products, but experiences that empower people.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              What began as a solo mission quickly evolved into a dynamic team
              of talented developers, designers, and problem-solvers who share
              the same drive. Together, we’ve turned ideas into impactful
              digital solutions that fuel growth for businesses across
              industries.
            </p>
            <p className="text-gray-700 text-lg">
              At TJS Solutions, we don't just code — we craft. We care deeply
              about every detail, every client, and every challenge. This is
              more than a company — it’s a journey. And it's only just getting
              started.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-gray-800">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Quality</h3>
              <p className="text-gray-600">
                We never compromise on excellence. Every line of code, every
                design element, and every interaction reflects our commitment to
                quality.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We believe great solutions emerge from great partnerships. We
                work closely with our clients as true extensions of their teams.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Innovation
              </h3>
              <p className="text-gray-600">
                Technology evolves rapidly. We stay ahead of the curve,
                constantly exploring new approaches to deliver cutting-edge
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our greatest strength is our people. Get to know the talented
            professionals who make TJS Solutions exceptional.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-gray-300">
                <img
                  src="Mypicture.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-800">
                Muhammad Qasim
              </h3>
              <p className="text-blue-600 mb-2">Founder & Lead Developer</p>
              <p className="text-gray-600 text-sm">
                Qasim, the founder of TJS Solutions, is a passionate full-stack
                developer and visionary leader. With over 2 years of hands-on
                experience, he specializes in building scalable, efficient, and
                innovative digital solutions. From code to strategy, Qasim
                drives the team's technical excellence and inspires a culture of
                continuous learning and growth.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-gray-300">
                <img
                  src="shehzad.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Shehzad Ahmad</h3>
              <p className="text-blue-600 mb-2">HR</p>
              <p className="text-gray-600 text-sm">
                Shehzad plays a key role in nurturing our team culture and
                driving growth by ensuring the right talent joins and thrives at
                TJS Solutions. His people-first approach keeps our workplace
                collaborative, motivated, and mission-focused.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-800">Adnan Khan</h3>
              <p className="text-blue-600 mb-2">Project Manager</p>
              <p className="text-gray-600 text-sm">
                Adnan ensures our projects stay on track, on budget, and exceed
                client expectations at every milestone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose TJS Solutions?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We’re not just developers—we’re your digital partners. With a focus
            on innovation, reliability, and results, we bring your ideas to life
            through custom software tailored to your goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">
                Our skilled developers, designers, and strategists collaborate
                to build top-tier solutions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 text-green-600 rounded-full">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client-Centered</h3>
              <p className="text-gray-600 text-sm">
                We listen first, then build. Your needs and goals shape every
                line of code.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-yellow-100 text-yellow-600 rounded-full">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p className="text-gray-600 text-sm">
                We value your time—our efficient workflow ensures timely,
                high-quality delivery.
              </p>
            </div>
          </div>

          <a href="/contact">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Start Your Project
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

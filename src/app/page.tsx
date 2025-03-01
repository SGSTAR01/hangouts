import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-[url('/hero-image.jpg')] bg-cover bg-center text-white h-[85vh] flex items-center justify-center text-center">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 px-6 max-w-3xl">
            <h1 className="text-5xl font-bold leading-tight">
              Find Your Perfect <span className="text-blue-400">Hangout Partner</span>
            </h1>
            <p className="mt-4 text-lg">
              Discover new places, connect with travelers, and plan unforgettable trips together.
            </p>
            <div className="mt-6 space-x-4">
              <Link href="/explore">
                <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
                  Explore Destinations
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-center">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {[
              { title: "Find a Travel Buddy", desc: "Connect with like-minded travelers near you." },
              { title: "Discover Destinations", desc: "Explore trending spots and hidden gems." },
              { title: "Plan & Travel", desc: "Form groups, set itineraries, and explore together." }
            ].map((item, index) => (
              <div key={index} className="w-72 bg-white shadow-md p-6 rounded-lg">
                <h3 className="text-xl text-blue-600 font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Destinations */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-center">
          <h2 className="text-4xl font-bold">Trending Destinations</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            {["Bali", "Sikkim", "Ladakh"].map((place, index) => (
              <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={`/assets/dest-${index + 1}.jpg`}
                  alt={place}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold">{place}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 text-center">
          <h2 className="text-4xl text-blue-500 font-bold">What Travelers Say</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {[
              { name: "Alex", review: "I found amazing friends and had unforgettable adventures!" },
              { name: "Sophia", review: "This app made my solo trip 10x better!" },
              { name: "Jake", review: "Loved exploring new places with my travel group!" }
            ].map((user, index) => (
              <div key={index} className="w-80 bg-white shadow-md p-6 rounded-lg text-gray-700">
                <p className="italic">"{user.review}"</p>
                <h4 className="mt-4 font-semibold text-blue-500">- {user.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
          <h2 className="text-4xl font-bold">Join the Hangout Community</h2>
          <p className="mt-4">Meet like-minded travelers, explore destinations, and create amazing experiences.</p>
          <Link href="/sign-up">
            <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
              Get Started
            </button>
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 text-center">
          <p>© 2025 Hangout.World | All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

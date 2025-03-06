"use client";

import Link from "next/link";
import Image from "next/image";
import { Particles } from "../components/Particles";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backgroundBlendMode: "overlay",
      }}
    >
      <Particles />
      {/* Content */}
      <div className="relative z-30">
        {/* Navbar */}
        <nav className="fixed top-4 left-4 right-4 z-50">
          <div
            className="relative rounded-[30px] px-6 py-4 max-w-[1440px] mx-auto overflow-hidden"
            style={{
              background: "rgba(245, 230, 211, 0.4)", // Light beige with transparency
            }}
          >
            {/* Navbar Background Image */}
            <div className="absolute inset-0 -z-10">
              <Image
                src="/nv.jpg"
                alt="Navbar Background"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 backdrop-blur-sm" />
            </div>

            {/* Navbar Content */}
            <div className="flex items-center justify-between relative z-10">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-semibold text-[#4A3728]">
                  TalkCast
                </span>
              </Link>
              <div className="flex items-center gap-8">
                <Link
                  href="#about"
                  className="text-[#4A3728] hover:text-[#2D6B66] transition-colors font-medium"
                >
                  About
                </Link>
                <Link
                  href="#episodes"
                  className="text-[#4A3728] hover:text-[#2D6B66] transition-colors font-medium"
                >
                  Episodes
                </Link>
                <Link
                  href="#pricing"
                  className="text-[#4A3728] hover:text-[#2D6B66] transition-colors font-medium"
                >
                  Pricing
                </Link>
                <Link
                  href="#contact"
                  className="text-[#4A3728] hover:text-[#2D6B66] transition-colors font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="pt-32 flex flex-col items-center">
          <div className="text-center max-w-[1200px] mx-auto px-6">
            <h1 className="text-[64px] font-bold leading-tight mb-6">
              <span className="text-[#2D6B66]">TalkCast</span>{" "}
              <span>Podcasts</span>
              <br />
              <span>That Speak to You</span>
            </h1>
            <p className="text-gray-600 text-xl mb-12 max-w-3xl mx-auto">
              Embark on a Journey of Discovery, Where You'll Unearth Podcasts
              That Not Only Captivate but Also Echo Your Unique Interests and
              Passions.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/sign-up"
                className="bg-[#FF5B2D] text-white px-8 py-3 rounded-md hover:bg-[#ff4315] transition-colors"
              >
                Start Listening
              </Link>
              <Link
                href="/sign-in"
                className="border border-gray-200 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="mt-16 relative w-full max-w-[900px] mx-auto px-6">
            <div className="flex flex-col gap-6 items-center">
              {/* First Card - Left Tilted */}
              <div className="flex justify-start -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div
                  className="group relative w-[280px] aspect-square rounded-[55px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                  style={{
                    boxShadow:
                      "26px 26px 51px #5a5a5a, -26px -26px 51px #ffffff",
                    background: "#e0e0e0",
                  }}
                >
                  <Image
                    src="/1.png"
                    alt="Podcast Host"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-lg font-semibold">Studio Setup</h3>
                      <p className="text-sm text-gray-200">
                        Professional Recording
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Card - Right Tilted */}
              <div className="flex justify-end -ml-20 rotate-6 hover:rotate-0 transition-transform duration-300">
                <div
                  className="group relative w-[280px] aspect-square rounded-[55px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                  style={{
                    boxShadow:
                      "26px 26px 51px #5a5a5a, -26px -26px 51px #ffffff",
                    background: "#e0e0e0",
                  }}
                >
                  <Image
                    src="/2.png"
                    alt="Podcast Host"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-lg font-semibold">TalkCast Studio</h3>
                      <p className="text-sm text-gray-200">Premium Quality</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Card - Left Tilted */}
              <div className="flex justify-start -mr-20 -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div
                  className="group relative w-[280px] aspect-square rounded-[55px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                  style={{
                    boxShadow:
                      "26px 26px 51px #5a5a5a, -26px -26px 51px #ffffff",
                    background: "#e0e0e0",
                  }}
                >
                  <Image
                    src="/3.png"
                    alt="Podcast Host"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-lg font-semibold">Live Sessions</h3>
                      <p className="text-sm text-gray-200">
                        Real-time Interaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-10 bg-white rounded-lg shadow-lg p-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Listen Now!</span>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <div className="h-1 w-24 bg-[#FF5B2D] rounded-full" />
                <span className="text-xs text-gray-500">0:50/1:34</span>
              </div>
            </div>
          </div>
        </div>

        {/* Podcast Categories Section */}
        <div className="py-32 bg-gradient-to-b from-transparent to-white/5">
          <div className="max-w-[1400px] mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-20">
              <span className="text-[#2D6B66]">Discover</span> Our Categories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {/* Card Base Style - Apply to all cards */}
              {[
                {
                  src: "/img.jpg",
                  alt: "Education",
                  tag: "Education",
                  tagColor: "#2D6B66",
                  title: "Higher Education Resistance to Change",
                  desc: "From curriculum overhauls to technological advancements.",
                },
                {
                  src: "/img2.jpg",
                  alt: "Business",
                  tag: "Business",
                  tagColor: "#FF5B2D",
                  title: "Exploring the Frontiers of Understanding",
                  desc: "Tune in and elevate your understanding at the crossroads of knowledge.",
                },
                {
                  src: "/img3.jpg",
                  alt: "Technology",
                  tag: "Technology",
                  tagColor: "#4A90E2",
                  title: "Future of AI & Innovation",
                  desc: "Exploring cutting-edge tech developments and their impact.",
                },
                {
                  src: "/img4.jpg",
                  alt: "Health",
                  tag: "Health",
                  tagColor: "#E24A84",
                  title: "Wellness & Mental Health",
                  desc: "Discussions on holistic health and mental well-being.",
                },
                {
                  src: "/img5.jpg",
                  alt: "Arts",
                  tag: "Arts",
                  tagColor: "#9B4AE2",
                  title: "Creative Expression",
                  desc: "Celebrating artistic diversity and creative journeys.",
                },
                {
                  src: "/img6.jpg",
                  alt: "Culture",
                  tag: "Culture",
                  tagColor: "#E2864A",
                  title: "Global Perspectives",
                  desc: "Exploring diverse cultures and shared human experiences.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[49px] transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02]"
                  style={{
                    background: "#e0e0e0",
                    boxShadow:
                      "28px 28px 57px #5a5a5a, -28px -28px 57px #ffffff",
                    width: "min(100%, 520px)",
                    margin: "0 auto",
                  }}
                >
                  <div className="relative h-[320px] p-2">
                    <div className="relative h-full w-full rounded-[42px] overflow-hidden">
                      <Image
                        src={card.src}
                        alt={card.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-70" />
                      <div className="absolute bottom-8 left-8 right-8 transform transition-all duration-700 group-hover:translate-y-[-8px]">
                        <span
                          className="px-4 py-2 text-white text-sm rounded-full mb-4 inline-block transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundColor: card.tagColor }}
                        >
                          {card.tag}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-3 transition-transform duration-500 group-hover:scale-105">
                          {card.title}
                        </h3>
                        <p className="text-gray-200 text-sm transform transition-all duration-700 opacity-80 group-hover:opacity-100">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

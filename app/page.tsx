"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Hardcoded video and image URLs
const VIDEO_URL =
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/WhatsApp%20Video%202025-07-15%20at%2012.00.34_0d4f3da7.mp4";
const MEDIA_URLS = [
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0028.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0029.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0030.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0031.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0032.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0033.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0034.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0035.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0003.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0004.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0005.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0006.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0036.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0037.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0038.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0039.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0041.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0040.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0042.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0043.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0007.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0008.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0009.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0010.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0044.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0045.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0046.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0047.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0048.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0049.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0011.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-15%20at%2011.08.59_b02cc1cf.jpg",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0012.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0013.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0015.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0016.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0017.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0018.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0019.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0020.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0021.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0022.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0023.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0024.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0025.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0026.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0027.mp4",
  "https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/VID-20250715-WA0028.mp4",
];

// Add Google Fonts import for Pacifico (cursive) in the <head> if not already present
// For now, use inline style for fontFamily

function NavBar() {
  return (
    <nav
      className="w-full py-4 px-8 flex items-center justify-between shadow-md z-50"
      style={{
        background: "linear-gradient(to bottom, #3b82f6 0%, #60a5fa 100%)",
      }}
    >
      <div className="flex items-center space-x-4">
        {/* Honey jar with dripping honey SVG/emoji */}
        <span
          style={{ fontSize: "2.2rem", display: "flex", alignItems: "center" }}
        >
          {/* You can replace this with a custom SVG if you have one */}
          <span role="img" aria-label="honey jar">
            🍯
          </span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "-0.5rem" }}
          >
            <ellipse cx="16" cy="24" rx="8" ry="4" fill="#fbbf24" />
            <rect x="8" y="8" width="16" height="16" rx="8" fill="#f59e42" />
            <ellipse cx="16" cy="8" rx="8" ry="4" fill="#fbbf24" />
            <path
              d="M16 24c0 2 1 4 2 4s2-2 2-4"
              stroke="#f59e42"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span
          style={{
            fontFamily: "Pacifico, cursive",
            fontSize: "2rem",
            color: "white",
            letterSpacing: "1px",
          }}
        >
          Oyin&apos;s Cake Day
        </span>
      </div>
      <div className="flex items-center">
        {/* Profile picture on the right */}
        <Image
          src="https://n0w8etiysbkfl9us.public.blob.vercel-storage.com/IMG-20250715-WA0037.jpg"
          alt="Profile"
          width={48}
          height={48}
          className="rounded-full border-2 border-white shadow-md object-cover"
        />
      </div>
    </nav>
  );
}

export default function Home() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isEnvelopeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isEnvelopeOpen]);

  const nextImage = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % MEDIA_URLS.length);
  };

  const prevImage = () => {
    setCurrentMediaIndex(
      (prev) => (prev - 1 + MEDIA_URLS.length) % MEDIA_URLS.length
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "linear-gradient(to bottom, #3b82f6 0%, #60a5fa 100%)",
        position: "relative",
      }}
    >
      <NavBar />
      {/* Section 1: Intro Message */}
      <section className="min-h-screen flex flex-col items-center justify-start w-full mt-4">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1
            style={{
              color: "#1e3a8a",
              fontWeight: "bold",
              fontSize: "8rem",
              textAlign: "center",
            }}
          >
            HAPPY BIRTHDAY,
          </h1>
          <h1
            style={{
              color: "#1e3a8a",
              fontWeight: "bold",
              fontSize: "5rem",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            my beautiful, baby girl
          </h1>
          <h3
            style={{
              color: "#1e3a8a",
              marginTop: "0",
              marginBottom: "1.5rem",
              fontWeight: "bold",
              fontSize: "1.25rem",
              textAlign: "center",
            }}
          >
            aka my sweet honey
          </h3>
          <div
            className="space-y-6 flex flex-col items-center justify-center"
            style={{ textAlign: "center" }}
          >
            <h3
              style={{
                color: "#1e3a8a",
                fontSize: "1.25rem",
                fontWeight: 500,
                marginTop: "1.5rem",
              }}
            >
              On this special day, I personally want to wish you a very special
              and wonderful birthday on the day the Lord has made
            </h3>
            <h3
              style={{ color: "#1e3a8a", fontSize: "1.25rem", fontWeight: 500 }}
            >
              I wish I could be there with you right so I created this to reach
              you in a very &quot;funbi&quot; way
            </h3>
            <h3
              style={{ color: "#1e3a8a", fontSize: "1.25rem", fontWeight: 500 }}
            >
              This site has a series of wonderful things I have curated together
              so sit back and enjoy it
            </h3>
            <h3
              style={{ color: "#1e3a8a", fontSize: "1.25rem", fontWeight: 500 }}
            >
              Hope you love it as much as I love you ...as big as the sun
            </h3>
          </div>
        </div>
      </section>
      {/* Section 2: Envelope/Letter */}
      <section className="min-h-screen flex flex-col items-center justify-center w-full relative">
        {/* Short message above the letter */}
        <div className="w-full flex flex-col items-center mb-4">
          <div className="text-blue-800 text-lg font-semibold text-center max-w-xl">
            {/* Write your short message here */}
            Hey love, you have come to the first part.{" "}
            <p>It&apos;s a letter from me to you; a well thought one.</p> And
            before you get ahead of yourself, I didnt use ChatGPT
            <p>Enjoy!!</p>
          </div>
        </div>
        <div className="relative mb-8 flex justify-center">
          <div
            className={`cursor-pointer transition-all duration-700 transform hover:scale-110 hover:-translate-y-2 ${
              isEnvelopeOpen ? "scale-110 -translate-y-2" : "animate-float"
            }`}
            onClick={() => setIsEnvelopeOpen(true)}
            style={{
              filter: "drop-shadow(0 10px 25px rgba(30, 64, 175, 0.3))",
            }}
          >
            <div className="relative">
              {/* Envelope Body */}
              <div className="w-[32rem] h-[22rem] bg-white rounded-3xl shadow-2xl relative overflow-hidden border-4 border-blue-300">
                {/* Envelope Flap */}
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 transition-all duration-1000 origin-top ${
                    isEnvelopeOpen ? "-rotate-180 scale-110" : ""
                  }`}
                  style={{
                    clipPath: "polygon(0 0, 50% 60%, 100% 0)",
                    transformOrigin: "50% 0%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* Click instruction */}
        {!isEnvelopeOpen && (
          <p className="text-white/80 text-base animate-pulse">
            Click the envelope to open your special message
          </p>
        )}
        {isEnvelopeOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(30, 64, 175, 0.85)",
              backdropFilter: "blur(4px)",
            }}
            onClick={(e) => {
              // Only close if the background itself is clicked, not the letter
              if (e.target === e.currentTarget) {
                setIsEnvelopeOpen(false);
              }
            }}
          >
            <div
              ref={modalContentRef}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-4 border-blue-300 flex flex-col items-center"
              style={{
                position: "relative",
                marginTop: "2rem",
                paddingTop: "2rem",
              }}
            >
              {/* Close button */}
              <div className="flex justify-end p-4 w-full">
                <button
                  onClick={() => {
                    setIsEnvelopeOpen(false);
                  }}
                  className="text-blue-400 hover:text-blue-700 text-3xl"
                >
                  ×
                </button>
              </div>

              {/* Envelope/Letter only */}
              <div className="flex justify-center w-full mb-8 mt-4">
                <div className="relative">
                  <div className="min-w-[18rem] max-w-[90vw] min-h-[8rem] max-h-[80vh] bg-white rounded-3xl shadow-2xl relative overflow-hidden border-4 border-blue-300 flex items-center justify-center p-6">
                    {/* Envelope Flap (open) */}
                    <div
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 origin-top -rotate-180 scale-110 transition-all duration-1000"
                      style={{
                        clipPath: "polygon(0 0, 50% 60%, 100% 0)",
                        transformOrigin: "50% 0%",
                      }}
                    ></div>
                    {/* Letter inside */}
                    <div
                      className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-y-auto"
                      style={{
                        pointerEvents: "auto",
                        maxHeight: "calc(80vh - 5rem)",
                        minWidth: "14rem",
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className="text-2xl text-blue-800 w-full break-words p-8 sm:p-10 md:p-12"
                        style={{ boxSizing: "border-box" }}
                      >
                        <div className="mt-4 text-center text-xl">
                          <p>Olami</p>
                          I wish you a very happy birthday, my love.
                          <br />
                          I have never felt so connected to someone as I have to
                          you.
                          <br />
                          Our union has been amazing and life changing for me.
                          You are the light I can hold when its dark and I love
                          how you make me feel special, loved and handsome
                          everyday. My only hope is to make just as happy as you
                          do me.
                          <br />
                          I hope this birthday brings you as much joy as you
                          have brought into my world.
                          <br />I love you more than words can say! 💙
                          <p style={{ textAlign: "right", marginTop: "2rem" }}>
                            from your buba
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Heart decoration (now blue) */}
                    <div className="absolute top-8 right-8 text-blue-400 text-4xl animate-pulse scale-125 transition-all duration-500">
                      💙
                    </div>
                    {/* Sparkle effects (now blue) */}
                    <div className="absolute -top-8 -left-8 text-blue-200 text-3xl animate-ping">
                      ✨
                    </div>
                    <div
                      className="absolute -bottom-8 -right-8 text-blue-200 text-3xl animate-ping"
                      style={{ animationDelay: "0.5s" }}
                    >
                      ✨
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* Section 3: Video */}
      <section className="min-h-screen flex flex-col items-center justify-center w-full relative">
        <div className="mb-8 w-full max-w-4xl mx-auto">
          <div className="w-full flex flex-col items-center mb-4">
            <div className="text-blue-800 text-lg font-semibold text-center max-w-xl">
              {/* Write your short message here */}
              Hope you enjoyed that beautiful letter written by moi
              <br />
              Next up is a little surprise for you.
              <br />
              You said you wanted to see me playing the sax so this one is for
              you
              <br />
              Enjoy !!
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
            A Special Video Message
          </h3>
          <div className="bg-blue-300 rounded-2xl p-8 text-center">
            <div
              className="relative flex justify-center items-center"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              <video
                controls
                className="rounded-2xl shadow-lg border-2 border-blue-200 bg-black"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "50vh",
                  display: "block",
                }}
                src={VIDEO_URL}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4: Slideshow */}
      <section className="min-h-screen flex flex-col items-center justify-center w-full pt-20">
        <div className="w-full max-w-4xl mx-auto">
          <div className="w-full flex flex-col items-center mb-4">
            <div className="text-blue-800 text-lg font-semibold text-center max-w-xl">
              That was nice wasnt it? I know you love the sax Now, to the best
              part.
              <br />
              This is where i show you all the wondeful memories we have created
              together
              <br />I know you might not approve of them but I love them cause
              you are in them
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
            Our Beautiful Memories
          </h3>
          <div className="bg-blue-300 rounded-2xl p-8">
            <div
              className="relative flex items-center justify-center w-full max-w-2xl mx-auto"
              style={{ minHeight: "60vh" }}
            >
              {(() => {
                const url = MEDIA_URLS[currentMediaIndex];
                const isVideo = /\.(mp4|webm|ogg)$/i.test(url);
                return isVideo ? (
                  <video
                    src={url}
                    controls
                    className="rounded-2xl shadow-lg border-2 border-blue-200 bg-black"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "80vh",
                      width: "auto",
                      height: "auto",
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={url}
                    alt={`Memory ${currentMediaIndex + 1}`}
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-lg border-2 border-blue-200"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "80vh",
                      width: "auto",
                      height: "auto",
                    }}
                    unoptimized // If your images are external and not in next.config.js domains
                  />
                );
              })()}
              {/* Navigation buttons */}
              {MEDIA_URLS.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-2xl transition-all z-10"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-2xl transition-all z-10"
                  >
                    →
                  </button>
                </>
              )}
            </div>
            {/* Dots and slide number */}
            {MEDIA_URLS.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {MEDIA_URLS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all ${
                      index === currentMediaIndex
                        ? "bg-blue-500"
                        : "bg-blue-200 hover:bg-blue-300"
                    }`}
                  />
                ))}
              </div>
            )}
            <p className="text-center text-blue-700 mt-1">
              {MEDIA_URLS.length > 1
                ? `Slide ${currentMediaIndex + 1} of ${MEDIA_URLS.length}`
                : "Your special memory"}
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex flex-col items-center justify-center w-full pt-20">
        <div
          className="relative w-full flex flex-col items-center mb-4"
          style={{ minHeight: 340 }}
        >
          {/* Blue heart border with text inside */}
          <div
            className="relative flex items-center justify-center w-full"
            style={{ minHeight: 340 }}
          >
            <svg
              width="380"
              height="320"
              viewBox="0 0 380 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
              style={{ maxWidth: "90vw", maxHeight: "90vw", display: "block" }}
            >
              <path
                d="M190 300
                  C 20 180, 20 60, 190 80
                  C 360 60, 360 180, 190 300
                  Z"
                fill="white"
                fillOpacity="0.8"
                stroke="#2563eb"
                strokeWidth="10"
                filter="drop-shadow(0 4px 16px #3b82f6)"
              />
            </svg>
            <div
              className="absolute inset-0 flex flex-col items-center justify-center px-8"
              style={{
                pointerEvents: "auto",
                zIndex: 2,
              }}
            >
              <div className="text-blue-800 text-lg font-semibold text-center max-w-lg">
                I hope you enjoyed this experience as much as I did!
                <br />I cant wait to see you in school, my love.
                <br />
                P.S. I have a gift for you but im not going to spoil it
                <br />
                You have to come to school to get it
                <br />
                Have a wonderful day my baby
                <br />
                See you very soon
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

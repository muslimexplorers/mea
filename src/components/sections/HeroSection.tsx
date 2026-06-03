"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const centerVideoRef = useRef<HTMLVideoElement>(null);
  const topLeftVideoRef = useRef<HTMLVideoElement>(null);
  const bottomLeftVideoRef = useRef<HTMLVideoElement>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      // Throttle to one update per frame to avoid re-rendering on every scroll event.
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrollY(y);
        if (centerVideoRef.current) {
          if (y > 100) centerVideoRef.current.play().catch(() => {});
          else centerVideoRef.current.pause();
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-play all side videos when component mounts
  useEffect(() => {
    const refs = [topLeftVideoRef, bottomLeftVideoRef, rightVideoRef];
    const playVideos = async () => {
      for (const ref of refs) {
        if (ref.current) {
          try {
            ref.current.muted = true;
            await ref.current.play();
          } catch {
            // Silently handle autoplay rejection
          }
        }
      }
    };
    const timer = setTimeout(playVideos, 100);
    return () => clearTimeout(timer);
  }, []);

  const maxScroll = 200;
  const videoWidth = Math.min(746 + scrollY * 2, 1146);

  return (
    <section className="bg-ink text-white">
      <div
        className="mx-auto w-full max-w-screen-2xl px-5 sm:px-10 lg:px-20 relative flex flex-col items-center justify-end pb-28 pt-24 sm:pb-12 md:pt-28 lg:min-h-[420px] lg:pb-14 lg:pt-32"
        ref={containerRef}
      >
        <div className="flex flex-col items-center gap-4 text-center lg:gap-6 z-20 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-400 text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Ponder. Learn. Glorify.
          </div>

          <h1 className="font-display text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] mb-2 text-center">
            Empowering Muslims through{" "}
            <span className="text-transparent bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text">
              Scientific &amp;
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text">
              Spiritual
            </span>{" "}
            Exploration
          </h1>

          <p className="my-2 text-base text-white/70 lg:text-lg max-w-xl">
            Discover harmony between Islamic scholarship and modern science through expert-led
            programs.
          </p>

          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get in Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-49 141 512 512"
              width="16"
              height="16"
              aria-hidden="true"
              className="w-[1em] h-[1em] fill-current text-lg transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M-24 422h401.645l-72.822 72.822c-9.763 9.763-9.763 25.592 0 35.355 9.763 9.764 25.593 9.762 35.355 0l115.5-115.5a25 25 0 0 0 0-35.355l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355 0-9.763 9.763-9.763 25.592 0 35.355l72.822 72.822H-24c-13.808 0-25 11.193-25 25S-37.808 422-24 422"></path>
            </svg>
          </Link>
        </div>
      </div>

      <div className="relative w-full">
        <div className="absolute -top-[100px] w-full overflow-hidden h-[calc(55vh+100px)] min-h-[500px]">
          <div className="mx-auto w-full max-w-screen-xl relative">
            <motion.div
              className="absolute top-[50px] left-0"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: -Math.min(scrollY * 1.5, 200), opacity: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            >
              <video
                ref={topLeftVideoRef}
                className="block rounded-[24px] w-32 h-16 sm:w-48 sm:h-24 lg:w-[304px] lg:h-[168px] object-cover"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/res/video-2.mp4" type="video/mp4" />
              </video>
            </motion.div>

            <motion.div
              className="absolute top-[218px] left-4"
              initial={{ x: -154, opacity: 0 }}
              animate={{ x: -Math.min(scrollY * 0.77, 153.846), opacity: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.15 }}
            >
              <video
                ref={bottomLeftVideoRef}
                className="-right-2.5 mt-20 rounded-[24px] w-20 h-20 sm:w-32 sm:h-32 lg:w-[154px] lg:h-[177px] object-cover"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/res/video-hero-3.mp4" type="video/mp4" />
              </video>
            </motion.div>

            <motion.div
              className="absolute"
              style={{ top: "40px", right: 0 }}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: Math.min(scrollY * 0.83, 111.111), opacity: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }}
            >
              <video
                ref={rightVideoRef}
                className="rounded-[24px] w-32 h-32 sm:w-48 sm:h-60 lg:w-[273px] lg:h-[335px] object-cover"
                style={{ transform: "translateY(40px)" }}
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/res/video-hero-2.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>

        <div className="relative z-20 flex justify-center pt-10 pb-20">
          <div
            ref={videoRef}
            className="transition-all duration-300 ease-in-out"
            style={{ width: `${videoWidth}px`, maxWidth: "90vw" }}
          >
            <div className="overflow-hidden rounded-[18px] shadow-2xl">
              <video
                ref={centerVideoRef}
                className="w-full h-auto object-cover rounded-[18px]"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/res/video-hero.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
          <div
            className="w-1 h-12 bg-gradient-to-b from-white to-transparent"
            style={{ opacity: 1 - scrollY / maxScroll }}
          />
          <div
            className="text-white text-sm font-medium mt-2"
            style={{ opacity: 1 - scrollY / maxScroll }}
          >
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Harsh Raj | Web Developer_";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col sm:flex-row items-center justify-between gap-10">
      {/* 🔹 Left Side: Text Section */}
      <div className="flex-1 space-y-6 sm:pt-6">
        <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-accent code-glow whitespace-nowrap">
          {"> "} {text}
          <span className="animate-blink">|</span>
        </h1>

        <p className="max-w-2xl text-slate-300 leading-relaxed">
          I'm a passionate <span className="text-accent font-semibold">Web Developer</span> and
          <span className="text-accent font-semibold"> DSA enthusiast</span> who loves building
          responsive, efficient, and visually engaging websites. I enjoy solving complex problems,
          optimizing code, and turning ideas into real-world digital experiences using
          <span className="text-accent font-semibold"> MERN Stack</span> and modern web technologies.
        </p>

        <div className="flex gap-3 flex-wrap">
          <a
            href="https://github.com/harshxraze"
            target="_blank"
            className="px-4 py-2 rounded bg-accent/10 border border-accent/40 text-accent hover:bg-accent/20 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-raj-346ba3202/"
            target="_blank"
            className="px-4 py-2 rounded border border-slate-700 hover:bg-slate-900 transition"
          >
            LinkedIn
          </a>
          <Link
            to="/projects"
            className="px-4 py-2 rounded border border-slate-700 hover:bg-slate-900 transition"
          >
            Projects
          </Link>
        </div>
      </div>

      {/* 🔹 Right Side: Profile Image (slightly lower) */}
      <div className="flex-1 flex justify-center sm:justify-end sm:pt-10">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-accent shadow-glow overflow-hidden hover:scale-105 transition-transform">
          <img
            src="/harsh.jpg"  // 📸 Place your image in /public/harsh.jpg
            alt="Harsh Raj"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

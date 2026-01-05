import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/70 mt-10 font-sans">
      <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="text-center sm:text-left">
          © {new Date().getFullYear()} Harsh Raj
        </span>

        <div className="flex gap-4 text-center sm:text-right">
          <a
            className="hover:text-accent transition"
            href="https://www.linkedin.com/in/harsh-raj-346ba3202/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-accent transition"
            href="https://leetcode.com/u/HarshxRaze/"
            target="_blank"
          >
            LeetCode
          </a>
          <a
            className="hover:text-accent transition"
            href="mailto:rajharshraj2.0@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

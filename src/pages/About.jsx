import React from "react";

export default function About() {
  return (
    <section className="space-y-10">
      <h2 className="font-display text-3xl font-bold text-accent border-b border-accent pb-1">
        About
      </h2>

      <p className="max-w-3xl text-slate-300 leading-relaxed">
        I’m a CSE undergraduate at
        <span className="text-white font-semibold"> Siddaganga Institute of Technology</span>, Tumkur,
        with a CGPA of 9.35. I love crafting efficient and elegant web apps, solving complex problems,
        and exploring futuristic, minimal UI designs.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 shadow-glow backdrop-blur-sm">
          <h3 className="font-display text-xl font-semibold text-accent mb-3">Education 🎓</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Siddaganga Institute of Technology — CGPA 9.35</li>
            <li>Senior Secondary (CBSE) — 88.8%</li>
            <li>Secondary (CBSE) — 96.7%</li>
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 shadow-glow backdrop-blur-sm">
          <h3 className="font-display text-xl font-semibold text-accent mb-3">Achievements 🏆</h3>
          <ul className="list-disc list-inside text-sm text-slate-300">
            <li>1st place at Robotics Workshop</li>
            <li>Completed C++ Course on CodeChef</li>
          </ul>
        </div>
      </div>

      <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 shadow-glow backdrop-blur-sm">
        <h3 className="font-display text-xl font-semibold text-accent mb-3">Skills ⚙️</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "C",
            "C++",
            "Python",
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Tailwind",
            "MongoDB",
            "Git",
            "GitHub",
            "sql",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs rounded bg-slate-800 border border-accent/20 text-accent animate-float"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-4 px-5 py-2 border border-accent text-accent rounded hover:bg-accent/20 transition"
        >
          ⬇ Download Resume
        </a>
      </div>
    </section>
  );
}

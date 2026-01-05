import React from "react";

const data = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio to showcase my projects, skills, and journey.",
      tech: [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "React Router DOM",
    "Web3Forms API",
    "CSS Keyframes",
    "JavaScript (ES6+)",
    "Michroma & Bitcount Fonts",
  ],
    github: "https://github.com/harshxraze",
  },
  {
    title: "Blogging Platform",
    desc: "A full-featured blogging platform with authentication, editor, and Appwrite backend.",
     tech: [
      "React.js",
      "Appwrite Backend",
      "TinyMCE Editor",
      "Tailwind CSS",
      "Vite",
      "JavaScript (ES6+)",
    ],
    github: "https://github.com/harshxraze",
  },
];

export default function Projects() {
  return (
    <section>
      <h2 className="font-display text-3xl font-bold text-accent border-b border-accent pb-1 mb-6">
        Projects
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {data.map((p) => (
          <div
            key={p.title}
            className="group p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-accent transition transform hover:scale-[1.03] hover:shadow-glow duration-300"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
              <a
                href={p.github}
                target="_blank"
                className="text-slate-300 hover:text-accent transition"
                title="View on GitHub"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05 .89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.02 1.63 1.02 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .26.18.57.69.47A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
                </svg>
              </a>
            </div>
            <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded bg-slate-800 text-accent border border-accent/20 animate-float"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

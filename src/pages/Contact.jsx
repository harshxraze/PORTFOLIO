import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const accessKey = "fb564344-6c70-4555-8958-736f7afa17aa"; // replace with Web3Forms key

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post("https://api.web3forms.com/submit", { access_key: accessKey, ...form });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-xl">
      <h2 className="font-display text-3xl font-bold text-accent border-b border-accent pb-1 mb-4">
        Contact
      </h2>

      <p className="text-slate-300 mb-4">
        Fill out the form below, and your message will be sent directly to my email.
      </p>

      <form
        onSubmit={onSubmit}
        className="space-y-3 bg-slate-900/50 p-5 rounded-xl border border-slate-800 shadow-glow backdrop-blur-sm"
      >
        <input
          className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 focus:border-accent outline-none"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={onChange}
          required
        />
        <input
          className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 focus:border-accent outline-none"
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={onChange}
          required
        />
        <textarea
          className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-800 focus:border-accent outline-none"
          name="message"
          rows="5"
          placeholder="Message"
          value={form.message}
          onChange={onChange}
          required
        ></textarea>
        <button
          disabled={status === "sending"}
          className="px-4 py-2 rounded bg-accent/10 border border-accent/40 text-accent hover:bg-accent/20 transition"
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {status === "sent" && (
          <div className="text-sm text-green-400">✅ Message sent successfully!</div>
        )}
        {status === "error" && (
          <div className="text-sm text-red-400">❌ Something went wrong. Try again later.</div>
        )}
      </form>
    </section>
  );
}

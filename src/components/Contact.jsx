import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.15),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(6,182,212,0.12),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Contact
        </motion.h2>
        <p className="mt-3 max-w-2xl text-white/70">Got a project in mind? Let’s build something futuristic together.</p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          <div className="md:col-span-1">
            <label className="block text-sm text-white/70 mb-2">Name</label>
            <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Your name" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm text-white/70 mb-2">Email</label>
            <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="you@example.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-white/70 mb-2">Message</label>
            <textarea rows={5} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Tell me about your idea..." />
          </div>
          <div className="md:col-span-2">
            <button className="inline-flex items-center gap-2 rounded-xl bg-fuchsia-500/90 hover:bg-fuchsia-400 px-5 py-3 transition-colors">
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

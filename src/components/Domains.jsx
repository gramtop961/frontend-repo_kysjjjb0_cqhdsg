import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, Film } from 'lucide-react';

const domains = [
  {
    key: 'cse',
    Icon: Cpu,
    title: 'Computer Science & Engineering',
    desc: 'AI/ML, systems, and full‑stack builds with attention to performance and developer experience.',
    gradient: 'from-fuchsia-500/30 via-violet-500/20 to-cyan-400/20',
  },
  {
    key: 'ece',
    Icon: CircuitBoard,
    title: 'Electronics & Communication',
    desc: 'Embedded systems, signal processing, and hardware‑software co-design for real‑world deployments.',
    gradient: 'from-emerald-400/30 via-teal-500/20 to-sky-400/20',
  },
  {
    key: 'video',
    Icon: Film,
    title: 'Video Editing & VFX',
    desc: 'Cinematic edits, motion graphics, and visual storytelling with crisp cuts and color science.',
    gradient: 'from-amber-400/30 via-rose-500/20 to-fuchsia-400/20',
  },
];

export default function Domains() {
  return (
    <section id="domains" className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_20%_30%,rgba(244,63,94,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(6,182,212,0.12),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Domains of Mastery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-3 max-w-2xl text-white/70"
        >
          From low-level circuits to high-level code and cinematic storytelling, explore a spectrum of craft.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {domains.map(({ key, Icon, title, desc, gradient }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl overflow-hidden"
            >
              <div className={`absolute -inset-1 bg-gradient-to-br ${gradient} blur-2xl opacity-60 pointer-events-none`} />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

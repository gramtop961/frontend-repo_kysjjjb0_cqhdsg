import { motion } from 'framer-motion';

const items = [
  {
    title: 'Neural Style Transfer Reel',
    tag: 'Video Editing',
    color: 'from-fuchsia-500/30 to-purple-500/30',
    img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'RISC-V FPGA Playground',
    tag: 'ECE',
    color: 'from-emerald-400/30 to-teal-500/30',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Realtime Ray Tracer',
    tag: 'CSE',
    color: 'from-cyan-400/30 to-sky-500/30',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-gradient-to-b from-black to-[#08080c] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Interactive Showcase
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((card, i) => (
            <motion.a
              key={card.title}
              href="#"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-60 blur-2xl pointer-events-none`} />
              <div className="relative aspect-[4/3]">
                <img src={card.img} alt={card.title} className="h-full w-full object-cover" />
              </div>
              <div className="relative p-5">
                <span className="text-xs uppercase tracking-wider text-white/70">{card.tag}</span>
                <h3 className="mt-1 text-lg font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">Open to explore details and process.</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

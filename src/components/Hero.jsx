import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          High-Tech Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="mt-4 max-w-2xl text-white/80"
        >
          A cybernetic showcase blending Computer Science, Electronics & Communication, and Video Editing into one immersive experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.1 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#domains" className="px-5 py-3 rounded-xl bg-fuchsia-500/90 hover:bg-fuchsia-400 transition-colors shadow-lg shadow-fuchsia-500/20">Explore Domains</a>
          <a href="#showcase" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10">See Showcase</a>
        </motion.div>
      </div>
    </section>
  );
}

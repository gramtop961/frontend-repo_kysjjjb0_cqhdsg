import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Domains from './components/Domains';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60 flex items-center justify-between">
        <p>© {new Date().getFullYear()} NeonVerse — All rights reserved.</p>
        <a href="#home" className="hover:text-white">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <Hero />
      <Domains />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
}

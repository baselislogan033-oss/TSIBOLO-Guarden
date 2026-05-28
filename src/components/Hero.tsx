import { motion } from "motion/react";
import { ArrowRight, Waves } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.ctfassets.net/b85ozb2q358o/32ECvHduaBoCUnpUXXSiHO/9f51d6f265bc127d834a0c02593481e7/AdobeStock_572735380.jpg"
          alt="TSIBOLO Garden Hero"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 backdrop-blur-md rounded-full border border-emerald-400/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-100">Excellence en Jardinage</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              TSIBOLO <span className="text-emerald-400 italic">GARDEN</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-100 font-medium mb-10 leading-relaxed max-w-xl">
              ZARIDAINA MADIO, <br className="hidden sm:block" />
              TONTOLO MAHASALAMA
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all flex items-center gap-3 shadow-xl active:scale-95"
              >
                Prendre rendez-vous
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#gallery"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl transition-all shadow-lg active:scale-95"
              >
                Voir nos réalisations
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full h-32 text-stone-50 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full fill-white"
          preserveAspectRatio="none"
        >
          <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

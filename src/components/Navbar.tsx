import { motion } from "motion/react";
import { Menu, Phone, X, Sprout } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Galerie", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
              {!imgError ? (
                <img 
                  src="https://res.cloudinary.com/dmqig9rqk/image/upload/v1779956689/1778313764046-removebg-preview_cxpytg.png" 
                  alt="TSIBOLO Garden Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                  <Sprout size={24} />
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-emerald-900 leading-none">TSIBOLO GARDEN</span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-emerald-600">ZARIDAINA MADIO</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/261336158112"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-full hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-sm"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-600 hover:text-emerald-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 flex flex-col gap-4 shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-stone-800 hover:text-emerald-600 px-4 py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0343948879"
            className="mx-4 px-5 py-3 bg-emerald-600 text-white text-center font-semibold rounded-xl"
          >
            Appeler Maintenant
          </a>
        </motion.div>
      )}
    </nav>
  );
}

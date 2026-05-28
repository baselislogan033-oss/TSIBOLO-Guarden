import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MessageCircle, Facebook, MapPin, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    
    // Préparation du message pour WhatsApp
    const messageText = `Bonjour TSIBOLO GARDEN,\n\nNouveau message du site web:\n- Nom: ${formData.name}\n- Téléphone: ${formData.phone}\n- Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/261336158112?text=${encodeURIComponent(messageText)}`;
    
    // Petite simulation de traitement avant redirection
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", message: "" });
      
      // Reset le message de succès après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      label: "Téléphone",
      value: "0343948879",
      href: "tel:0343948879",
      icon: <Phone size={24} className="text-emerald-600" />,
      color: "bg-emerald-50",
    },
    {
      label: "WhatsApp",
      value: "+261 33 61 581 12",
      href: "https://wa.me/261336158112",
      icon: <MessageCircle size={24} className="text-green-600" />,
      color: "bg-green-50",
    },
    {
      label: "Email",
      value: "manarakytsibolo@gmail.com",
      href: "mailto:manarakytsibolo@gmail.com",
      icon: <Mail size={24} className="text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      label: "Facebook",
      value: "TSIBOLO Garden",
      href: "https://www.facebook.com/search/top?q=tsibolo%20garden",
      icon: <Facebook size={24} className="text-indigo-600" />,
      color: "bg-indigo-50",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Contact Details */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-stone-900 mb-6 font-display">Contactez-nous</h2>
              <p className="text-stone-600 text-lg mb-12 max-w-lg leading-relaxed">
                Vous avez un projet de jardin en tête ? Discutons-en ensemble pour transformer votre vision en réalité.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.label === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="flex flex-col p-6 rounded-3xl border border-stone-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all group active:scale-[0.98]"
                  >
                    <div className={`w-12 h-12 ${info.color} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                      {info.icon}
                    </div>
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">{info.label}</span>
                    <span className="text-stone-900 font-semibold truncate">{info.value}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Card / Simple Form Visual */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-900 p-8 md:p-12 rounded-[40px] text-white relative h-full min-h-[500px]"
            >
              {/* Decorative circle */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-800/40 rounded-full blur-3xl opacity-50"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-8"
                    >
                      <div>
                        <h3 className="text-3xl font-bold mb-4 font-display">Message Rapide</h3>
                        <p className="text-emerald-200/80">Laissez-nous vos coordonnées et nous vous rappellerons.</p>
                      </div>

                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-emerald-300 tracking-wider">Nom Complet</label>
                            <input 
                              required
                              type="text" 
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              placeholder="Votre nom" 
                              className="w-full h-14 bg-emerald-800/50 border border-emerald-700/50 rounded-2xl px-6 focus:ring-2 focus:ring-emerald-400 outline-none transition-all placeholder:text-emerald-400/40" 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-emerald-300 tracking-wider">Numéro</label>
                            <input 
                              required
                              type="text" 
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              placeholder="034 XX XX XX" 
                              className="w-full h-14 bg-emerald-800/50 border border-emerald-700/50 rounded-2xl px-6 focus:ring-2 focus:ring-emerald-400 outline-none transition-all placeholder:text-emerald-400/40" 
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase text-emerald-300 tracking-wider">Message</label>
                          <textarea 
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            placeholder="Décrivez brièvement votre projet..." 
                            className="w-full h-32 bg-emerald-800/50 border border-emerald-700/50 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-400 outline-none transition-all placeholder:text-emerald-400/40 resize-none"
                          ></textarea>
                        </div>
                        <button 
                          disabled={isSubmitting}
                          className={`w-full py-5 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-950/20 active:scale-[0.98] ${
                            isSubmitting 
                              ? "bg-emerald-700 text-emerald-300 cursor-not-allowed" 
                              : "bg-white text-emerald-900 hover:bg-emerald-50"
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-emerald-300 border-t-emerald-900 rounded-full animate-spin"></div>
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              Envoyer le message
                              <Send size={18} />
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="h-full flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-20 h-20 bg-emerald-400/20 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 size={48} className="text-emerald-400" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4 font-display">Message Envoyé !</h3>
                      <p className="text-emerald-200/90 text-lg max-w-xs mx-auto mb-8">
                        Merci pour votre confiance. L'équipe de TSIBOLO GARDEN vous contactera très prochainement.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-emerald-300 font-bold hover:text-white transition-colors"
                      >
                        Envoyer un autre message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { TreePine, Spade, Scissors, Shovel } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Design de Jardin",
      description: "Nous créons des plans personnalisés pour transformer votre espace extérieur en un véritable havre de paix.",
      icon: <TreePine size={32} className="text-emerald-600" />,
    },
    {
      title: "Aménagement Paysager",
      description: "Installation de massifs, plantation d'arbres et création de sentiers pour un design harmonieux.",
      icon: <Spade size={32} className="text-emerald-600" />,
    },
    {
      title: "Entretien Complet",
      description: "Tonte de pelouse, taille de haies et désherbage pour garder votre jardin propre et sain toute l'année.",
      icon: <Scissors size={32} className="text-emerald-600" />,
    },
    {
      title: "Rénovation & Décoration",
      description: "Redonnez vie à un jardin négligé avec nos solutions de décoration et de réaménagement structurel.",
      icon: <Shovel size={32} className="text-emerald-600" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-stone-900 mb-4"
          >
            Nos Services Expertise
          </motion.h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Spécialistes de la création et de l'entretien d'espaces verts, nous mettons notre passion au service de votre environnement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

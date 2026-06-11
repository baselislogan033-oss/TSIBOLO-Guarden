import { motion } from "motion/react";

export function Gallery() {
  const images = [
    {
      url: "/src/assets/images/tsibolo_hero_garden_1779956004690.png",
      title: "Jardin Tropical Luxuriant",
      category: "Aménagement",
      size: "large",
    },
    {
      url: "/src/assets/images/tsibolo_garden_design_1779956019231.png",
      title: "Design de Pierres et Bois",
      category: "Design",
      size: "small",
    },
    {
      url: "/src/assets/images/jardiland_style_garden_hero_1779966620798.png",
      title: "Espace de Détente Extérieur",
      category: "Décoration",
      size: "small",
    },
    {
      url: "/src/assets/images/tsibolo_garden_maintenance_1779956040747.png",
      title: "Pelouse Impeccable",
      category: "Entretien",
      size: "small",
    },
    {
      url: "/src/assets/images/landscaped_garden_hero_1779966356980.png",
      title: "Sentier de Jardin Zen",
      category: "Aménagement",
      size: "small",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Galerie de Réalisations</h2>
            <p className="text-stone-600 max-w-xl text-lg">
              Découvrez nos transformations récentes et l'attention portée aux détails.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-emerald-700 font-bold px-4 py-2 bg-emerald-100 rounded-full text-sm">Tous les projets</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[32px] ${
                img.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-2 block">
                  {img.category}
                </span>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

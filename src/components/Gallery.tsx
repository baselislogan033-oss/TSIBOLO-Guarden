import { motion } from "motion/react";

export function Gallery() {
  const images = [
    {
      url: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/643373733_122162414072680403_7501658027295618276_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG26ZEwIU8cXq1IAAC4iGVa-BiRwdfw7sP4GJHB1_Duw-nILNhQ18a6qXbFWz2jZDc-QauJeo2uRWg3MqNi7UsB&_nc_ohc=UJ_zxqW2db0Q7kNvwFg-Lgb&_nc_oc=AdrR5PVdD8vvrlnwojFU-9l_WbpBzxZ2Ixg4eyO6j9MR6Pe0Fl2ov2dDM1_RZnal0rM&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=qngds23Kad51kSwF35lsMQ&_nc_ss=7b2a8&oh=00_Af7kQMMJLHxmGHmomb7iRPK0y8NmqrO73PRIbehNiviNhA&oe=6A1DD4B8",
      title: "Jardin Tropical Luxuriant",
      category: "Aménagement",
      size: "large",
    },
    {
      url: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/618355997_122159634614680403_8689877542478411232_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEg-rnkdJB-YbY6mmWhn4-6o-ZP8b8__aqj5k_xvz_9qpG4uHWVvWEw6LfAjpH62LJLHJZ4xkkLJgHp8X3M_mzt&_nc_ohc=-EuHjex1Lj4Q7kNvwEI5HO9&_nc_oc=AdrJzzC4zm4Dzxwop9LxDN-_sLhs-_J-I0jdZcZkbqfzJAUwTu_OMh-VTaCwUZoQexI&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=m9TKnHh9KlN0OlS5gwC1uQ&_nc_ss=7b2a8&oh=00_Af65-yvZT4RjIXoUOwLueMMxyLgb7fR5Eww8ykd2us-apA&oe=6A1DE505",
      title: "Design de Pierres et Bois",
      category: "Design",
      size: "small",
    },
    {
      url: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/679817695_2939624216233438_8788347931075146566_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFLEBe4uAExpGGJ0wrN-YXfa4TYrxBTstprhNivEFOy2oAWF_4SAbfpEjSHSpCU3ReQ9_T5m9qn0y-e5-EbYKx2&_nc_ohc=e7MWR8AuezAQ7kNvwHVDwfX&_nc_oc=AdqnSFTBNczOZJ0Msj2mbSS8plSMbL_StpKpsk2OHV3y6NEUGQpe69TcjBv-XWWghkc&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=ptJOtDfB0dTLSPHs1Jupog&_nc_ss=7b2a8&oh=00_Af6AYrhrmT9houQP_zlBjS5tCBbCmgH7w6prehZWMtRVCQ&oe=6A1DC68E",
      title: "Espace de Détente Extérieur",
      category: "Décoration",
      size: "small",
    },
    {
      url: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/710280839_1778752693088329_5022210048516287138_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGyQrgxsuw8pD--HF5Hp-Pzahib47FmhGNqGJvjsWaEY8ot9I0B768ZS4dcJ-um7a7f3iuCuBHHxzNhztXFB-zN&_nc_ohc=XFz3vRhxg8QQ7kNvwGDVgow&_nc_oc=Adq0VfyL8ZoTYluyCRP6gqytkU4KKNYwbKbJ3hH8FNrygcq5U6JZ-CaITtMTi8gU-jA&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Bvw3JJkvo_T6xk6rWs-0pg&_nc_ss=7b2a8&oh=00_Af7e1xXGuejuuF_6mZ7QMCJsxfr9yPqbsezzxLLxBr5AZw&oe=6A1DDE0F",
      title: "Pélouse Impeccable",
      category: "Entretien",
      size: "small",
    },
    {
      url: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/707775296_1778759163087682_5094946776115288253_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFfuUARhsuHI6hkQbDpuICEWYqfOJDdNt5Zip84kN023svs0qkcrOKr2c6nWIaT-c5TyB4eEjBFZ-VmdtGfP_dx&_nc_ohc=KALW9hwtmEoQ7kNvwHP5ru4&_nc_oc=AdqEJKpVaHhUTh8GXMgNQLNAGd2KDCLjEjT7mRnf9hK8hb_SKgs3R_3ET5-QnMUgK8I&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=fQ79GYwPUNwxu0ndHdDORw&_nc_ss=7b2a8&oh=00_Af4MY6Gf03TWWYJ4GZxMXY5jYsWom-ZIWiWwNoh78U0GIg&oe=6A1E0673",
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

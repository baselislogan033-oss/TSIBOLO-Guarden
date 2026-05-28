import { Mail, Phone, MessageCircle, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://res-console.cloudinary.com/dmqig9rqk/thumbnails/v1/image/upload/v1779956689/MTc3ODMxMzc2NDA0Ni1yZW1vdmViZy1wcmV2aWV3X2N4cHl0Zw==/preview" 
                  alt="TSIBOLO Garden Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">TSIBOLO GARDEN</span>
            </div>
            <p className="text-stone-400 text-lg leading-relaxed max-w-sm mb-8">
              Transformons ensemble votre espace extérieur en un lieu durable, propre et sain. 
            </p>
            <div className="flex gap-4">
               <span className="text-emerald-500 font-bold tracking-widest text-xs uppercase">ZARIDAINA MADIO, TONTOLO MAHASALAMA</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Réalisations</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Horaires</h4>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Lun - Ven</span>
                <span>08:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Samedi</span>
                <span>08:00 - 12:00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Dimanche</span>
                <span className="text-emerald-500 font-bold">Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-500 text-sm gap-4 text-center">
          <p>© {new Date().getFullYear()} TSIBOLO GARDEN. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-300">Mentions Légales</a>
            <a href="#" className="hover:text-stone-300">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

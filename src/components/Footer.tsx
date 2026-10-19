'use client';

import Link from 'next/link';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const f = t('footer');

  return (
    <footer className="bg-black border-t border-white/10 py-14 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                PAUTINA<span className="text-[#fb7b04]">ROOMS</span>
              </span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              {f.about}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/pautinarooms/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#fb7b04] hover:border-[#fb7b04] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/pautinarooms/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#fb7b04] hover:border-[#fb7b04] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quests Links */}
          <div>
            <h4 className="text-white font-extrabold mb-5 uppercase text-xs tracking-widest font-accent">
              {f.questsHeading}
            </h4>
            <ul className="text-gray-400 text-xs space-y-2.5">
              <li><Link href="/#quests" className="hover:text-[#fb7b04] transition-colors">{f.allRooms}</Link></li>
              <li><Link href="/#quests" className="hover:text-[#fb7b04] transition-colors">{f.kidsQuests}</Link></li>
              <li><Link href="/#quests" className="hover:text-[#fb7b04] transition-colors">{f.horrorActor}</Link></li>
              <li><Link href="/#quests" className="hover:text-[#fb7b04] transition-colors">{f.mysteryAdv}</Link></li>
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="text-white font-extrabold mb-5 uppercase text-xs tracking-widest font-accent">
              {f.infoHeading}
            </h4>
            <ul className="text-gray-400 text-xs space-y-2.5">
              <li><Link href="/birthday" className="hover:text-[#fb7b04] transition-colors">{f.birthdays}</Link></li>
              <li><Link href="/certificates" className="hover:text-[#fb7b04] transition-colors">{f.giftCerts}</Link></li>
              <li><Link href="/faq" className="hover:text-[#fb7b04] transition-colors">{f.faq}</Link></li>
              <li><Link href="/locations" className="hover:text-[#fb7b04] transition-colors">{f.locations}</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-extrabold mb-5 uppercase text-xs tracking-widest font-accent">
              {f.contactsHeading}
            </h4>
            <ul className="text-gray-400 text-xs space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#fb7b04] shrink-0 mt-0.5" />
                <span>{f.addressCenter}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#fb7b04] shrink-0 mt-0.5" />
                <span>{f.addressPrim}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#fb7b04] shrink-0" />
                <a href="tel:+380931701444" className="hover:text-white font-bold text-white">
                  +38 (093) 170-14-44
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>info@pautina-rooms.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-[11px]">
          <p>© {new Date().getFullYear()} PAUTINA Rooms (Odesa). {f.rights}</p>
          <p className="text-gray-600">Next.js & React</p>
        </div>
      </div>
    </footer>
  );
}

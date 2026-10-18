import type { Metadata } from 'next';
import { Inter, Roboto_Condensed } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });
const robotoCondensed = Roboto_Condensed({ 
  subsets: ['latin', 'cyrillic'], 
  weight: ['400', '700'],
  variable: '--font-roboto-condensed' 
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pautina-rooms.com'),
  title: {
    default: 'PAUTINA Rooms — Квест-кімнати в Одесі | Найкращі квести міста',
    template: '%s | PAUTINA Rooms',
  },
  description: 'Мережа антуражних квест-кімнат PAUTINA в Одесі. Понад 30 квестів: хоррор, містика, фентезі, детектив, дитячі свята та дні народження.',
  keywords: ['квест одеса', 'квест кімнати одеса', 'паутіна румс', 'pautina rooms', 'хоррор квест', 'день народження одеса', 'дитячий квест'],
  openGraph: {
    title: 'PAUTINA Rooms — Квест-кімнати в Одесі',
    description: 'Антуражні та атмосферні квести Одеси. Понад 30 сюжетів, живі актори, лаунж-зони для свят.',
    url: 'https://www.pautina-rooms.com',
    siteName: 'PAUTINA Rooms',
    locale: 'uk_UA',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EntertainmentBusiness',
  name: 'PAUTINA Rooms — Квест-кімнати Одеси',
  url: 'https://www.pautina-rooms.com',
  telephone: '+380931701444',
  priceRange: '900-1600 UAH',
  image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'вул. Торгова, 2',
      addressLocality: 'Одеса',
      postalCode: '65000',
      addressCountry: 'UA',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'пр-т Шевченка, 4д',
      addressLocality: 'Одеса',
      postalCode: '65044',
      addressCountry: 'UA',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '22:30',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '580',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="bg-brand-dark text-white scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${robotoCondensed.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

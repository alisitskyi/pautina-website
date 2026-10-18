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
  title: 'PAUTINA Rooms - Квест кімнати Одеси',
  description: 'Антуражні та атмосферні квест кімнати від PAUTINArooms! Більше 30 різноманітних квестів.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="bg-brand-dark text-white">
      <body className={`${inter.variable} ${robotoCondensed.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

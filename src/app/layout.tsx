import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderEffectsWrapper from "@/components/layout/HeaderEffectsWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Analyticatech - Conseil en Data, BI, IA et Automatisation",
  description:
    "Analyticatech est une société de conseil spécialisée en Data, Business Intelligence, Intelligence Artificielle et Automatisation. Découvrez nos services et savoir-faire.",
  keywords:
    "data, business intelligence, BI, intelligence artificielle, IA, automatisation, conseil, analyticatech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Boostez votre performance avec Analyticatech. Conseil et développement sur mesure en data, intelligence artificielle et automatisation intelligente."
        />
        <meta
          property="og:title"
          content="Analyticatech - Expert en Data, IA et Automatisation"
        />
        <meta
          property="og:description"
          content="Boostez votre performance avec Analyticatech. Conseil et développement sur mesure en data, intelligence artificielle et automatisation intelligente."
        />
        <meta property="og:image" content="/images/hero-image.jpg" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderEffectsWrapper />
        <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0A192F]/90 to-[#0077FF]/70 backdrop-blur-md shadow-lg w-full border-b-2 border-[#0077FF]/30">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-4 left-1/4 w-12 h-12 rounded-full bg-[#0077FF]/40 blur-xl"></div>
              <div className="absolute top-6 right-1/3 w-16 h-16 rounded-full bg-[#00FFAA]/30 blur-xl"></div>
              <div className="absolute bottom-2 left-1/3 w-10 h-10 rounded-full bg-[#FF00AA]/20 blur-xl"></div>
              <div className="absolute bottom-4 right-1/4 w-14 h-14 rounded-full bg-[#FFAA00]/30 blur-xl"></div>
            </div>
          </div>
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
            <a
              href="/"
              className="text-2xl font-bold text-white hover:text-[#0077FF] transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#0077FF] drop-shadow-[0_0_3px_rgba(0,119,255,0.5)]">
                Analyticatech
              </span>
            </a>
            <div className="hidden md:flex justify-center space-x-12 mx-auto absolute left-1/2 transform -translate-x-1/2">
              <a
                href="/"
                className="text-white hover:text-[#0077FF] transition-all duration-300 relative font-medium px-4 py-2 rounded-lg hover:bg-white/10"
              >
                Accueil
              </a>
              <a
                href="/services"
                className="text-white hover:text-[#0077FF] transition-all duration-300 relative font-medium px-4 py-2 rounded-lg hover:bg-white/10"
              >
                Services
              </a>
              <a
                href="/realisations"
                className="text-white hover:text-[#0077FF] transition-all duration-300 relative font-medium px-4 py-2 rounded-lg hover:bg-white/10"
              >
                Réalisations
              </a>
              <a
                href="/contact"
                className="text-white hover:text-[#0077FF] transition-all duration-300 relative font-medium px-4 py-2 rounded-lg hover:bg-white/10"
              >
                Contact
              </a>
            </div>
            <button className="md:hidden text-white hover:text-[#0077FF] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-[#0A192F] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Analyticatech</h3>
                <p className="text-[#F5F7FA]">
                  Conseil en Data, BI, IA et Automatisation
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/"
                      className="hover:text-[#FFFFFF] transition-colors text-[#0077FF]"
                    >
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="hover:text-[#FFFFFF] transition-colors text-[#0077FF]"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/realisations"
                      className="hover:text-[#FFFFFF] transition-colors text-[#0077FF]"
                    >
                      Réalisations
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-[#FFFFFF] transition-colors text-[#0077FF]"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Légal</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/mentions-legales"
                      className="hover:text-[#FFFFFF] transition-colors text-[#0077FF]"
                    >
                      Mentions légales
                    </a>
                  </li>
                  <li>
                    <a
                      href="/politique-confidentialite"
                      className="hover:text-[#FFFFFF] transition-colors text-[#0077FF]"
                    >
                      Politique de confidentialité
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cookies"
                      className="hover:text-[#FFFFFF] transition-colors text-[#0077FF]"
                    >
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-[#F5F7FA] mb-2">info@analyticatech.fr</p>
                <p className="text-[#F5F7FA]">+33 (0)1 23 45 67 89</p>
              </div>
            </div>

            {/* Section Newsletter */}
            <div className="border-t border-[#4A5568] mt-8 pt-8">
              <div className="max-w-xl mx-auto text-center">
                <h3 className="text-xl font-bold mb-4">Restez informé</h3>
                <p className="text-[#F5F7FA] mb-6">
                  Inscrivez-vous à notre newsletter pour recevoir nos dernières
                  actualités et conseils en data et IA.
                </p>
                <form
                  className="flex flex-col sm:flex-row gap-2 justify-center"
                  action="/api/newsletter/subscribe"
                  method="POST"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre adresse email"
                    required
                    className="px-4 py-2 rounded-md bg-[#1E293B] border border-[#4A5568] text-white focus:outline-none focus:ring-2 focus:ring-[#0077FF] w-full sm:w-auto"
                  />
                  <button
                    type="submit"
                    className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white font-medium py-2 px-6 rounded-md transition-colors"
                  >
                    S'inscrire
                  </button>
                </form>
              </div>
            </div>

            <div className="border-t border-[#4A5568] mt-8 pt-8 text-center text-[#F5F7FA]">
              <p>© 2024 Analyticatech. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

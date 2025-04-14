"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Home() {
  // Définition des refs pour les animations au scroll
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: expertisesRef, inView: expertisesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: realisationsRef, inView: realisationsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: automationRef, inView: automationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section
        className="relative h-screen flex items-center bg-[#0A192F] text-white overflow-hidden"
        ref={heroRef}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] to-[#0A192F]/80 z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Libérez la puissance de vos données avec Analyticatech
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#F5F7FA] animate-slide-up">
              Des solutions sur mesure en Business Intelligence, IA et
              Automatisation pour booster votre performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block text-center"
              >
                Parlez-nous de votre projet
              </a>
              <a
                href="/services"
                className="bg-transparent border border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block text-center"
              >
                Découvrir nos services
              </a>
            </div>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block w-2/5 h-3/4 z-10">
            <div className="relative w-full h-full">
              {/* Placeholder pour l'illustration IA/Data */}
              <div className="absolute inset-0 bg-[#0077FF]/10 rounded-l-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-32 w-32 text-[#0077FF]/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos expertises */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A192F]">
              Nos expertises
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Des solutions sur mesure pour répondre à vos besoins en matière de
              données et d'intelligence artificielle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expertise 1 - Business Intelligence */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#0077FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#0077FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0A192F]">
                Business Intelligence
              </h3>
              <p className="text-[#4A5568] mb-4">
                Transformez vos données en tableaux de bord interactifs pour une
                prise de décision éclairée et stratégique.
              </p>
            </div>

            {/* Expertise 2 - Intelligence Artificielle */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#0077FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#0077FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0A192F]">
                Intelligence Artificielle
              </h3>
              <p className="text-[#4A5568] mb-4">
                Exploitez la puissance de l'IA pour automatiser les tâches
                complexes et générer des prédictions précises.
              </p>
            </div>

            {/* Expertise 3 - Automatisation */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#0077FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#0077FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0A192F]">
                Automatisation
              </h3>
              <p className="text-[#4A5568] mb-4">
                Optimisez vos processus métier grâce à l'automatisation
                intelligente pour gagner en efficacité et productivité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A192F]">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Expertise, accompagnement humain, résultats concrets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Bénéfice 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#0077FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#0077FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0A192F]">
                Gain de temps
              </h3>
              <p className="text-[#4A5568]">
                Automatisez vos processus et libérez du temps pour vous
                concentrer sur votre cœur de métier.
              </p>
            </div>

            {/* Bénéfice 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#0077FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#0077FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0A192F]">
                Performance
              </h3>
              <p className="text-[#4A5568]">
                Optimisez vos opérations et améliorez vos résultats grâce à des
                solutions data-driven.
              </p>
            </div>

            {/* Bénéfice 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#0077FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#0077FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0A192F]">
                Personnalisation
              </h3>
              <p className="text-[#4A5568]">
                Des solutions sur mesure adaptées à vos besoins spécifiques et à
                votre secteur d'activité.
              </p>
            </div>

            {/* Bénéfice 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-[#0077FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#0077FF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0A192F]">
                Automatisation IA
              </h3>
              <p className="text-[#4A5568]">
                Exploitez le potentiel de l'intelligence artificielle pour
                automatiser les tâches complexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos réalisations */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A192F]">
              Nos réalisations
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Découvrez comment nous avons aidé nos clients à transformer leurs
              données en avantage concurrentiel
            </p>
          </div>

          {/* Carousel de projets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Projet 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video relative bg-[#0A192F]/5">
                {/* Placeholder pour une image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[#0A192F] text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mx-auto text-[#0077FF]/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#0A192F]">
                  Banque Nationale
                </h3>
                <p className="text-[#4A5568] mb-4">
                  Optimisation des tableaux de bord financiers et réduction de
                  70% du temps de génération des rapports.
                </p>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video relative bg-[#0A192F]/5">
                {/* Placeholder pour une image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[#0A192F] text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mx-auto text-[#0077FF]/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#0A192F]">
                  Retail Leader
                </h3>
                <p className="text-[#4A5568] mb-4">
                  Système de recommandation IA qui a augmenté les ventes
                  croisées de 35% et amélioré l'expérience client.
                </p>
              </div>
            </div>

            {/* Projet 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video relative bg-[#0A192F]/5">
                {/* Placeholder pour une image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[#0A192F] text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mx-auto text-[#0077FF]/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#0A192F]">
                  Industrie Manufacturing
                </h3>
                <p className="text-[#4A5568] mb-4">
                  Automatisation des processus de production qui a réduit les
                  coûts opérationnels de 25% en 6 mois.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/realisations"
              className="bg-[#0A192F] hover:bg-[#0A192F]/90 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block"
            >
              Voir toutes nos réalisations
            </a>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A192F]">
              Ce que nos clients disent
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Découvrez les retours d'expérience de nos clients satisfaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Témoignage 1 */}
            <div className="bg-[#F5F7FA] p-8 rounded-lg relative">
              <svg
                className="absolute top-4 left-4 h-8 w-8 text-[#0077FF]/30"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <div className="pt-6">
                <p className="text-[#4A5568] italic mb-6">
                  "Analyticatech a transformé notre approche data. Leurs
                  tableaux de bord nous permettent désormais de prendre des
                  décisions éclairées en temps réel."
                </p>
                <div className="flex items-center">
                  <div className="bg-[#0077FF]/10 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#0077FF] font-bold">JD</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#0A192F]">Jean Dupont</p>
                    <p className="text-sm text-[#4A5568]">
                      Directeur Financier, Entreprise A
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-[#F5F7FA] p-8 rounded-lg relative">
              <svg
                className="absolute top-4 left-4 h-8 w-8 text-[#0077FF]/30"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <div className="pt-6">
                <p className="text-[#4A5568] italic mb-6">
                  "L'automatisation mise en place par Analyticatech nous a
                  permis de réduire nos coûts opérationnels de 30% tout en
                  améliorant la qualité de nos services."
                </p>
                <div className="flex items-center">
                  <div className="bg-[#0077FF]/10 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#0077FF] font-bold">ML</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#0A192F]">Marie Leroy</p>
                    <p className="text-sm text-[#4A5568]">CEO, Entreprise B</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Automatisez vos process */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0A192F]">
                Automatisez vos process
              </h2>
              <p className="text-lg text-[#4A5568] mb-6">
                Libérez le potentiel de votre entreprise grâce à
                l'automatisation intelligente de vos processus métier.
              </p>
              <p className="text-lg text-[#4A5568] mb-8">
                Un reporting automatisé chaque semaine. Une IA qui prépare votre
                analyse financière. Moins d'efforts, plus d'impact.
              </p>
              <a
                href="/services#automatisation"
                className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block"
              >
                Découvrir nos solutions
              </a>
            </div>
            <div className="relative">
              {/* Visuel workflow automatisé */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-[#0A192F]/5 aspect-video rounded-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-[#0077FF]/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2 text-[#0A192F]">
                    Workflow automatisé
                  </h3>
                  <p className="text-[#4A5568]">
                    Visualisez comment l'automatisation peut transformer vos
                    processus métier et améliorer votre productivité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section prise de rendez-vous */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A192F]">
              Prêt à transformer votre approche data ?
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Prenez rendez-vous avec nos experts pour discuter de vos projets
              et découvrir comment nous pouvons vous aider.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#F5F7FA] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#0A192F]">
                Parlez à notre assistant IA
              </h3>
              <p className="text-[#4A5568] mb-6">
                Notre assistant IA est disponible 24/7 pour répondre à vos
                questions et vous orienter vers les solutions adaptées à vos
                besoins.
              </p>
              <div className="bg-white p-4 rounded-md border border-gray-200 mb-6">
                <div className="flex items-start mb-4">
                  <div className="bg-[#0077FF]/10 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#0077FF] font-bold text-sm">AI</span>
                  </div>
                  <div className="bg-[#F5F7FA] p-3 rounded-lg">
                    <p className="text-sm text-[#4A5568]">
                      Bonjour ! Comment puis-je vous aider aujourd'hui ?
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Posez votre question ici..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#0077FF] focus:border-transparent"
                    disabled
                  />
                  <button className="bg-[#0077FF] text-white px-4 py-2 rounded-r-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-sm text-[#4A5568] italic">
                * Fonctionnalité en cours de développement
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#0A192F]">
                Réservez un rendez-vous
              </h3>
              <p className="text-[#4A5568] mb-6">
                Planifiez une consultation gratuite avec l'un de nos experts
                pour discuter de vos besoins spécifiques.
              </p>
              <a
                href="/contact"
                className="bg-[#0A192F] hover:bg-[#0A192F]/90 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block w-full text-center"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section préparation future intégration */}
      <div
        id="chatbot-container"
        className="hidden fixed bottom-4 right-4 z-50"
      >
        {/* Emplacement pour le futur chatbot IA */}
      </div>
      <div id="api-integration" className="hidden">
        {/* Emplacement pour la future API interne */}
      </div>
      <div id="notion-make-integration" className="hidden">
        {/* Emplacement pour les futures connexions à Notion et Make */}
      </div>
    </div>
  );
}

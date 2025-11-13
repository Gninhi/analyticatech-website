import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Réalisations - Analyticatech | Projets en Data, BI, IA et Automatisation",
  description:
    "Découvrez nos réalisations et projets en Data Science, Business Intelligence, Intelligence Artificielle et Automatisation des processus.",
  keywords:
    "projets data, business intelligence, BI, intelligence artificielle, IA, automatisation, conseil, analyticatech, réalisations, cas clients",
};

export default function Realisations() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A192F] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Réalisations
            </h1>
            <p className="text-xl text-[#F5F7FA]">
              Découvrez comment nous avons aidé nos clients à transformer leurs
              données en avantage concurrentiel
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#0A192F]">
              Des projets sur mesure qui transforment les entreprises
            </h2>
            <p className="text-lg text-[#4A5568]">
              Bienvenue dans notre galerie de réalisations, où nous présentons
              une sélection de projets réussis en Data, Business Intelligence et
              Automatisation. Chaque projet est unique et adapté aux besoins
              spécifiques de nos clients, reflétant notre engagement à fournir
              des solutions personnalisées et efficaces.
            </p>
            <p className="text-lg text-[#4A5568] mt-4">
              Découvrez comment nous avons aidé des entreprises de différents
              secteurs à transformer leurs données en avantage concurrentiel, à
              optimiser leurs processus décisionnels et à automatiser leurs
              tâches répétitives pour gagner en efficacité et en précision.
            </p>
            <p className="text-lg text-[#4A5568] mt-4 font-medium">
              Explorez nos solutions innovantes et leurs résultats mesurables
              qui ont fait la différence pour nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Études de cas */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Étude de cas 1 - Business Intelligence dans la distribution */}
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
                    <p className="mt-4 font-medium">Secteur Distribution</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-[#0077FF]/10 text-[#0077FF] text-sm font-medium px-3 py-1 rounded-full">
                    Business Intelligence
                  </span>
                  <span className="bg-[#0A192F]/10 text-[#0A192F] text-sm font-medium px-3 py-1 rounded-full ml-2">
                    Power BI
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0A192F]">
                  Transformation de la visibilité des ventes et des stocks
                </h3>
                <p className="text-[#4A5568] mb-4">
                  Notre client, une chaîne de distribution nationale, faisait
                  face à un manque crucial de visibilité sur ses performances de
                  ventes et sa gestion des stocks. Les rapports manuels
                  prenaient des jours à être générés, créant des délais dans la
                  prise de décision et des opportunités manquées.
                </p>
                <div className="mb-4">
                  <h4 className="font-bold text-[#0A192F] mb-2">
                    Notre solution :
                  </h4>
                  <p className="text-[#4A5568] mb-3">
                    Nous avons conçu une solution BI personnalisée avec Power
                    BI, comprenant des tableaux de bord interactifs pour le
                    suivi des ventes et des stocks en temps réel. L'intégration
                    d'analyses prédictives a permis d'anticiper les tendances et
                    d'optimiser les approvisionnements.
                  </p>
                  <h4 className="font-bold text-[#0A192F] mb-2">Résultats :</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#0077FF] mr-2 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#4A5568]">
                        Réduction de 85% du temps de génération des rapports
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#0077FF] mr-2 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#4A5568]">
                        Diminution de 30% des ruptures de stock
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#0077FF] mr-2 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#4A5568]">
                        Augmentation de 15% de la rentabilité globale
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="text-[#4A5568] text-sm mb-4 bg-gray-50 p-3 rounded-md">
                  <strong>Technologies utilisées :</strong> Power BI, Azure, SQL
                  Server, n8n pour l'automatisation
                </div>
                <a
                  href="#"
                  className="text-[#0077FF] hover:underline font-medium inline-flex items-center"
                >
                  Voir l'étude de cas complète
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Étude de cas 2 - Automatisation dans le secteur financier */}
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
                    <p className="mt-4 font-medium">Secteur Financier</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-[#0077FF]/10 text-[#0077FF] text-sm font-medium px-3 py-1 rounded-full">
                    Automatisation
                  </span>
                  <span className="bg-[#0A192F]/10 text-[#0A192F] text-sm font-medium px-3 py-1 rounded-full ml-2">
                    Intégration API
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0A192F]">
                  Automatisation des processus d'analyse financière
                </h3>
                <p className="text-[#4A5568] mb-4">
                  Notre client, une institution financière, était confronté à
                  des processus manuels et chronophages pour l'extraction et
                  l'analyse des données financières provenant de multiples
                  sources. Ces tâches répétitives mobilisaient des ressources
                  précieuses et augmentaient les risques d'erreurs humaines.
                </p>
                <div className="mb-4">
                  <h4 className="font-bold text-[#0A192F] mb-2">
                    Notre solution :
                  </h4>
                  <p className="text-[#4A5568] mb-3">
                    Nous avons implémenté une solution d'automatisation complète
                    avec n8n pour collecter, transformer et analyser les données
                    financières. Cette solution a permis d'intégrer des flux de
                    données de diverses sources, de les traiter selon des règles
                    métier précises et de les présenter dans des tableaux de
                    bord analytiques.
                  </p>
                  <h4 className="font-bold text-[#0A192F] mb-2">Résultats :</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#0077FF] mr-2 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#4A5568]">
                        Réduction de 90% du temps consacré à la collecte de
                        données
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#0077FF] mr-2 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#4A5568]">
                        Amélioration de la précision des données de 40%
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#0077FF] mr-2 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#4A5568]">
                        Capacité à prendre des décisions 3 fois plus rapidement
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="text-[#4A5568] text-sm mb-4 bg-gray-50 p-3 rounded-md">
                  <strong>Technologies utilisées :</strong> n8n, API REST, Power
                  BI, Python pour les analyses avancées
                </div>
                <a
                  href="#"
                  className="text-[#0077FF] hover:underline font-medium inline-flex items-center"
                >
                  Voir l'étude de cas complète
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Témoignage client - Secteur Santé */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mt-16 border-l-4 border-[#0077FF]">
            <div className="flex items-center mb-6">
              <div className="bg-[#0077FF]/10 p-4 rounded-full mr-4">
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
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A192F]">
                  Dr. Sophie Martin
                </h3>
                <p className="text-[#4A5568]">
                  Directrice des Systèmes d'Information, Centre Hospitalier
                  Régional
                </p>
              </div>
            </div>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#0077FF]/10 absolute -top-6 -left-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-[#4A5568] italic mb-6">
                "Grâce à la solution de Business Intelligence développée par
                Analyticatech, notre établissement a considérablement amélioré
                la gestion des flux de patients et l'allocation des ressources.
                Les tableaux de bord interactifs permettent à nos médecins et
                administrateurs de prendre des décisions basées sur des données
                précises et en temps réel. La visualisation claire des
                indicateurs clés a transformé notre approche de la planification
                des soins et contribué à améliorer la qualité de service pour
                nos patients."
              </p>
              <p className="text-[#4A5568] font-medium">
                Projet : Implémentation d'une solution complète de Data
                Analytics pour optimiser la gestion hospitalière et améliorer la
                prise de décision clinique.
              </p>
            </div>
          </div>

          {/* Section SEO optimisée */}
          <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-bold mb-6 text-[#0A192F]">
              Solutions personnalisées en Data et Business Intelligence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#0A192F]">
                  Expertise en Business Intelligence
                </h3>
                <p className="text-[#4A5568] mb-4">
                  Notre équipe d'experts en Business Intelligence conçoit des
                  solutions sur mesure qui transforment vos données brutes en
                  insights stratégiques. Nous créons des tableaux de bord
                  interactifs qui vous permettent de visualiser clairement vos
                  performances et d'identifier rapidement les opportunités
                  d'amélioration et de croissance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#0077FF] mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#4A5568]">
                      Projets BI sur mesure adaptés à votre secteur d'activité
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#0077FF] mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#4A5568]">
                      Intégration de données multi-sources pour une vision à
                      360°
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#0A192F]">
                  Solutions d'automatisation innovantes
                </h3>
                <p className="text-[#4A5568] mb-4">
                  Nos solutions d'automatisation des processus éliminent les
                  tâches répétitives et chronophages, permettant à vos équipes
                  de se concentrer sur des activités à plus forte valeur
                  ajoutée. Nous concevons des workflows intelligents qui
                  s'adaptent à vos besoins spécifiques et évoluent avec votre
                  entreprise.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#0077FF] mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#4A5568]">
                      Automatisation intelligente des flux de travail
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#0077FF] mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[#4A5568]">
                      Intégration transparente avec vos systèmes existants
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A192F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à transformer votre approche data ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#F5F7FA]">
            Contactez-nous dès aujourd'hui pour discuter de vos projets et
            découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block"
            >
              Nous contacter
            </a>
            <a
              href="/services"
              className="bg-transparent border border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

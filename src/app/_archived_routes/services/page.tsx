import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nos Services - Analyticatech | Business Intelligence, IA, Automatisation",
  description:
    "Découvrez les services d'Analyticatech : Business Intelligence, Intelligence Artificielle, Automatisation intelligente. Des solutions sur mesure pour votre croissance.",
  keywords:
    "services data, business intelligence, BI, intelligence artificielle, IA, automatisation intelligente, intégrations API, conseil, analyticatech, data analytics, visualisation de données, machine learning, deep learning, RPA, workflow automation, data science, big data, tableaux de bord, KPI, prédiction, optimisation",
};

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A192F] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Nos services en data, IA et automatisation intelligente
            </h1>
            <p className="text-xl text-[#F5F7FA] animate-slide-up">
              Des solutions innovantes et sur mesure pour transformer vos
              données en avantage concurrentiel
            </p>
          </div>
        </div>
      </section>

      {/* Business Intelligence */}
      <section className="py-16 bg-white" id="business-intelligence">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 order-2 lg:order-1 transition-all duration-500 hover:shadow-lg">
              <div className="bg-[#F5F7FA] p-6 rounded-lg overflow-hidden h-full flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-xs mx-auto">
                  {/* Icône Business Intelligence */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0A192F]/5 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-[#0077FF]/50"
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
            </div>
            <div
              className="lg:col-span-8 order-1 lg:order-2 transition-all duration-500"
              data-service-id="business-intelligence"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#0A192F]">
                Business Intelligence
              </h2>
              <p className="text-lg text-[#4A5568] mb-6">
                Transformez vos données brutes en insights actionnables pour
                prendre des décisions éclairées. Notre expertise en BI vous
                permet de visualiser clairement vos performances, d'identifier
                les opportunités de croissance et d'optimiser votre stratégie
                commerciale grâce à une analyse approfondie de vos données
                métier.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-[#0A192F]">
                  Nos prestations
                </h3>
                <ul className="space-y-3">
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
                      Conception et déploiement de tableaux de bord interactifs
                      et dynamiques
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
                      Intégration et modélisation de données multi-sources (ERP,
                      CRM, Excel)
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
                      Mise en place d'entrepôts de données (Data Warehouse) et
                      data lakes
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
                      Reporting automatisé et KPIs personnalisés selon vos
                      objectifs métier
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#F5F7FA] p-6 rounded-lg border-l-4 border-[#0077FF] mb-6">
                <h3 className="text-xl font-semibold mb-3 text-[#0A192F]">
                  Bénéfices
                </h3>
                <p className="text-[#4A5568]">
                  Réduction de 70% du temps d'analyse, centralisation de
                  l'information en temps réel, meilleure visibilité sur les
                  performances commerciales et financières, et prise de décision
                  accélérée basée sur des données fiables et actualisées.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact?service=business-intelligence"
                  className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block text-center"
                >
                  Demander une démo
                </a>
                <a
                  href="/savoir-faire/business-intelligence"
                  className="bg-transparent border border-[#0A192F] hover:bg-[#0A192F]/5 text-[#0A192F] font-medium py-3 px-6 rounded-md transition-colors inline-block text-center"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Artificielle */}
      <section className="py-16 bg-[#F5F7FA]" id="intelligence-artificielle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div
              className="lg:col-span-8 transition-all duration-500"
              data-service-id="intelligence-artificielle"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#0A192F]">
                Intelligence Artificielle
              </h2>
              <p className="text-lg text-[#4A5568] mb-6">
                Exploitez la puissance de l'IA pour automatiser les tâches
                complexes, générer des prédictions précises et découvrir des
                patterns invisibles dans vos données. Nos solutions d'IA sont
                conçues pour s'intégrer parfaitement à votre écosystème existant
                et apporter une valeur ajoutée immédiate à votre entreprise.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-[#0A192F]">
                  Nos prestations
                </h3>
                <ul className="space-y-3">
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
                      Développement de modèles prédictifs et d'apprentissage
                      automatique (machine learning, deep learning)
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
                      Traitement du langage naturel (NLP), analyse de sentiment
                      et chatbots intelligents
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
                      Systèmes de recommandation personnalisés et moteurs de
                      décision
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
                      Détection d'anomalies, prévention des fraudes et analyse
                      prédictive
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#0077FF] mb-6">
                <h3 className="text-xl font-semibold mb-3 text-[#0A192F]">
                  Bénéfices
                </h3>
                <p className="text-[#4A5568]">
                  Anticipation des tendances du marché avec une précision de
                  85%, optimisation des processus décisionnels, réduction des
                  coûts opérationnels jusqu'à 30% et création de nouvelles
                  opportunités commerciales grâce à l'intelligence prédictive et
                  l'analyse avancée.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact?service=intelligence-artificielle"
                  className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block text-center"
                >
                  Demander une démo
                </a>
                <a
                  href="/savoir-faire/intelligence-artificielle"
                  className="bg-transparent border border-[#0A192F] hover:bg-[#0A192F]/5 text-[#0A192F] font-medium py-3 px-6 rounded-md transition-colors inline-block text-center"
                >
                  En savoir plus
                </a>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-white p-6 rounded-lg overflow-hidden h-full flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-xs mx-auto">
                  {/* Icône IA */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0A192F]/5 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-[#0077FF]/50"
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
            </div>
          </div>
        </div>
      </section>

      {/* Automatisation intelligente */}
      <section className="py-16 bg-white" id="automatisation-intelligente">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 order-2 lg:order-1 transition-all duration-500 hover:shadow-lg">
              <div className="bg-[#F5F7FA] p-6 rounded-lg overflow-hidden h-full flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-xs mx-auto">
                  {/* Icône Automatisation */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0A192F]/5 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-24 w-24 text-[#0077FF]/50"
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
            </div>
            <div
              className="lg:col-span-8 order-1 lg:order-2 transition-all duration-500"
              data-service-id="automatisation-intelligente"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#0A192F]">
                Automatisation intelligente
              </h2>
              <p className="text-lg text-[#4A5568] mb-6">
                Libérez votre équipe des tâches répétitives et optimisez vos
                processus métier grâce à l'automatisation intelligente. Nos
                solutions combinent RPA (Robotic Process Automation) et IA pour
                créer des workflows efficaces, évolutifs et adaptés à vos
                besoins spécifiques.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-[#0A192F]">
                  Nos prestations
                </h3>
                <ul className="space-y-3">
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
                      Automatisation des processus métier (BPA) et optimisation
                      des flux de travail
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
                      Robotisation des tâches répétitives (RPA) et
                      automatisation cognitive
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
                      Workflows intelligents et orchestration de processus
                      cross-fonctionnels
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
                      Automatisation du traitement documentaire et extraction
                      intelligente de données
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#F5F7FA] p-6 rounded-lg border-l-4 border-[#0077FF] mb-6">
                <h3 className="text-xl font-semibold mb-3 text-[#0A192F]">
                  Bénéfices
                </h3>
                <p className="text-[#4A5568]">
                  Gain de productivité jusqu'à 40%, réduction des erreurs
                  humaines de 90%, standardisation des processus critiques, et
                  recentrage des équipes sur des tâches à plus forte valeur
                  ajoutée pour une meilleure satisfaction client.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact?service=automatisation-intelligente"
                  className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block text-center"
                >
                  Demander une démo
                </a>
                <a
                  href="/savoir-faire/automatisation-intelligente"
                  className="bg-transparent border border-[#0A192F] hover:bg-[#0A192F]/5 text-[#0A192F] font-medium py-3 px-6 rounded-md transition-colors inline-block text-center"
                >
                  En savoir plus
                </a>
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
          <p className="text-xl text-[#F5F7FA] mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et de la façon dont nos services peuvent
            vous aider à atteindre vos objectifs business.
          </p>
          <a
            href="/contact"
            className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block text-lg"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </div>
  );
}

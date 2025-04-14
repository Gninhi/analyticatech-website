"use client";

import Image from "next/image";
import Script from "next/script";
import { FormEvent } from "react";

// Metadata doit être dans un fichier séparé pour les composants client

// Composant pour le bouton Calendly
function CalendlyButton({
  className,
  children,
  url,
}: {
  className?: string;
  children: React.ReactNode;
  url?: string;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) e.preventDefault();
    if (typeof window !== "undefined" && "Calendly" in window) {
      // Définir le type pour Calendly
      (window as any).Calendly.initPopupWidget({
        url: url || "https://calendly.com/analyticatech",
      });
    }
  };

  return (
    <a
      href="https://calendly.com/analyticatech"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

// Composant pour le formulaire de contact
function ContactForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log("Formulaire soumis");
  };

  return (
    <form className="space-y-6" id="contact-form" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="nom"
            className="block text-sm font-medium text-[#4A5568] mb-1"
          >
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF] focus:border-transparent"
            required
          />
        </div>
        <div>
          <label
            htmlFor="prenom"
            className="block text-sm font-medium text-[#4A5568] mb-1"
          >
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF] focus:border-transparent"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#4A5568] mb-1"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF] focus:border-transparent"
          required
        />
      </div>
      <div>
        <label
          htmlFor="telephone"
          className="block text-sm font-medium text-[#4A5568] mb-1"
        >
          Téléphone
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF] focus:border-transparent"
          placeholder="+33 (0)X XX XX XX XX"
        />
      </div>
      <div>
        <label
          htmlFor="entreprise"
          className="block text-sm font-medium text-[#4A5568] mb-1"
        >
          Entreprise
        </label>
        <input
          type="text"
          id="entreprise"
          name="entreprise"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF] focus:border-transparent"
        />
      </div>
      <div>
        <label
          htmlFor="sujet"
          className="block text-sm font-medium text-[#4A5568] mb-1"
        >
          Sujet <span className="text-red-500">*</span>
        </label>
        <select
          id="sujet"
          name="sujet"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF] focus:border-transparent"
          required
        >
          <option value="">Sélectionnez un sujet</option>
          <option value="data-analytics">Data & Analytics</option>
          <option value="business-intelligence">Business Intelligence</option>
          <option value="intelligence-artificielle">
            Intelligence Artificielle
          </option>
          <option value="automatisation">Automatisation</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#4A5568] mb-1"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF] focus:border-transparent"
          required
        ></textarea>
      </div>
      <div className="flex items-start">
        <input
          type="checkbox"
          id="rgpd"
          name="rgpd"
          className="mt-1 mr-2"
          required
        />
        <label htmlFor="rgpd" className="text-sm text-[#4A5568]">
          J'accepte que mes données soient traitées conformément à la{" "}
          <a
            href="/politique-confidentialite"
            className="text-[#0077FF] hover:underline"
          >
            politique de confidentialité
          </a>{" "}
          d'Analyticatech. Les informations recueillies ne seront utilisées que
          pour répondre à votre demande et ne seront pas partagées avec des
          tiers.
        </label>
      </div>
      {/* reCAPTCHA */}
      <div id="recaptcha" className="mb-4">
        <div
          className="g-recaptcha"
          data-sitekey="6LcXXXXXXXXXXXXXXXXXXXX"
        ></div>
      </div>
      <button
        type="submit"
        className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block w-full"
      >
        Envoyer
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0A192F] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-[#F5F7FA]">
              Besoin de conseils, d'un projet en Data ou BI, ou simplement
              d'informations sur nos services ? Nous sommes là pour vous aider.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact avec image */}
            <div className="bg-[#F5F7FA] p-8 rounded-lg relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold mb-6 text-[#0A192F]">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-[#4A5568] mb-6">
                    Remplissez le formulaire ci-dessous pour nous contacter.
                    Toutes les informations partagées seront traitées de manière
                    confidentielle et nous vous répondrons dans les plus brefs
                    délais.
                  </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64 drop-shadow-2xl">
                    <Image
                      src="/contact-image.svg"
                      alt="Contact Analyticatech"
                      width={250}
                      height={250}
                      className="object-contain filter drop-shadow-xl"
                    />
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>

            {/* Informations de contact et Calendly */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-6 text-[#0A192F]">
                  Nos coordonnées
                </h2>
                <p className="text-[#4A5568] mb-6">
                  Vous pouvez également nous contacter directement par téléphone
                  ou email. N'hésitez pas à nous suivre sur les réseaux sociaux
                  pour rester informé de nos actualités et nouveaux services en
                  Data, Business Intelligence et Automatisation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#0077FF]/10 p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#0077FF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0A192F]">Téléphone</h3>
                      <a
                        href="tel:+33768611310"
                        className="text-[#4A5568] hover:text-[#0077FF] transition-colors"
                      >
                        +33(0)768611310
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#0077FF]/10 p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#0077FF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0A192F]">Email</h3>
                      <a
                        href="mailto:contact@analyticatech.fr"
                        className="text-[#4A5568] hover:text-[#0077FF] transition-colors"
                      >
                        contact@analyticatech.fr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#0077FF]/10 p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#0077FF]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0A192F]">Adresse</h3>
                      <p className="text-[#4A5568]">
                        60 rue François 1er
                        <br />
                        75008 Paris, France
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-[#0A192F]">
                  Prenez rendez-vous
                </h2>
                <p className="text-[#4A5568] mb-6">
                  Préférez-vous une conversation directe ? Réservez un
                  rendez-vous en ligne avec l'un de nos consultants experts. Nos
                  horaires sont flexibles et nous proposons des consultations à
                  distance pour s'adapter à votre emploi du temps.
                </p>
                {/* Bouton Calendly */}
                <div className="mt-6">
                  <CalendlyButton className="bg-[#0A192F] hover:bg-[#0A192F]/90 text-white font-medium py-3 px-6 rounded-md transition-colors inline-block w-full text-center calendly-open-button">
                    Prendre rendez-vous
                  </CalendlyButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0A192F]">
              Où nous trouver
            </h2>
            <p className="text-lg text-[#4A5568]">
              Venez nous rencontrer dans nos bureaux au cœur de Paris
            </p>
          </div>
          {/* Google Maps */}
          <div className="h-96 bg-white rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2124506089474!2d2.3036448!3d48.8693558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc7505f4d17%3A0x62c433feb5e8a00f!2s60%20Rue%20Fran%C3%A7ois%201er%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1651234567890!5m2!1sfr!2sfr"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Analyticatech"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Section SEO optimisée */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#0A192F] text-center">
              Nos services de conseil en Data et Business Intelligence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#F5F7FA] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#0A192F]">
                  Expertise en Business Intelligence
                </h3>
                <p className="text-[#4A5568] mb-4">
                  Besoin d'une solution BI sur mesure ? Nos consultants experts
                  vous accompagnent dans la conception et l'implémentation de
                  tableaux de bord interactifs et d'analyses avancées pour
                  transformer vos données en décisions stratégiques.
                </p>
                <a
                  href="/services"
                  className="text-[#0077FF] hover:underline font-medium inline-flex items-center"
                >
                  En savoir plus sur nos services BI
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
              <div className="bg-[#F5F7FA] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#0A192F]">
                  Solutions d'automatisation
                </h3>
                <p className="text-[#4A5568] mb-4">
                  Optimisez vos processus métier grâce à nos solutions
                  d'automatisation intelligente. Éliminez les tâches
                  répétitives, réduisez les erreurs et concentrez-vous sur la
                  création de valeur pour votre entreprise.
                </p>
                <a
                  href="/services"
                  className="text-[#0077FF] hover:underline font-medium inline-flex items-center"
                >
                  Découvrir nos solutions d'automatisation
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
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#0A192F]">
                Prêt à transformer votre approche data ?
              </h3>
              <p className="text-lg text-[#4A5568] mb-6 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins
                spécifiques et découvrir comment nos services de Data consulting
                peuvent vous aider à atteindre vos objectifs.
              </p>
              <CalendlyButton className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white font-medium py-3 px-8 rounded-md transition-colors inline-block calendly-open-button">
                Prendre rendez-vous maintenant
              </CalendlyButton>
            </div>
          </div>
        </div>
      </section>

      {/* Préparation pour l'intégration future du chatbot */}
      <div
        id="chatbot-container"
        className="hidden fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-xl p-4 w-80 h-96 overflow-hidden"
      >
        <div className="flex justify-between items-center border-b pb-2 mb-2">
          <h3 className="font-bold text-[#0A192F]">
            Assistant IA Analyticatech
          </h3>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="text-center text-gray-500 mt-10">
          <p>Emplacement pour le futur chatbot IA assistant 24/7</p>
        </div>
      </div>

      {/* Scripts pour reCAPTCHA et Calendly */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

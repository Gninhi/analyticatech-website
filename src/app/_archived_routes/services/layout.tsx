import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Analyticatech | Business Intelligence, IA, Automatisation",
  description:
    "Découvrez les services d'Analyticatech : Business Intelligence, Intelligence Artificielle, Automatisation intelligente. Des solutions sur mesure pour votre croissance.",
  keywords:
    "services data, business intelligence, BI, intelligence artificielle, IA, automatisation intelligente, intégrations API, conseil, analyticatech",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

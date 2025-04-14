import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Réalisations - Analyticatech | Projets en Data, BI, IA et Automatisation",
  description:
    "Découvrez nos réalisations et projets en Data Science, Business Intelligence, Intelligence Artificielle et Automatisation des processus.",
  keywords:
    "projets data, business intelligence, BI, intelligence artificielle, IA, automatisation, conseil, analyticatech, réalisations, cas clients",
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

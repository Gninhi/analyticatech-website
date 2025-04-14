import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Analyticatech | Conseil en Data, BI, IA et Automatisation",
  description:
    "Contactez Analyticatech pour vos projets de Data, Business Intelligence, Intelligence Artificielle et Automatisation. Prenez rendez-vous avec nos experts.",
  keywords:
    "contact, rendez-vous, conseil data, business intelligence, BI, intelligence artificielle, IA, automatisation, analyticatech",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="contact-layout">{children}</div>;
}

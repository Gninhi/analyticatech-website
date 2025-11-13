import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administration - Analyticatech",
  description: "Interface d'administration du site Analyticatech",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      {/* Le header principal est déjà inclus dans le layout racine */}
      {children}
    </div>
  );
}

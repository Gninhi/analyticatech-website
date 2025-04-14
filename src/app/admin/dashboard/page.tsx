"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("services");
  const [services, setServices] = useState([]);
  const [realisations, setRealisations] = useState([]);
  const [contacts, setContacts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/check");
        if (!response.ok) {
          throw new Error("Non authentifié");
        }
        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        // Rediriger vers la page de connexion si non authentifié
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    // Charger les données en fonction de l'onglet actif
    if (!loading && user) {
      if (activeTab === "services") {
        fetchServices();
      } else if (activeTab === "realisations") {
        fetchRealisations();
      } else if (activeTab === "contacts") {
        fetchContacts();
      }
    }
  }, [activeTab, loading, user]);

  const fetchServices = async () => {
    try {
      const response = await fetch("/api/services");
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des services:", error);
    }
  };

  const fetchRealisations = async () => {
    try {
      const response = await fetch("/api/realisations");
      if (response.ok) {
        const data = await response.json();
        setRealisations(data);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des réalisations:", error);
    }
  };

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/contacts");
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des contacts:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0077FF] mx-auto"></div>
          <p className="mt-4 text-[#4A5568]">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#0A192F]">Tableau de bord</h1>
          <div className="flex items-center space-x-4">
            <span className="text-[#4A5568]">
              Bonjour, {user?.name || "Administrateur"}
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b">
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === "services"
                  ? "bg-[#0077FF] text-white"
                  : "text-[#4A5568] hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("services")}
            >
              Services
            </button>
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === "realisations"
                  ? "bg-[#0077FF] text-white"
                  : "text-[#4A5568] hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("realisations")}
            >
              Réalisations
            </button>
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === "contacts"
                  ? "bg-[#0077FF] text-white"
                  : "text-[#4A5568] hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("contacts")}
            >
              Contacts
            </button>
          </div>

          <div className="p-6">
            {activeTab === "services" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-[#0A192F]">
                    Gestion des services
                  </h2>
                  <Link
                    href="/admin/services/new"
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    Ajouter un service
                  </Link>
                </div>

                {services.length === 0 ? (
                  <p className="text-center py-4 text-gray-500">
                    Aucun service trouvé
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Titre
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Slug
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date de création
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {services.map((service: any) => (
                          <tr key={service.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {service.title}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {service.slug}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {new Date(service.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap space-x-2">
                              <Link
                                href={`/admin/services/edit/${service.id}`}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Modifier
                              </Link>
                              <button className="text-red-600 hover:text-red-900">
                                Supprimer
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === "realisations" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-[#0A192F]">
                    Gestion des réalisations
                  </h2>
                  <Link
                    href="/admin/realisations/new"
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    Ajouter une réalisation
                  </Link>
                </div>

                {realisations.length === 0 ? (
                  <p className="text-center py-4 text-gray-500">
                    Aucune réalisation trouvée
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Titre
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Client
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Secteur
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {realisations.map((realisation: any) => (
                          <tr key={realisation.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {realisation.title}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {realisation.client}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {realisation.sector}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap space-x-2">
                              <Link
                                href={`/admin/realisations/edit/${realisation.id}`}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Modifier
                              </Link>
                              <button className="text-red-600 hover:text-red-900">
                                Supprimer
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === "contacts" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-[#0A192F]">
                    Gestion des contacts
                  </h2>
                </div>

                {contacts.length === 0 ? (
                  <p className="text-center py-4 text-gray-500">
                    Aucun contact trouvé
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nom
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Statut
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {contacts.map((contact: any) => (
                          <tr key={contact.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {contact.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {contact.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {new Date(contact.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  contact.status === "NEW"
                                    ? "bg-green-100 text-green-800"
                                    : contact.status === "READ"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {contact.status === "NEW"
                                  ? "Nouveau"
                                  : contact.status === "READ"
                                  ? "Lu"
                                  : "Répondu"}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap space-x-2">
                              <Link
                                href={`/admin/contacts/${contact.id}`}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Voir
                              </Link>
                              <button className="text-red-600 hover:text-red-900">
                                Supprimer
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

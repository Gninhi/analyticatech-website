import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

// Fonction pour vérifier l'authentification
async function checkAuth() {
  const cookieStore = cookies();
  const sessionId = cookieStore.get("admin_session")?.value;

  if (!sessionId) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { id: sessionId },
  });

  return user;
}

// GET - Récupérer tous les services
export async function GET(request: NextRequest) {
  try {
    // Vérifier l'authentification pour les routes admin
    const url = new URL(request.url);
    const isAdminRoute = url.pathname.startsWith("/api/services/admin");

    if (isAdminRoute) {
      const user = await checkAuth();
      if (!user) {
        return NextResponse.json(
          { message: "Non authentifié" },
          { status: 401 }
        );
      }
    }

    // Récupérer tous les services
    const services = await prisma.service.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(services);
  } catch (error) {
    console.error("Erreur lors de la récupération des services:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

// POST - Créer un nouveau service
export async function POST(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const user = await checkAuth();
    if (!user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    // Récupérer les données du service
    const data = await request.json();

    // Validation des champs requis
    if (!data.title || !data.description || !data.slug) {
      return NextResponse.json(
        { message: "Titre, description et slug sont requis" },
        { status: 400 }
      );
    }

    // Vérifier si le slug existe déjà
    const existingService = await prisma.service.findUnique({
      where: { slug: data.slug },
    });

    if (existingService) {
      return NextResponse.json(
        { message: "Ce slug est déjà utilisé" },
        { status: 400 }
      );
    }

    // Créer le service
    const service = await prisma.service.create({
      data: {
        title: data.title,
        description: data.description,
        icon: data.icon || null,
        benefits: data.benefits || "",
        features: data.features || "", // Stocké en JSON stringifié
        slug: data.slug,
      },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création du service:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

// PUT - Mettre à jour un service existant
export async function PUT(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const user = await checkAuth();
    if (!user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    // Récupérer les données du service
    const data = await request.json();

    // Vérifier si l'ID est fourni
    if (!data.id) {
      return NextResponse.json(
        { message: "L'ID du service est requis" },
        { status: 400 }
      );
    }

    // Validation des champs requis
    if (!data.title || !data.description || !data.slug) {
      return NextResponse.json(
        { message: "Titre, description et slug sont requis" },
        { status: 400 }
      );
    }

    // Vérifier si le service existe
    const existingService = await prisma.service.findUnique({
      where: { id: data.id },
    });

    if (!existingService) {
      return NextResponse.json(
        { message: "Service non trouvé" },
        { status: 404 }
      );
    }

    // Vérifier si le slug est déjà utilisé par un autre service
    if (data.slug !== existingService.slug) {
      const slugExists = await prisma.service.findUnique({
        where: { slug: data.slug },
      });

      if (slugExists) {
        return NextResponse.json(
          { message: "Ce slug est déjà utilisé" },
          { status: 400 }
        );
      }
    }

    // Mettre à jour le service
    const updatedService = await prisma.service.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
        icon: data.icon || null,
        benefits: data.benefits || "",
        features: data.features || "",
        slug: data.slug,
      },
    });

    return NextResponse.json(updatedService);
  } catch (error) {
    console.error("Erreur lors de la mise à jour du service:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

// DELETE - Supprimer un service existant
export async function DELETE(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const user = await checkAuth();
    if (!user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    // Récupérer l'ID du service depuis l'URL
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    // Vérifier si l'ID est fourni
    if (!id) {
      return NextResponse.json(
        { message: "L'ID du service est requis" },
        { status: 400 }
      );
    }

    // Vérifier si le service existe
    const existingService = await prisma.service.findUnique({
      where: { id },
    });

    if (!existingService) {
      return NextResponse.json(
        { message: "Service non trouvé" },
        { status: 404 }
      );
    }

    // Supprimer le service
    await prisma.service.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Service supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression du service:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

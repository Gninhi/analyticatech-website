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

// GET - Récupérer toutes les réalisations
export async function GET(request: NextRequest) {
  try {
    // Vérifier l'authentification pour les routes admin
    const url = new URL(request.url);
    const isAdminRoute = url.pathname.startsWith("/api/realisations/admin");

    if (isAdminRoute) {
      const user = await checkAuth();
      if (!user) {
        return NextResponse.json(
          { message: "Non authentifié" },
          { status: 401 }
        );
      }
    }

    // Récupérer toutes les réalisations
    const realisations = await prisma.realisation.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(realisations);
  } catch (error) {
    console.error("Erreur lors de la récupération des réalisations:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

// POST - Créer une nouvelle réalisation
export async function POST(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const user = await checkAuth();
    if (!user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    // Récupérer les données de la réalisation
    const data = await request.json();

    // Validation des champs requis
    if (
      !data.title ||
      !data.description ||
      !data.client ||
      !data.sector ||
      !data.challenge ||
      !data.solution ||
      !data.results ||
      !data.slug
    ) {
      return NextResponse.json(
        { message: "Tous les champs sont requis sauf l'image" },
        { status: 400 }
      );
    }

    // Vérifier si le slug existe déjà
    const existingRealisation = await prisma.realisation.findUnique({
      where: { slug: data.slug },
    });

    if (existingRealisation) {
      return NextResponse.json(
        { message: "Ce slug est déjà utilisé" },
        { status: 400 }
      );
    }

    // Créer la réalisation
    const realisation = await prisma.realisation.create({
      data: {
        title: data.title,
        description: data.description,
        client: data.client,
        sector: data.sector,
        challenge: data.challenge,
        solution: data.solution,
        results: data.results,
        imageUrl: data.imageUrl || null,
        slug: data.slug,
      },
    });

    return NextResponse.json(realisation, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création de la réalisation:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

// PUT - Mettre à jour une réalisation existante
export async function PUT(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const user = await checkAuth();
    if (!user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    // Récupérer les données de la réalisation
    const data = await request.json();

    // Vérifier si l'ID est fourni
    if (!data.id) {
      return NextResponse.json(
        { message: "L'ID de la réalisation est requis" },
        { status: 400 }
      );
    }

    // Validation des champs requis
    if (
      !data.title ||
      !data.description ||
      !data.client ||
      !data.sector ||
      !data.challenge ||
      !data.solution ||
      !data.results ||
      !data.slug
    ) {
      return NextResponse.json(
        { message: "Tous les champs sont requis sauf l'image" },
        { status: 400 }
      );
    }

    // Vérifier si la réalisation existe
    const existingRealisation = await prisma.realisation.findUnique({
      where: { id: data.id },
    });

    if (!existingRealisation) {
      return NextResponse.json(
        { message: "Réalisation non trouvée" },
        { status: 404 }
      );
    }

    // Vérifier si le slug est déjà utilisé par une autre réalisation
    if (data.slug !== existingRealisation.slug) {
      const slugExists = await prisma.realisation.findUnique({
        where: { slug: data.slug },
      });

      if (slugExists) {
        return NextResponse.json(
          { message: "Ce slug est déjà utilisé" },
          { status: 400 }
        );
      }
    }

    // Mettre à jour la réalisation
    const updatedRealisation = await prisma.realisation.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
        client: data.client,
        sector: data.sector,
        challenge: data.challenge,
        solution: data.solution,
        results: data.results,
        imageUrl: data.imageUrl || existingRealisation.imageUrl,
        slug: data.slug,
      },
    });

    return NextResponse.json(updatedRealisation);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la réalisation:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

// DELETE - Supprimer une réalisation existante
export async function DELETE(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const user = await checkAuth();
    if (!user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    // Récupérer l'ID de la réalisation depuis l'URL
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    // Vérifier si l'ID est fourni
    if (!id) {
      return NextResponse.json(
        { message: "L'ID de la réalisation est requis" },
        { status: 400 }
      );
    }

    // Vérifier si la réalisation existe
    const existingRealisation = await prisma.realisation.findUnique({
      where: { id },
    });

    if (!existingRealisation) {
      return NextResponse.json(
        { message: "Réalisation non trouvée" },
        { status: 404 }
      );
    }

    // Supprimer la réalisation
    await prisma.realisation.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Réalisation supprimée avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de la réalisation:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

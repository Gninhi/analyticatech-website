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

// GET - Récupérer tous les contacts
export async function GET(request: NextRequest) {
  try {
    // Vérifier l'authentification car les contacts sont des données sensibles
    const user = await checkAuth();
    if (!user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    // Récupérer tous les contacts
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Erreur lors de la récupération des contacts:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

// POST - Créer un nouveau contact (formulaire de contact public)
export async function POST(request: NextRequest) {
  try {
    // Protection contre les attaques CSRF
    const referer = request.headers.get("referer");
    if (!referer || !referer.includes(process.env.NEXT_PUBLIC_SITE_URL || "")) {
      return NextResponse.json(
        { message: "Requête non autorisée" },
        { status: 403 }
      );
    }

    // Récupérer les données du contact
    const data = await request.json();

    // Validation des champs requis
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { message: "Nom, email et message sont requis" },
        { status: 400 }
      );
    }

    // Créer le contact
    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        message: data.message,
        service: data.service || null,
        status: "NEW",
      },
    });

    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création du contact:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

// PUT - Mettre à jour un contact existant (marquer comme lu, répondu, etc.)
export async function PUT(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const user = await checkAuth();
    if (!user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    // Récupérer les données du contact
    const data = await request.json();

    // Vérifier si l'ID est fourni
    if (!data.id) {
      return NextResponse.json(
        { message: "L'ID du contact est requis" },
        { status: 400 }
      );
    }

    // Vérifier si le contact existe
    const existingContact = await prisma.contact.findUnique({
      where: { id: data.id },
    });

    if (!existingContact) {
      return NextResponse.json(
        { message: "Contact non trouvé" },
        { status: 404 }
      );
    }

    // Mettre à jour le contact
    const updatedContact = await prisma.contact.update({
      where: { id: data.id },
      data: {
        status: data.status || existingContact.status,
      },
    });

    return NextResponse.json(updatedContact);
  } catch (error) {
    console.error("Erreur lors de la mise à jour du contact:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

// DELETE - Supprimer un contact existant
export async function DELETE(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const user = await checkAuth();
    if (!user) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    // Récupérer l'ID du contact depuis l'URL
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    // Vérifier si l'ID est fourni
    if (!id) {
      return NextResponse.json(
        { message: "L'ID du contact est requis" },
        { status: 400 }
      );
    }

    // Vérifier si le contact existe
    const existingContact = await prisma.contact.findUnique({
      where: { id },
    });

    if (!existingContact) {
      return NextResponse.json(
        { message: "Contact non trouvé" },
        { status: 404 }
      );
    }

    // Supprimer le contact
    await prisma.contact.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Contact supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression du contact:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

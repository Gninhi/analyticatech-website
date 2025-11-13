import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  try {
    // Récupération du cookie de session
    const cookieStore = cookies();
    const sessionId = cookieStore.get("admin_session")?.value;

    // Vérification si le cookie de session existe
    if (!sessionId) {
      return NextResponse.json({ message: "Non authentifié" }, { status: 401 });
    }

    // Recherche de l'utilisateur correspondant à l'ID de session
    const user = await prisma.user.findUnique({
      where: { id: sessionId },
    });

    // Vérification si l'utilisateur existe
    if (!user) {
      return NextResponse.json(
        { message: "Utilisateur non trouvé" },
        { status: 401 }
      );
    }

    // Retourne les informations de l'utilisateur sans le mot de passe
    return NextResponse.json({
      message: "Authentifié",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Erreur de vérification d'authentification:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

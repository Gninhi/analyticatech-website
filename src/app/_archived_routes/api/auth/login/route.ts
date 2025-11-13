import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Vérification des champs requis
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email et mot de passe requis" },
        { status: 400 }
      );
    }

    // Recherche de l'utilisateur
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Vérification si l'utilisateur existe
    if (!user) {
      return NextResponse.json(
        { message: "Identifiants incorrects" },
        { status: 401 }
      );
    }

    // Vérification du mot de passe
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Identifiants incorrects" },
        { status: 401 }
      );
    }

    // Création d'un cookie de session (simple pour cet exemple)
    // Dans un environnement de production, utilisez JWT ou une solution plus robuste
    const cookieStore = cookies();
    const sessionDuration = parseInt(
      process.env.SESSION_DURATION || "86400",
      10
    ); // Durée en secondes, par défaut 1 jour
    cookieStore.set("admin_session", user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: sessionDuration,
      path: "/",
      sameSite: "strict", // Protection supplémentaire contre les attaques CSRF
    });

    // Retourne les informations de l'utilisateur sans le mot de passe
    return NextResponse.json({
      message: "Connexion réussie",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Erreur de connexion:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

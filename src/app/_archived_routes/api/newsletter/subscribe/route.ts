import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST - S'inscrire à la newsletter
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

    // Limiter le nombre de requêtes (protection contre les attaques par force brute)
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const rateLimitKey = `newsletter_subscribe_${ip}`;

    // Vérifier si l'IP a déjà fait trop de requêtes récemment
    // Dans un environnement de production, utilisez Redis ou une autre solution de cache
    // Pour cet exemple, nous simulons une vérification
    const requestsPerMinute = 5; // Limite à 5 requêtes par minute par IP

    // Vérification simple (à remplacer par une implémentation réelle avec Redis en production)
    if (process.env.NODE_ENV === "production") {
      // En production, on devrait implémenter un vrai rate limiting
      // Exemple: const attempts = await redis.incr(rateLimitKey);
      // await redis.expire(rateLimitKey, 60); // Expire après 60 secondes
      // if (attempts > requestsPerMinute) { ... }
    }

    // Récupérer les données du formulaire
    const data = await request.json().catch(() => null);

    // Si les données ne sont pas au format JSON, essayer de récupérer les données du formulaire
    let email = data?.email;
    if (!email) {
      const formData = await request.formData().catch(() => null);
      email = (formData?.get("email") as string) || "";
    }

    // Validation de l'email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Adresse email invalide" },
        { status: 400 }
      );
    }

    // Vérifier si l'email existe déjà
    const existingSubscriber = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json(
        { message: "Cette adresse email est déjà inscrite à notre newsletter" },
        { status: 400 }
      );
    }

    // Créer l'inscription à la newsletter
    const subscriber = await prisma.newsletter.create({
      data: {
        email,
        status: "ACTIVE",
      },
    });

    return NextResponse.json(
      { message: "Inscription à la newsletter réussie" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur lors de l'inscription à la newsletter:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

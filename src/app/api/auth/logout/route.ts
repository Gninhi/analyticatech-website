import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    // Suppression du cookie de session
    const cookieStore = cookies();
    cookieStore.delete("admin_session");

    return NextResponse.json({ message: "Déconnexion réussie" });
  } catch (error) {
    console.error("Erreur de déconnexion:", error);
    return NextResponse.json({ message: "Erreur de serveur" }, { status: 500 });
  }
}

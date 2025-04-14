// Script pour créer un compte administrateur
const { PrismaClient } = require("../src/generated/prisma");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email: "gninhi@analyticatech.fr" },
    });

    if (existingUser) {
      console.log("Un utilisateur avec cet email existe déjà.");
      return;
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash("V!ct0ry1956%%$", 10);

    // Créer l'utilisateur
    const user = await prisma.user.create({
      data: {
        email: "gninhi@analyticatech.fr",
        password: hashedPassword,
        name: "Admin Analyticatech",
        role: "ADMIN",
      },
    });

    console.log("Compte administrateur créé avec succès:", user.email);
  } catch (error) {
    console.error(
      "Erreur lors de la création du compte administrateur:",
      error
    );
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { identification, birthDate, breed, gender } = req.body;
    try {
      const newAnimal = await prisma.animal.create({
        data: {
          identification,
          birthDate: new Date(birthDate),
          breed,
          gender,
        },
      });
      res.status(201).json({ success: true, data: newAnimal });
    } catch (error) {
      console.error("Error creating animal:", error);
      res.status(500).json({ success: false, message: "Error creating animal" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "GET": {
        // Lógica para obtener registros
        const events = await prisma.event.findMany(); // Prisma automáticamente selecciona todos los campos
        return res.status(200).json(events);
      }

      case "POST": {
        // Lógica para crear un nuevo registro
        const { name, date } = req.body;

        if (!name || !date) {
          return res.status(400).json({ error: "Name and date are required" });
        }

        const newEvent = await prisma.event.create({
          data: { name, date: new Date(date) }, // Convierte date a un objeto Date si es necesario
        });

        return res.status(201).json(newEvent);
      }

      case "PUT": {
        // Lógica para actualizar un registro
        const { id, ...updateData } = req.body;

        if (!id) {
          return res.status(400).json({ error: "ID is required for update" });
        }

        const updatedEvent = await prisma.event.update({
          where: { id },
          data: updateData,
        });

        return res.status(200).json(updatedEvent);
      }

      case "DELETE": {
        // Lógica para eliminar un registro
        const { eventId } = req.body;

        if (!eventId) {
          return res.status(400).json({ error: "Event ID is required for deletion" });
        }

        await prisma.event.delete({
          where: { id: eventId },
        });

        return res.status(204).end();
      }

      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error in events handler:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

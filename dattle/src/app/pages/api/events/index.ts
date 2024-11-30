import { NextApiRequest, NextApiResponse } from "next";
import  knexInstance  from "../../../../lib/knex";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "GET":
        // Lógica para obtener registros
        const events = await knexInstance("events").select("*");
        return res.status(200).json(events);

      case "POST":
        // Lógica para crear un nuevo registro
        const { name, date } = req.body;
        const [newEvent] = await knexInstance("events").insert({ name, date }).returning("*");
        return res.status(201).json(newEvent);

      case "PUT":
        // Lógica para actualizar un registro
        const { id, ...updateData } = req.body;
        const [updatedEvent] = await knexInstance("events").where({ id }).update(updateData).returning("*");
        return res.status(200).json(updatedEvent);

      case "DELETE":
        // Lógica para eliminar un registro
        const { eventId } = req.body;
        await knexInstance("events").where({ id: eventId }).del();
        return res.status(204).end();

      default:
        return res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]).status(405).end();
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
